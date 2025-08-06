<template>
  <div class="custom-calendar">
    <div class="calendar-header">
      <v-btn
        icon
        @click="previousMonth"
        :disabled="isFirstMonth"
        color="amber-lighten-3">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <h3 class="month-year">{{ currentMonthYear }}</h3>
      <v-btn
        icon
        @click="nextMonth"
        :disabled="isLastMonth"
        color="amber-lighten-3">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </div>

    <div class="calendar-grid">
      <!-- Day headers -->
      <div class="day-header" v-for="day in dayNames" :key="day">
        {{ day }}
      </div>

      <!-- Calendar days -->
      <div
        v-for="day in calendarDays"
        :key="day.date"
        class="calendar-day"
        :class="{
          'other-month': !day.isCurrentMonth,
          'out-of-scope': isOutOfScope(day.date),
          'other-month-disabled':
            !day.isCurrentMonth &&
            isDateDisabled(day.date) &&
            !isOutOfScope(day.date),
          'other-month-available':
            !day.isCurrentMonth &&
            !isDateDisabled(day.date) &&
            !isOutOfScope(day.date),
          disabled:
            day.isCurrentMonth &&
            isDateDisabled(day.date) &&
            !isOutOfScope(day.date),
          available:
            day.isCurrentMonth &&
            !isDateDisabled(day.date) &&
            !isOutOfScope(day.date),
        }"
        :title="formatFullDate(day.date)">
        {{ day.dayNumber }}
      </div>
    </div>

    <div class="calendar-legend">
      <div class="legend-item">
        <div class="legend-color available"></div>
        <span>Available</span>
      </div>
      <div class="legend-item">
        <div class="legend-color disabled"></div>
        <span>Unavailable</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomCalendar",
  props: {
    modelValue: {
      type: String,
      default: null,
    },
    minDate: {
      type: String,
      default: "2026-06-01",
    },
    maxDate: {
      type: String,
      default: "2026-10-01",
    },
    disabledDates: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentDate: new Date("2026-06-01"), // Start from June 1, 2026
      dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    };
  },
  computed: {
    currentMonthYear() {
      return this.currentDate.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      });
    },
    isFirstMonth() {
      const minDate = new Date(this.minDate);
      return (
        this.currentDate.getFullYear() === minDate.getFullYear() &&
        this.currentDate.getMonth() === minDate.getMonth()
      );
    },
    isLastMonth() {
      const maxDate = new Date("2026-09-01"); // Limit to September
      return (
        this.currentDate.getFullYear() === maxDate.getFullYear() &&
        this.currentDate.getMonth() === maxDate.getMonth()
      );
    },
    calendarDays() {
      const year = this.currentDate.getFullYear();
      const month = this.currentDate.getMonth();

      // Get first day of month and last day of month
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);

      // Get the day of week for first day (0 = Sunday)
      const firstDayOfWeek = firstDay.getDay();

      // Get the last day number
      const lastDayNumber = lastDay.getDate();

      const days = [];

      // Add days from previous month
      const prevMonth = new Date(year, month, 0);
      const prevMonthDays = prevMonth.getDate();
      for (let i = firstDayOfWeek - 1; i >= 0; i--) {
        const dayNumber = prevMonthDays - i;
        const date = new Date(year, month - 1, dayNumber);
        days.push({
          date: this.formatDate(date),
          dayNumber,
          isCurrentMonth: false,
        });
      }

      // Add days from current month
      for (let day = 1; day <= lastDayNumber; day++) {
        const date = new Date(year, month, day);
        days.push({
          date: this.formatDate(date),
          dayNumber: day,
          isCurrentMonth: true,
        });
      }

      // Add days from next month to fill the grid
      const remainingDays = 42 - days.length; // 6 rows * 7 days = 42
      for (let day = 1; day <= remainingDays; day++) {
        const date = new Date(year, month + 1, day);
        days.push({
          date: this.formatDate(date),
          dayNumber: day,
          isCurrentMonth: false,
        });
      }

      return days;
    },
  },
  methods: {
    formatDate(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    },
    formatFullDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
    isDateDisabled(date) {
      return this.disabledDates.includes(date);
    },
    isOutOfScope(date) {
      const selectedDate = new Date(date);
      const minDate = new Date(this.minDate);
      const maxDate = new Date(this.maxDate);
      return selectedDate < minDate || selectedDate > maxDate;
    },

    previousMonth() {
      if (!this.isFirstMonth) {
        this.currentDate = new Date(
          this.currentDate.getFullYear(),
          this.currentDate.getMonth() - 1,
          1
        );
      }
    },
    nextMonth() {
      if (!this.isLastMonth) {
        this.currentDate = new Date(
          this.currentDate.getFullYear(),
          this.currentDate.getMonth() + 1,
          1
        );
      }
    },
  },
};
</script>

<style scoped>
.custom-calendar {
  background: white;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding: 0 8px;
}

.month-year {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
  margin-bottom: 16px;
}

.day-header {
  text-align: center;
  font-weight: 600;
  color: #666;
  padding: 8px 4px;
  font-size: 0.9rem;
}

.calendar-day {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;
  border: 1px solid transparent;
}

.calendar-day.other-month {
  color: #ccc;
  cursor: default;
}

.calendar-day.out-of-scope {
  color: #bdbdbd;
  background-color: #f5f5f5;
  cursor: default;
  opacity: 0.5;
}

.calendar-day.other-month-disabled {
  color: #ffcdd2;
  background-color: #ffebee;
  opacity: 0.8;
}

.calendar-day.other-month-available {
  color: #a5d6a7;
  background-color: #c8e6c9;
  opacity: 0.8;
}

.calendar-day.available {
  color: #333;
  background-color: #e8f5e8;
  border-color: #4caf50;
}

.calendar-day.available:hover {
  background-color: #c8e6c9;
  border-color: #4caf50;
}

.calendar-day.disabled {
  color: #d32f2f;
  background-color: #ffebee;
  cursor: not-allowed;
  text-decoration: line-through;
  opacity: 0.8;
}

.calendar-legend {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #eee;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  color: #666;
}

.legend-color {
  width: 12px;
  height: 12px;
  border-radius: 4px;
  border: 1px solid #ddd;
}

.legend-color.available {
  background-color: #e8f5e8;
  border-color: #4caf50;
}

.legend-color.disabled {
  background-color: #ffebee;
  border-color: #d32f2f;
  opacity: 0.8;
}

/* Mobile responsiveness */
@media (max-width: 480px) {
  .custom-calendar {
    padding: 12px;
  }

  .calendar-day {
    font-size: 0.8rem;
  }

  .calendar-legend {
    flex-direction: column;
    gap: 8px;
    align-items: center;
  }
}

/* Custom styling for disabled arrow buttons */
.custom-calendar .v-btn--disabled {
  opacity: 0.5 !important;
}

.custom-calendar .v-btn--disabled .v-icon {
  opacity: 0.5 !important;
}
</style>

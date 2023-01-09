<template>
  <v-card class="mx-auto" max-width="368">
    <v-card-item :title="p_title">
      <template v-slot:subtitle>
        {{ p_description }}
      </template>
    </v-card-item>

    <v-card-text class="py-0">
      <v-row align="center" no-gutters>
        <v-col class="" cols="8">
          <v-list lines="one">
            <v-list-item
              v-for="item in p_list"
              :key="item.title"
              :title="item.title"
              :subtitle="item.subtitle"></v-list-item>
          </v-list>
        </v-col>

        <v-col cols="4" class="text-right">
          <v-icon :color="p_iconColor" :icon="p_icon" size="88"></v-icon>
        </v-col>
      </v-row>
    </v-card-text>

    <div class="d-flex py-3 justify-space-between">
      <v-list-item density="compact" prepend-icon="mdi-weather-windy">
        <v-list-item-subtitle>123 km/h</v-list-item-subtitle>
      </v-list-item>

      <v-list-item density="compact" prepend-icon="mdi-weather-pouring">
        <v-list-item-subtitle>48%</v-list-item-subtitle>
      </v-list-item>
    </div>

    <v-expand-transition>
      <div v-if="expand">
        <div class="py-2"></div>

        <v-list class="bg-transparent">
          <v-list-item
            v-for="item in forecast"
            :key="item.day"
            :title="item.day"
            :append-icon="item.icon"
            :subtitle="item.temp">
          </v-list-item>
        </v-list>
      </div>
    </v-expand-transition>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn @click="expand = !expand" :color="'black'">
        {{ !expand ? p_extendTitle : "Close" }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: [
    "p_title",
    "p_description",
    "p_icon",
    "p_iconColor",
    "p_list",
    "p_extendTitle",
  ],
  data: () => ({
    labels: { 0: "SU", 1: "MO", 2: "TU", 3: "WED", 4: "TH", 5: "FR", 6: "SA" },
    expand: false,
    time: 0,
    forecast: [
      {
        day: "Tuesday",
        icon: "mdi-white-balance-sunny",
        temp: "24\xB0/12\xB0",
      },
      {
        day: "Wednesday",
        icon: "mdi-white-balance-sunny",
        temp: "22\xB0/14\xB0",
      },
      { day: "Thursday", icon: "mdi-cloud", temp: "25\xB0/15\xB0" },
    ],
  }),
};
</script>

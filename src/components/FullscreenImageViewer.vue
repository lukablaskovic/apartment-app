<template>
  <v-dialog
    v-model="isOpen"
    fullscreen
    transition="dialog-bottom-transition"
    class="fullscreen-viewer"
    @keydown.esc="close">
    <v-card class="fullscreen-card">
      <!-- Close Button -->
      <v-btn
        icon
        size="large"
        color="amber-darken-1"
        class="close-btn"
        @click="close"
        aria-label="Close fullscreen viewer">
        <v-icon size="32">mdi-close</v-icon>
      </v-btn>

      <!-- Previous Button -->
      <v-btn
        v-if="images.length > 1"
        icon
        size="large"
        color="amber-darken-1"
        class="nav-btn prev-btn"
        @click="previousImage"
        aria-label="Previous image">
        <v-icon size="32">mdi-chevron-left</v-icon>
      </v-btn>

      <!-- Next Button -->
      <v-btn
        v-if="images.length > 1"
        icon
        size="large"
        color="amber-darken-1"
        class="nav-btn next-btn"
        @click="nextImage"
        aria-label="Next image">
        <v-icon size="32">mdi-chevron-right</v-icon>
      </v-btn>

      <!-- Image Container -->
      <div class="image-container" @click.self="close">
        <transition name="fade" mode="out-in">
          <img
            :key="currentIndex"
            :src="currentImage.src"
            :alt="currentImage.desc"
            class="fullscreen-image"
            @click.stop />
        </transition>

        <!-- Image Description -->
        <transition name="fade" mode="out-in">
          <div :key="currentIndex" class="image-description">
            <p class="text-h6 text-center mb-2">{{ currentImage.desc }}</p>
            <p class="text-center text-grey-lighten-1" v-if="images.length > 1">
              {{ currentIndex + 1 }} / {{ images.length }}
            </p>
          </div>
        </transition>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "FullscreenImageViewer",
  props: {
    images: {
      type: Array,
      required: true,
      default: () => [],
    },
    initialIndex: {
      type: Number,
      default: 0,
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      currentIndex: this.initialIndex,
    };
  },
  computed: {
    isOpen: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
    currentImage() {
      return this.images[this.currentIndex] || {};
    },
  },
  watch: {
    initialIndex(newVal) {
      this.currentIndex = newVal;
    },
    isOpen(newVal) {
      if (newVal) {
        // Add keyboard event listener when dialog opens
        window.addEventListener("keydown", this.handleKeydown);
      } else {
        // Remove keyboard event listener when dialog closes
        window.removeEventListener("keydown", this.handleKeydown);
      }
    },
  },
  methods: {
    close() {
      this.isOpen = false;
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    previousImage() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    handleKeydown(e) {
      switch (e.key) {
        case "Escape":
          this.close();
          break;
        case "ArrowRight":
          this.nextImage();
          break;
        case "ArrowLeft":
          this.previousImage();
          break;
      }
    },
  },
  beforeUnmount() {
    // Cleanup keyboard event listener
    window.removeEventListener("keydown", this.handleKeydown);
  },
};
</script>

<style scoped>
.fullscreen-card {
  background-color: rgba(0, 0, 0, 0.95);
  position: relative;
  overflow: hidden;
}

.image-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 20px 20px;
  cursor: zoom-out;
}

.fullscreen-image {
  max-width: 90%;
  max-height: 80vh;
  object-fit: contain;
  cursor: default;
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
}

.image-description {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 24px;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.6) 50%,
    transparent 100%
  );
  color: white;
}

.close-btn {
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 1000;
  transition: all 0.3s ease;
}

.close-btn:hover {
  transform: rotate(90deg);
}

.nav-btn {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  transition: all 0.3s ease;
}

.nav-btn:hover {
  transform: translateY(-50%) scale(1.1);
}

.prev-btn {
  left: 16px;
}

.next-btn {
  right: 16px;
}

@media (max-width: 768px) {
  .fullscreen-image {
    max-width: 95%;
    max-height: 70vh;
  }

  .image-description {
    padding: 16px;
  }

  .image-description .text-h6 {
    font-size: 1rem !important;
  }

  .nav-btn {
    opacity: 0.7;
  }

  .close-btn {
    top: 8px;
    right: 8px;
  }

  .prev-btn {
    left: 8px;
  }

  .next-btn {
    right: 8px;
  }
}

/* Fade transition for image changes */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.fade-leave-to {
  opacity: 0;
  transform: scale(1.05);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>


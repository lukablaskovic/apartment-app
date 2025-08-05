<template>
  <div class="lazy-image-container" :style="containerStyle">
    <!-- Placeholder while loading -->
    <div v-if="!isLoaded && !hasError" class="image-placeholder">
      <div class="loading-content">
        <v-progress-circular indeterminate color="grey-darken-2" size="48">
        </v-progress-circular>
        <p class="loading-text">Loading...</p>
      </div>
    </div>

    <!-- Error state -->
    <div v-if="hasError" class="image-error">
      <v-icon icon="mdi-image-off" size="48" color="grey-lighten-2"></v-icon>
      <p class="error-text">Failed to load image</p>
    </div>

    <!-- Actual image -->
    <img
      v-show="isLoaded && !hasError"
      :src="imageSrc"
      :alt="alt"
      :class="imageClass"
      @load="onImageLoad"
      @error="onImageError"
      class="lazy-image"
      :style="imageStyle" />
  </div>
</template>

<script>
export default {
  name: "LazyImage",
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: "",
    },
    aspectRatio: {
      type: [String, Number],
      default: "16/9",
    },
    cover: {
      type: Boolean,
      default: false,
    },
    class: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isLoaded: false,
      hasError: false,
      imageSrc: null,
    };
  },
  computed: {
    imageClass() {
      return `lazy-image ${this.class}`;
    },
    imageStyle() {
      const styles = {};
      if (this.cover) {
        styles.objectFit = "cover";
      }
      return styles;
    },
    containerStyle() {
      const styles = {};
      if (this.aspectRatio) {
        const ratio = this.aspectRatio;
        if (typeof ratio === "number") {
          styles.paddingBottom = `${(1 / ratio) * 100}%`;
        } else if (typeof ratio === "string") {
          const [width, height] = ratio.split("/").map(Number);
          if (width && height) {
            styles.paddingBottom = `${(height / width) * 100}%`;
          }
        }
      }
      return styles;
    },
  },
  mounted() {
    this.setupIntersectionObserver();
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    setupIntersectionObserver() {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.loadImage();
              this.observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: "50px 0px",
          threshold: 0.01,
        }
      );

      this.observer.observe(this.$el);
    },
    loadImage() {
      // Add a small delay to make placeholder visible for testing
      setTimeout(() => {
        this.imageSrc = this.src;
      }, 500);
    },
    onImageLoad() {
      this.isLoaded = true;
      this.hasError = false;
      this.$emit("load");
    },
    onImageError() {
      this.hasError = true;
      this.isLoaded = false;
      this.$emit("error");
    },
  },
};
</script>

<style scoped>
.lazy-image-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: #f5f5f5;
}

.image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  border-radius: inherit;
  animation: pulse 2s infinite;
}

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.loading-text {
  margin: 0;
  font-size: 14px;
  color: #666;
  font-weight: 500;
}

@keyframes pulse {
  0% {
    background-color: #f5f5f5;
  }
  50% {
    background-color: #e0e0e0;
  }
  100% {
    background-color: #f5f5f5;
  }
}

.image-error {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  border-radius: inherit;
}

.error-text {
  margin-top: 8px;
  font-size: 12px;
  color: #666;
  text-align: center;
}

.lazy-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
}

.lazy-image:not([src]) {
  opacity: 0;
}

.lazy-image[src] {
  opacity: 1;
}
</style>

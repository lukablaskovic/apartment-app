<template>
  <div>
    <v-row class="pa-2">
      <v-col
        data-aos="flip-left"
        data-aos-delay="300"
        v-for="(g, index) in galleryImages"
        :key="g.src"
        class="pa-2"
        sm="6"
        cols="12">
        <div class="d-flex flex-column">
          <div class="gallery-image-container" @click="openFullscreen(index)">
            <LazyImage
              :src="g.src"
              :alt="g.desc"
              :cover="true"
              class="bg-grey-lighten-2 rounded-lg clickable-image"
              :aspect-ratio="16 / 9" />
            <div class="image-overlay">
              <v-icon size="48" color="white">mdi-magnify-plus-outline</v-icon>
            </div>
          </div>
          <span class="text-center pt-2">{{ g.desc }}</span>
        </div>
      </v-col>
    </v-row>

    <!-- Fullscreen Image Viewer -->
    <FullscreenImageViewer
      v-model="showFullscreen"
      :images="galleryImages"
      :initial-index="selectedImageIndex" />
  </div>
</template>
<script>
import LazyImage from "./LazyImage.vue";
import FullscreenImageViewer from "./FullscreenImageViewer.vue";
import room1 from "@/assets//gallery/room1.jpg";
import room2 from "@/assets//gallery/room2.jpg";
import bathroom from "@/assets//gallery/bathroom.webp";
import bar from "@/assets//gallery//bar.jpg";
import dining from "@/assets//gallery/dining.webp";
import veranda from "@/assets//gallery//veranda.jpg";
import kitchen from "@/assets//gallery/kitchen.jpg";
import living_room from "@/assets//gallery//living_room.jpg";
import toilet from "@/assets//gallery/toilet.webp";
import garden1 from "@/assets//gallery//garden1.jpg";
import garden2 from "@/assets//gallery//garden2.jpg";
import garden3 from "@/assets//gallery//garden3.jpg";

export default {
  components: {
    LazyImage,
    FullscreenImageViewer,
  },
  data: () => ({
    showFullscreen: false,
    selectedImageIndex: 0,
    galleryImages: [
      {
        src: living_room,
        desc: "Cozy living room with a view of the garden",
      },
      {
        src: dining,
        desc: "Dining room with modern furniture",
      },
      { src: bathroom, desc: "Modern bathroom with all essentials" },
      {
        src: toilet,
        desc: "Clean shower and toilet facilities",
      },
      {
        src: veranda,
        desc: "Peaceful veranda - great place to relax with a cup of coffee ☕️",
      },
      { src: bar, desc: "Enjoy a glass of wine at the bar 🍷" },
      { src: kitchen, desc: "Fully equipped modern kitchen" },
      {
        src: room1,
        desc: "Spacious bedroom #1 (double bed and double wardrobe)",
      },
      { src: room2, desc: "Comfortable bedroom #2 with private working space" },
      {
        src: garden1,
        desc: "Main garden area - perfect for BBQ and outdoor dining",
      },
      {
        src: garden2,
        desc: "Garden swing area - great place to relax with a book",
      },
      {
        src: garden3,
        desc: "Japanese Persimmon tree does a great job of providing enough shade in hot summer days",
      },
    ],
  }),
  methods: {
    openFullscreen(index) {
      this.selectedImageIndex = index;
      this.showFullscreen = true;
    },
  },
};
</script>

<style scoped>
.gallery-image-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-image-container:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.gallery-image-container:hover .image-overlay {
  opacity: 1;
}

.clickable-image {
  transition: filter 0.3s ease;
}

.gallery-image-container:hover .clickable-image {
  filter: brightness(0.8);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}
</style>

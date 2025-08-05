<template>
  <v-row class="pa-2">
    <v-col
      data-aos="flip-left"
      data-aos-delay="300"
      v-for="g in galleryImages"
      :key="g.src"
      class="pa-2"
      sm="6"
      cols="12">
      <div class="d-flex flex-column">
        <div class="gallery-image-container">
          <LazyImage
            :src="g.src"
            :alt="g.desc"
            :cover="true"
            class="bg-grey-lighten-2 rounded-lg"
            :aspect-ratio="16 / 9" />
        </div>
        <span class="text-center pt-2">{{ g.desc }}</span>
      </div>
    </v-col>
  </v-row>
</template>
<script>
import LazyImage from "./LazyImage.vue";
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
  },
  data: () => ({
    galleryImages: [
      { src: living_room, desc: "Cozy living room" },
      { src: dining, desc: "Dining Room" },
      { src: bathroom, desc: "Bathroom" },
      { src: toilet, desc: "Shower and Toilet" },
      { src: veranda, desc: "Veranda ☕️" },
      { src: bar, desc: "Bar 🍷" },
      { src: kitchen, desc: "Kitchen" },
      { src: room1, desc: "Bedroom #1" },
      { src: room2, desc: "Bedroom #2" },
      { src: garden1, desc: "Garden | Outdoor sitting" },
      { src: garden2, desc: "Garden | Main" },
      { src: garden3, desc: "Garden | Swing" },
    ],
  }),
};
</script>

<style scoped>
.gallery-image-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 8px;
  overflow: hidden;
}
</style>

<template>
  <v-row>
    <v-col
      data-aos="flip-left"
      data-aos-delay="300"
      v-for="g in galleryImages"
      :key="g.src"
      class="d-flex child-flex"
      sm="6"
      cols="12">
      <v-container>
        <v-img :src="g.src" aspect-ratio="1" cover class="bg-grey-lighten-2">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey-lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <span>{{ g.desc }}</span>
      </v-container>
    </v-col>
  </v-row>
</template>
<script>
import room1 from "@/assets//gallery/room1.webp";
import room2 from "@/assets//gallery/room2.webp";
import bathroom from "@/assets//gallery/bathroom.webp";
import corridor from "@/assets//gallery/corridor.webp";
import dining from "@/assets//gallery/dining.webp";
import detail from "@/assets//gallery/detail.webp";
import kitchen from "@/assets//gallery/kitchen.webp";
import living_room from "@/assets//gallery/living_room.webp";
import toilet from "@/assets//gallery/toilet.webp";
import garden1 from "@/assets//gallery/garden1.webp";
import garden2 from "@/assets//gallery/garden2.webp";
import garden3 from "@/assets//gallery/garden3.webp";

export default {
  data: () => ({
    galleryImages: [
      { src: living_room, desc: "Cozy living room" },
      { src: dining, desc: "Dining Room" },
      { src: bathroom, desc: "Bathroom" },
      { src: toilet, desc: "Shower and Toilet" },
      { src: detail, desc: "Cute Shelf" },
      { src: corridor, desc: "Main Corridor" },
      { src: kitchen, desc: "Kitchen" },
      { src: room1, desc: "Bedroom #1" },
      { src: room2, desc: "Bedroom #2" },
      { src: garden1, desc: "Garden | Swing" },
      { src: garden2, desc: "Garden | Padio" },
      { src: garden3, desc: "Garden | Chairs" },
    ],
  }),
};
</script>

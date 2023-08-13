<template>
  <v-row>
    <v-col
      v-for="g in galleryImages"
      :key="g.src"
      class="d-flex child-flex"
      sm="4"
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
import room1 from "@/assets//gallery/room1.jpg";
import room2 from "@/assets//gallery/room2.jpg";
import bathroom from "@/assets//gallery/bathroom.jpg";
import corridor from "@/assets//gallery/corridor.jpg";
import dining from "@/assets//gallery/dining.jpg";
import detail from "@/assets//gallery/detail.jpg";
import kitchen from "@/assets//gallery/kitchen.jpg";
import living_room from "@/assets//gallery/living_room.jpg";
import toilet from "@/assets//gallery/toilet.jpg";
import garden1 from "@/assets//gallery/garden1.jpg";
import garden2 from "@/assets//gallery/garden2.jpg";
import garden3 from "@/assets//gallery/garden3.jpg";

export default {
  data: () => ({
    galleryImages: [
      { src: living_room, desc: "Cozy living room" },
      { src: dining, desc: "Dining Room" },
      { src: bathroom, desc: "Bathroom" },
      { src: toilet, desc: "Shower and Toilet" },
      { src: detail, desc: "Cute detail" },
      { src: corridor, desc: "Main corridor" },
      { src: kitchen, desc: "Kitchen" },
      { src: room1, desc: "Bedroom 1" },
      { src: room2, desc: "Bedroom 2" },
      { src: garden1, desc: "Garden | Swing" },
      { src: garden2, desc: "Garden | Padio" },
      { src: garden3, desc: "Garden | Chairs" },
    ],
  }),
};
</script>

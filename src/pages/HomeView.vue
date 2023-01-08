<template>
  <v-main id="welcome" class="bg-grey-lighten-2">
    <v-row>
      <v-col cols="12">
        <v-img aspect-ratio="2.5" :src="mainImageSRC" cover>
          <div class="overlay-content">
            <h1
              :class="
                mobileBreakpoint ? 'text-h1 font-bold' : 'text-h4 font-bold'
              "
            >
              Welcome to apartment Luka!
            </h1>
            <h2 class="text-h6">Enjoy your stay!</h2>
            <v-btn
              class="mt-2"
              color="amber-accent-3"
              prepend-icon="mdi-information"
              variant="flat"
              @click="scroll('info')"
              >Info</v-btn
            >
          </div></v-img
        >
      </v-col>
    </v-row>

    <div class="flex flex-col place-items-center mt-12 text-center">
      <div class="text-h4 mb-4">Modern and Airy Apartment</div>
      <div>
        This comfortable vacation apartment is located on the ground floor of a
        family house, located in a quiet part of the
        <a class="underline" href="https://www.pulainfo.hr/" target="_blank"
          >city of Pula</a
        >.
      </div>
      <div>
        You can have meals on the terrace, relax in the garden or rest on the
        patio.
      </div>
    </div>
    <v-divider class="mt-16"></v-divider>
    <div>
      <div class="mt-12">
        <div id="amenities" class="text-h4 text-center">Amenities</div>
      </div>
      <v-row class="mt-4 mb-12">
        <v-col class="mx-16" v-for="item in amenities" :key="item.name">
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-icon
                v-bind="props"
                :color="isHovering ? 'amber-accent-3' : undefined"
                :icon="item.icon"
                size="64"
              ></v-icon>
            </template>
          </v-hover>
          <p class="float">{{ item.name }}</p>
        </v-col>
      </v-row>
      <component :is="chosenAmenity"> </component>
      <v-divider class="mt-8"></v-divider>
      <div class="flex flex-col place-items-center mt-12">
        <div id="info" class="text-3xl mb-6">Info</div>
      </div>
    </div>
  </v-main>
</template>

<script>
import mainImage from "@/assets/main.jpg";

export default {
  data() {
    return {
      mainImageSRC: mainImage,
      amenities: [
        { name: "Fast Wi-fi", icon: "mdi-wifi" },
        { name: "Free Parking", icon: "mdi-parking" },
        { name: "2 Air Conditioners", icon: "mdi-air-conditioner" },
        { name: "4k Smart TV", icon: "mdi-television" },
        { name: "Dishwasher", icon: "mdi-dishwasher" },
        { name: "Washing machine", icon: "mdi-washing-machine" },
      ],
      //chosenAmenity: "",
    };
  },
  methods: {
    //Link scroll
    async scroll(id) {
      if (id == null) return;

      try {
        document.getElementById(id).scrollIntoView({
          behavior: "smooth",
        });
        this.drawer = false;
      } catch (e) {}
    },
  },
};
</script>

<style>
.overlay {
  position: relative;
}

.overlay-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  color: whitesmoke;
}
</style>

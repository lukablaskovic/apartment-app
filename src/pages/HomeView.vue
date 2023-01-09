<template>
  <div id="welcome" class="bg-grey-lighten-2">
    <v-row>
      <v-col cols="12">
        <v-img aspect-ratio="2.5" :src="mainImageSRC" cover>
          <div
            :class="
              $vuetify.display.mobile
                ? 'overlay-content text-center'
                : 'overlay-content'
            ">
            <h1 :class="$vuetify.display.mobile ? 'text-h5 ' : 'text-h3 '">
              Welcome to apartment Luka!
            </h1>
            <h2 :class="$vuetify.display.mobile ? 'text-h6 ' : 'text-h5'">
              Enjoy your stay!
            </h2>
            <v-btn
              v-if="!$vuetify.display.mobile"
              class="mt-2"
              :color="$vuetify.theme.current.colors.yellow"
              prepend-icon="mdi-information"
              variant="flat"
              @click="scroll('info')"
              >Info</v-btn
            >
          </div></v-img
        >
      </v-col>
    </v-row>
    <!--Modern and Airy apartment heading-->
    <v-container class="mt-4 text-center">
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
    </v-container>
    <v-divider class="mt-16"></v-divider>
    <!--Amenities Heading-->
    <div>
      <div class="mt-4">
        <div id="amenities" class="text-h4 text-center mb-12">Amenities</div>
      </div>
      <!--Amenities icons-->
      <v-container class="text-center mb-12">
        <v-row>
          <v-col
            align-self="center"
            cols="4"
            sm="2"
            class=""
            v-for="item in amenities"
            :key="item.name">
            <v-icon v-bind="props" :icon="item.icon" size="64"></v-icon>

            <p class="float">{{ item.name }}</p>
          </v-col>
        </v-row>
      </v-container>

      <v-divider class="mt-8"></v-divider>
      <v-container class="mt-8 text-center">
        <div id="info" class="text-h4 mb-6">Info</div>

        <!--
        <a href="https://www.speedtest.net/result/14061017471"
          ><img src="https://www.speedtest.net/result/14061017471.png"
        /></a>
        -->
      </v-container>

      <v-img
        aspect-ratio="3"
        :src="librarySRC"
        cover
        gradient="to top right, rgba(0, 0, 0, 0.8), rgba(27, 27, 27, 0.8)">
        <v-container fill-height class="overlay-content">
          <v-row align="center" justify="center">
            <v-col cols="3">
              <expandableCard
                :p_title="'Rules'"
                p_description="General house rules "
                p_icon="mdi-alert-box-outline"
                :p_iconColor="$vuetify.theme.current.colors.yellow"
                :p_list="houseRules">
              </expandableCard>
            </v-col>
            <v-col cols="3">
              <expandableCard
                p_title="Wi-fi"
                p_description="Wi-fi details"
                p_icon="mdi-wifi"
                p_iconColor="green darken-1"
                :p_list="wiFi"
                :p_extendTitle="'Scan QR'"></expandableCard>
            </v-col>
            <v-col cols="3">
              <expandableCard :p_title="'House appliances'"></expandableCard>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </div>
  </div>
</template>

<script>
import expandableCard from "@/components/expandable-card.vue";
import mainImage from "@/assets/main.jpg";
import libraryImage from "@/assets/library.jpg";
export default {
  components: {
    expandableCard,
  },
  data() {
    return {
      mainImageSRC: mainImage,
      librarySRC: libraryImage,
      amenities: [
        { name: "Fast Wi-fi", icon: "mdi-wifi" },
        { name: "Free Parking", icon: "mdi-parking" },
        { name: "2 Air Conditioners", icon: "mdi-air-conditioner" },
        { name: "4k Smart TV", icon: "mdi-television" },
        { name: "Dishwasher", icon: "mdi-dishwasher" },
        { name: "Washing machine", icon: "mdi-washing-machine" },
      ],
      justify: ["start", "center", "end", "space-around", "space-between"],
      houseRules: [
        { title: "No smoking", subtitle: "Feel free to smoke outside" },
        { title: "No parties", subtitle: "No parties in apartment allowed" },
        {
          title: "No treespasing",
          subtitle: "Please don't enter lower garden",
        },
        {
          title: "Quiet hours",
          subtitle: "From 10pm to 8am",
        },
      ],
      wiFi: [
        { title: "SSID", subtitle: "LUKA" },
        { title: "Password", subtitle: "lukadavorada64" },
      ],
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

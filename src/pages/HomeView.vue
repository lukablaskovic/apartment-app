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
          >city of Pula </a
        >🌆.
      </div>
      <div>
        There is also an outdoor terrace at your disposal where you can relax
        with your favourite book 📖.
      </div>
      <p>
        The apartment is modernly decorated. It consists of 2 bedrooms with 2
        large beds, a spacious living/dining room, a kitchen, a bathroom and a
        veranda - ideal for morning coffee ☕.
      </p>
      <div>
        The apartment is equipped with all the necessary household appliances
        and a high-speed internet 🌐.
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

            <p class="">{{ item.name }}</p>
          </v-col>
        </v-row>
      </v-container>

      <v-divider class="mt-8"></v-divider>
      <v-container class="mt-8 text-center">
        <div id="info" class="text-h4 mb-6">Info</div>
      </v-container>

      <v-img
        v-if="!$vuetify.display.mobile"
        aspect-ratio="3"
        :src="librarySRC"
        cover
        gradient="to top right, rgba(0, 0, 0, 0.8), rgba(27, 27, 27, 0.8)">
        <v-container fill-height class="overlay-content">
          <v-row align="center" justify="center">
            <v-col sm="3" cols="12">
              <expandableCard
                :p_title="'Rules'"
                p_description="General house rules "
                p_icon="mdi-alert-box-outline"
                :p_iconColor="$vuetify.theme.current.colors.yellow"
                :p_list="houseRules">
              </expandableCard>
            </v-col>
            <v-col sm="3" cols="12">
              <expandableCard
                p_title="Wi-Fi"
                p_description="Wi-fi details"
                p_icon="mdi-wifi"
                p_iconColor="green darken-1"
                :p_list="wiFi"
                :p_extendTitle="'Scan QR'"
                :p_bonusDataIcon="wiFiBonusData.icon"
                :p_bonusDataText="wiFiBonusData.text"
                :p_component="'c_e_wifi'"></expandableCard>
            </v-col>
            <v-col cols="3">
              <expandableCard
                :p_title="'House appliances'"
                p_description="Information regarding house appliances"
                p_icon="mdi-dishwasher"
                p_iconColor="blue lighten-5"
                :p_list="appliances"></expandableCard>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
      <v-container v-else fill-height>
        <v-row align="center" justify="center">
          <v-col sm="3" cols="12">
            <expandableCard
              :p_title="'Rules'"
              p_description="General house rules "
              p_icon="mdi-alert-box-outline"
              :p_iconColor="$vuetify.theme.current.colors.yellow"
              :p_list="houseRules"
              p_extendTitle="More">
            </expandableCard>
          </v-col>
          <v-col sm="3" cols="12">
            <expandableCard
              p_title="Wi-Fi"
              p_description="Wi-fi details"
              p_icon="mdi-wifi"
              p_iconColor="green darken-1"
              :p_list="wiFi"
              :p_extendTitle="'Scan QR'"
              :p_bonusDataIcon="wiFiBonusData.icon"
              :p_bonusDataText="wiFiBonusData.text"
              :p_component="'c_e_wifi'"></expandableCard>
          </v-col>
          <v-col sm="3" cols="12">
            <expandableCard
              :p_title="'House appliances'"
              p_description="Information regarding house appliances"
              p_icon="mdi-dishwasher"
              p_iconColor="blue lighten-5"
              :p_list="appliances"
              p_extendTitle="More"></expandableCard>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <infoTabs></infoTabs>
      </v-container>

      <v-container class="mt-4 text-center">
        <div>
          <div id="gallery" class="text-h4 text-center mb-4">Gallery</div>
        </div>
        <gallery></gallery>
      </v-container>
      <v-container class="mt-4 text-center">
        <div>
          <div id="reviews" class="text-h4 text-center mb-4">Reviews</div>
          <p>
            We have been renting our home apartment for almost 8 years now and
            received great review from our friends all over Europe.
          </p>
          <p>We want to thank you for that! 😊</p>
          <p>
            Hope you enjoy your stay here too! Feel free to contact us if you
            need something, anytime!
          </p>
          <a
            href="https://www.novasol.com/holidayhome/croatia/istria/pula/holiday-rental-pula-cir231">
            <v-img
              :src="reevooLogo"
              :aspect-ratio="$vuetify.display.mobile ? 12 : 18"
              alt="reevo reviews apartment luka"
          /></a>
          <div class="text-center">
            <v-rating
              v-model="rating"
              bg-color="amber-lighten-3"
              readonly
              half-increments
              length="10"
              color="amber-darken-1"></v-rating>
            <pre>{{ rating }}</pre>
            <v-container>
              <v-row>
                <v-col v-for="r in reviews" :key="r.name" sm="3" cols="12">
                  <v-card class="mx-auto" max-width="344">
                    <v-card-item>
                      <div>
                        <div class="text-h6 mb-1">{{ r.name }}</div>
                        <div class="text-caption">
                          {{ r.text }}
                        </div>
                      </div>
                    </v-card-item>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
import expandableCard from "@/components/expandable-card.vue";
import infoTabs from "@/components/info-tabs.vue";
import gallery from "@/components/gallery.vue";
import mainImage from "@/assets/main.jpg";
import libraryImage from "@/assets/library.jpg";
import reevooLogo from "@/assets/Reevoo-Logo.png";
export default {
  components: {
    expandableCard,
    infoTabs,
    gallery,
  },
  data() {
    return {
      rating: 9.7,
      mainImageSRC: mainImage,
      librarySRC: libraryImage,
      reevooLogo: reevooLogo,
      amenities: [
        { name: "Fast Wi-Fi", icon: "mdi-wifi" },
        { name: "Free Parking", icon: "mdi-parking" },
        { name: "2 Air Conditioners", icon: "mdi-air-conditioner" },
        { name: "4k Smart TV", icon: "mdi-television" },
        { name: "Dishwasher", icon: "mdi-dishwasher" },
        { name: "Washing machine", icon: "mdi-washing-machine" },
        { name: "Child friendly", icon: "mdi-human-male-boy" },
        { name: "Terrace Patio", icon: "mdi-table-furniture" },
      ],
      justify: ["start", "center", "end", "space-around", "space-between"],
      houseRules: [
        { title: "No smoking 🚭", subtitle: "Feel free to smoke outside" },
        { title: "No parties 🚫", subtitle: "No parties in apartment allowed" },
        {
          title: "No diapers in toilet 🚫",
          subtitle: "As well as wet wipes!",
        },
        {
          title: "No treespasing ⛔",
          subtitle: "Please don't enter lower garden",
        },
        {
          title: "Quiet hours 🔇",
          subtitle: "From 10pm to 8am",
        },
      ],
      wiFi: [
        { title: "SSID", subtitle: "LUKA" },
        { title: "Password", subtitle: "1r1M8X@$Ny%3x@WT" },
      ],
      wiFiBonusData: { text: "50/10 Mbps", icon: "mdi-speedometer" },
      appliances: [
        {
          title: "Air conditioner",
          subtitle: "2 in the apartment",
        },
        {
          title: "Cooking board",
          subtitle: "4 electric panels",
        },
        {
          title: "Smart TV",
          subtitle: "Local TV (HDMI2) + Youtube",
        },
        {
          title: "Dishwasher",
          subtitle: "Built-in kitchen dishwasher",
        },
        {
          title: "Washing machine",
          subtitle: "Located in the bathroom",
        },
        {
          title: "Extras",
          subtitle: "Hairdryer, iron, shampoo, towels",
        },
      ],
      reviews: [
        {
          name: "Family Rückert",
          text: "We want to say: Thank you! - for the unforgettable boat-tour, - for having such a lovely apartment with beautiful garden, - for being very kind hosts. We enjoyed our holiday very much! Hopefuly we will be able to be your guests again! Stay healthy and take care of yourself! Best wishes",
        },
        {
          name: "Jeanette",
          text: "Beautiful apartment in Pula with every comfort. Everything is actually there, even freezer bags. The aircraft noise is a bit disturbing when lying in the garden. The playing children of the nearby school didn't bother us. Landlord is awesome! If we visit Pula again we will definitely come back here.",
        },
        {
          name: "Nadine",
          text: "We felt very comfortable in the apartment. The two weeks of vacation were over far too quickly.",
        },
        {
          name: "Fam V R",
          text: "A very nice house with a very friendly owner. All the trimmings, the only thing I missed in the kitchen was scissors and a liter. Nice garden where you can sit outside until late.",
        },
        {
          name: "Thomas",
          text: "Beautiful apartment with a great garden. We felt very comfortable there.",
        },
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

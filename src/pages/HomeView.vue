<template>
  <div id="welcome" class="bg-grey-lighten-2">
    <v-img
      :aspect-ratio="$vuetify.display.mobile ? 1 : 2.5"
      :src="mainImageSRC"
      cover>
      <div
        :class="
          $vuetify.display.mobile
            ? 'overlay-content text-center'
            : 'overlay-content'
        ">
        <v-row>
          <v-col cols="12">
            <h1
              :class="
                $vuetify.display.mobile
                  ? 'text-h3 dancing-script-font'
                  : 'text-h1 dancing-script-font'
              ">
              Welcome !
            </h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <h2 :class="$vuetify.display.mobile ? '' : ''">
              Step inside and feel right at home. We're glad you're here!
            </h2>

            <v-btn
              class="mt-6"
              color="yellow"
              variant="outlined"
              @click="scroll('info')"
              >View more</v-btn
            >
          </v-col>
        </v-row>
      </div></v-img
    >
    <!--Modern and Elegant apartment heading-->
    <div class="bg-grey-lighten-3">
      <v-container
        :class="
          $vuetify.display.mobile ? 'px-12 py-12 ' : 'px-12 py-12 mt-12 mb-12'
        ">
        <h2 :class="$vuetify.display.mobile ? 'text-h4 mb-2' : 'text-h4 mb-12'">
          <b>Modern and Elegant Apartment in a Quiet Part of Pula</b>
        </h2>
        <v-row no-gutters>
          <v-col
            cols="12"
            sm="4"
            :class="
              $vuetify.display.mobile
                ? 'text-left mt-2 paragrahs-big-spacing mb-4'
                : 'text-left mt-2 paragrahs-big-spacing px-4'
            ">
            <div>
              Nestled in a tranquil corner of
              <a
                class="underline"
                href="https://www.pulainfo.hr/"
                target="_blank"
                >Pula</a
              >, this elegant ground floor apartment 🏠 in a family home is a
              blend of modern design enriched by timeless details .
            </div>
          </v-col>
          <v-col
            cols="12"
            sm="4"
            :class="
              $vuetify.display.mobile
                ? 'text-left mt-2 paragrahs-big-spacing mb-4'
                : 'text-left mt-2 paragrahs-big-spacing px-4'
            ">
            <div>
              The interiors captivate with intriguing artwork and a library
              brimming with classic reads. Begin your mornings with a cup of
              coffee ☕ on the veranda, overlooking the beautiful garden
              surrounded by a lush green wall, bursting with diverse plants 🪴.
            </div>
            <p>
              The outdoor patio is an inviting space, perfect for leisurely
              breakfasts or intimate evening dinners amidst nature.
            </p>
          </v-col>
          <v-col
            cols="12"
            sm="4"
            :class="
              $vuetify.display.mobile
                ? 'text-left mt-2 paragrahs-big-spacing mb-4'
                : 'text-left mt-2 paragrahs-big-spacing px-4'
            ">
            <div>
              With 2 spacious bedrooms 🛏️, a state-of-the-art kitchen, and
              high-speed internet, our apartment offers a serene escape,
              ensuring every moment is steeped in comfort and beauty!
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!--/Modern and Elegant apartment heading-->
    <v-divider class=""></v-divider>

    <!--Amenities Heading-->
    <div class="mt-4">
      <div
        id="amenities"
        class="text-h4 text-center mb-4 font-weight-bold text-grey-darken-4">
        Amenities
      </div>
    </div>

    <!--Amenities icons-->
    <v-container class="text-center mb-12">
      <v-row class="d-flex justify-center">
        <v-col
          class="d-flex flex-column items-center justify-center"
          align-self="center"
          cols="3"
          sm="1"
          v-for="item in amenities"
          :key="item.name">
          <v-icon
            v-bind="props"
            :icon="item.icon"
            color="green-darken-3"
            :size="$vuetify.display.mobile ? 32 : 48"
            class="mx-auto"></v-icon>
          <p class="mt-2 text-center">{{ item.name }}</p>
        </v-col>
      </v-row>
    </v-container>

    <!--/Amenities Heading-->
    <v-divider class="mt-4"></v-divider>

    <v-container class="mt-4 text-center">
      <div>
        <div
          id="gallery"
          class="text-h4 text-center mb-4 font-weight-bold text-grey-darken-4">
          Gallery
        </div>
      </div>
      <gallery></gallery>
    </v-container>

    <v-divider class="mt-2"></v-divider>
    <v-container class="mt-4 text-center">
      <div id="info" class="text-h4 mb-6 font-weight-bold text-grey-darken-4">
        Info
      </div>
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

    <v-container class="mt-2 text-center">
      <div>
        <div
          id="reviews"
          class="text-h4 text-center mb-4 font-weight-bold text-grey-darken-4">
          Guest reviews
        </div>
        <p>
          We have been renting our home apartment for almost 8 years now and
          received great review from our friends all over Europe.
        </p>
        <p>We want to thank you for that! 😊</p>
        <p>
          Hope you enjoy your stay here too! Feel free to contact us if you need
          something, anytime!
        </p>

        <v-row>
          <v-divider class="mt-12"></v-divider>
          <v-col cols="12">
            <a
              href="https://www.novasol.com/holidayhome/croatia/istria/pula/holiday-rental-pula-cir231">
              <v-img
                :src="reevooLogo"
                :aspect-ratio="$vuetify.display.mobile ? 12 : 38"
                alt="reevo reviews apartment Luka"
            /></a>
          </v-col>
          <v-col cols="12">
            <a href="https://www.booking.com/Share-0wQMOBG">
              <v-img
                :src="bookingcomLogo"
                :aspect-ratio="$vuetify.display.mobile ? 12 : 36"
                alt="booking.com reviews apartment Luka"
            /></a>
          </v-col>
        </v-row>
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
                      <p class="text-h6 mb-1">
                        {{ r.name }}
                        <country-flag
                          class=""
                          :country="r.flag"
                          size="normal" />
                      </p>

                      {{ r.rating }}
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
    <v-divider class="mt-2"></v-divider>
    <v-container class="mt-2 text-center">
      <div>
        <div
          id="contact"
          class="text-h4 text-center mb-4 font-weight-bold text-grey-darken-4">
          Contact Info
        </div>
        <div>
          Book your stay directly with us and save money on booking fees! Or
          just send us a message if you have any questions.
          <div><b>E-mail:</b> lukablaskovic2000@gmail.com</div>
          <div><b>Phone:</b> +385 91 721 7631</div>
        </div>
        <div class="mb-2 mt-2">
          Or you can book your stay through one of our partners:
        </div>
        <v-row>
          <v-col>
            <a href="https://www.booking.com/Share-0wQMOBG">
              <v-img
                :src="bookingcomLogo"
                :aspect-ratio="$vuetify.display.mobile ? 12 : 48"
                alt="booking.com reviews apartment Luka"
            /></a>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <v-img
      :aspect-ratio="$vuetify.display.mobile ? 1 : 2.5"
      :src="gardenImage"
      cover>
    </v-img>
  </div>
</template>

<script>
import expandableCard from "@/components/expandable-card.vue";
import infoTabs from "@/components/info-tabs.vue";
import gallery from "@/components/gallery.vue";
import mainImage from "@/assets/main.jpg";
import mainAlphaReduced from "@/assets/main_alpha_reduced.jpg";
import libraryImage from "@/assets/library.jpg";
import reevooLogo from "@/assets/Reevoo-Logo.png";
import bookingcomLogo from "@/assets/Bookingcom-logo.png";
import CountryFlag from "vue-country-flag-next";
import gardenImage from "@/assets/garden.png";

export default {
  components: {
    expandableCard,
    infoTabs,
    gallery,
    CountryFlag,
  },
  data() {
    return {
      rating: 9.8,
      mainImageSRC: mainAlphaReduced,
      gardenImage: gardenImage,
      librarySRC: libraryImage,
      reevooLogo: reevooLogo,
      bookingcomLogo: bookingcomLogo,
      amenities: [
        { name: "Fast Wi-Fi", icon: "mdi-wifi" },
        { name: "Free Parking", icon: "mdi-parking" },
        { name: "2 Air Conditioners", icon: "mdi-air-conditioner" },
        { name: "4k Smart TV", icon: "mdi-television" },
        { name: "Dishwasher", icon: "mdi-dishwasher" },
        { name: "Washing Machine", icon: "mdi-washing-machine" },
        { name: "90 m² size", icon: "mdi-texture-box" },
        { name: "Recycling", icon: "mdi-recycle" },
        { name: "Child-Friendly", icon: "mdi-human-male-boy" },
        { name: "Terrace Patio", icon: "mdi-table-furniture" },
        { name: "Lovely Garden", icon: "mdi-flower" },
      ],
      justify: ["start", "center", "end", "space-around", "space-between"],
      houseRules: [
        { title: "No smoking 🚭", subtitle: "Feel free to smoke outside" },
        {
          title: "No parties 🚫",
          subtitle: "No hen, stag or similar parties",
        },
        {
          title: "Quiet hours 🔇",
          subtitle: "23:00 - 08:00",
        },
        {
          title: "Pets not allowed ❌",
          subtitle: "",
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
          subtitle: "2 of them",
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
          subtitle: "Hairdryer, iron, shampoos, towels",
        },
      ],
      reviews: [
        {
          name: "Family Rückert",
          rating: "10/10",
          flag: "de",
          text: "We want to say: Thank you! - for the unforgettable boat-tour, - for having such a lovely apartment with beautiful garden, - for being very kind hosts. We enjoyed our holiday very much! Hopefuly we will be able to be your guests again! Stay healthy and take care of yourself! Best wishes",
        },
        {
          name: "Family Schrödl",
          rating: "10/10",
          flag: "de",
          text: "Beautiful apartment in Pula with every comfort. Everything is actually there, even freezer bags. The aircraft noise is a bit disturbing when lying in the garden. The playing children of the nearby school didn't bother us. Landlord is awesome! If we visit Pula again we will definitely come back here.",
        },
        {
          name: "Family Surmann",
          rating: "10/10",
          flag: "de",
          text: "We felt very comfortable in the apartment. The two weeks of vacation were over far too quickly.",
        },
        {
          name: "Family van Ruth",
          rating: "9/10",
          flag: "nl",
          text: "A very nice house with a very friendly owner. All the trimmings, the only thing I missed in the kitchen was scissors and a liter. Nice garden where you can sit outside until late.",
        },
        {
          name: "Family Merkel",
          rating: "10/10",
          flag: "de",
          text: "Beautiful apartment with a great garden. We felt very comfortable there.",
        },
        {
          name: "Family Pietrzak ",
          rating: "10/10",
          flag: "pl",
          text: "Excpetional",
        },
        {
          name: "Family Boggian",
          rating: "10/10",
          flag: "it",
          text: "The hosts, Luka and father Davor, are very helpful and welcoming people. The apartment is very nice, with large and comfortable spaces, tastefully furnished in a simple and very functional way. The kitchen has everything you need, including a dishwasher. The living room has a nice comfortable sofa and a large living room, where c'is a table for dinner. The two bedrooms are spacious, with comfortable beds. The bathroom is new, with a nice big shower and washing machine. But the strength of the solution, in our opinion, is the well-kept and wonderful garden!! Here you can find refreshment under the fruit plants, lulling you with the' swing or sitting on the armchairs at the' shade of the gazebo. Just excellent. We will definitely be back & more!!",
        },
        {
          name: "Family Šimsa",
          rating: "10/10",
          flag: "cz",
          text: "Excpetional",
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
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap");

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

.dark-overlay {
  background: #42424273;
  border-radius: 5px;
  letter-spacing: 6px;
}

.dancing-script-font {
  font-family: "Dancing Script", cursive !important;
  color: #ffde59;
}

.paragrahs-big-spacing {
  letter-spacing: 1px;
  line-height: 2;
}
</style>

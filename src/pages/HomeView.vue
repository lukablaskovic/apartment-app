<template>
  <main id="welcome" class="bg-grey-lighten-2" lang="en" role="main">
    <!-- Hero Section -->
    <section class="hero-image-container" aria-label="Hero section">
      <LazyImage
        :src="mainImageSRC"
        :aspect-ratio="$vuetify.display.mobile ? 1.2 : 2.5"
        :cover="true"
        alt="Apartment Luka - Modern vacation rental in Pula, Croatia"
        title="Apartment Luka - Luxury Vacation Rental" />
      <div
        :class="
          $vuetify.display.mobile
            ? 'overlay-content text-center dark-overlay pa-2'
            : 'overlay-content dark-overlay pa-12'
        ">
        <v-row>
          <v-col cols="12">
            <h1
              data-aos="zoom-in-right"
              data-aos-delay="300"
              :class="
                $vuetify.display.mobile
                  ? 'text-h3 dancing-script-font text-amber-darken-1 mb-2'
                  : 'text-h1 dancing-script-font text-amber-darken-1'
              ">
              Welcome !
            </h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <h2
              :class="
                $vuetify.display.mobile
                  ? 'text-body-1 font-weight-medium mb-4'
                  : 'text-h5 font-weight-medium mb-6'
              ">
              Step inside and make yourself at home. We're glad you're here!
            </h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            :class="$vuetify.display.mobile ? 'text-center' : 'text-left'">
            <v-btn
              @click="scroll('contact')"
              :size="$vuetify.display.mobile ? 'large' : 'x-large'"
              color="amber-darken-1"
              variant="elevated"
              class="contact-btn"
              data-aos="zoom-in-up"
              data-aos-delay="600">
              <v-icon start icon="mdi-email-outline" class="mr-2"></v-icon>
              Contact us
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </section>

    <!-- Apartment Description Section -->
    <section
      class="modern-apartment-section"
      aria-label="Apartment description">
      <v-container
        :class="$vuetify.display.mobile ? 'px-6 py-16' : 'px-16 py-20'">
        <div class="text-center mb-16">
          <h2 class="section-title">
            Modern & Elegant Apartment in a Quiet Part of Pula
          </h2>
          <div class="section-divider"></div>
        </div>

        <v-row class="justify-center">
          <v-col cols="12" lg="8" class="text-center mb-8">
            <p class="lead-text">
              Nestled in a tranquil corner of
              <a
                class="highlight-link"
                href="https://www.pulainfo.hr/"
                target="_blank"
                >Pula</a
              >, this elegant ground floor apartment in a family home is a blend
              of modern design enriched by timeless details.
            </p>
          </v-col>
        </v-row>

        <v-row class="justify-center">
          <v-col cols="12" md="4" class="feature-column">
            <div class="feature-card">
              <div class="feature-icon">
                <v-icon
                  icon="mdi-home"
                  size="48"
                  color="amber-darken-2"></v-icon>
              </div>
              <h3 class="feature-title">Elegant Interiors</h3>
              <p class="feature-text">
                The interiors captivate with intriguing artwork and a library
                brimming with classic reads. Begin your mornings with a cup of
                coffee on the veranda, overlooking the beautiful garden
                surrounded by a lush green wall, bursting with diverse plants.
              </p>
            </div>
          </v-col>

          <v-col cols="12" md="4" class="feature-column">
            <div class="feature-card">
              <div class="feature-icon">
                <v-icon
                  icon="mdi-table-furniture"
                  size="48"
                  color="amber-darken-2"></v-icon>
              </div>
              <h3 class="feature-title">Outdoor Living</h3>
              <p class="feature-text">
                The outdoor patio is an inviting space, perfect for leisurely
                breakfasts or intimate evening dinners amidst nature. Enjoy the
                serene atmosphere and beautiful surroundings.
              </p>
            </div>
          </v-col>

          <v-col cols="12" md="4" class="feature-column">
            <div class="feature-card">
              <div class="feature-icon">
                <v-icon
                  icon="mdi-bed"
                  size="48"
                  color="amber-darken-2"></v-icon>
              </div>
              <h3 class="feature-title">Comfort & Convenience</h3>
              <p class="feature-text">
                With 2 spacious bedrooms, a state-of-the-art kitchen, and
                high-speed internet, our apartment offers a serene escape,
                ensuring every moment is steeped in comfort and beauty.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Amenities Section -->
    <section class="amenities-section" aria-label="Amenities">
      <v-container class="mt-4 text-center">
        <div>
          <div
            id="amenities"
            class="text-h3 text-center mb-4 font-weight-bold text-blue-grey-darken-4">
            Amenities
          </div>
        </div>
      </v-container>

      <!--Amenities icons-->
      <div class="amenities-container">
        <div class="amenities-grid">
          <div
            v-for="item in amenities"
            :key="item.name"
            class="amenity-card"
            data-aos="fade-up"
            data-aos-delay="100">
            <div class="amenity-icon-wrapper">
              <v-icon
                :icon="item.icon"
                :size="$vuetify.display.mobile ? 32 : 40"
                class="amenity-icon">
              </v-icon>
            </div>
            <div class="amenity-content">
              <h3 class="amenity-name">{{ item.name }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="gallery-section" aria-label="Photo gallery">
      <v-container class="mt-4 text-center">
        <div>
          <div
            id="gallery"
            class="text-h3 text-center mb-4 font-weight-bold text-blue-grey-darken-4">
            Gallery
          </div>
        </div>
        <gallery></gallery>
      </v-container>
    </section>

    <!-- Information Section -->
    <section class="useful-info-section" aria-label="Useful information">
      <v-container class="mt-4 text-center">
        <div
          id="info"
          class="text-h3 mb-6 font-weight-bold text-blue-grey-darken-4">
          Useful information
        </div>
      </v-container>

      <div class="info-cards-section" v-if="!$vuetify.display.mobile">
        <div class="info-cards-container">
          <div class="info-card">
            <div class="card-header">
              <div class="card-icon">
                <i class="fas fa-exclamation-triangle"></i>
              </div>
              <div class="card-title">
                <h3>House Rules</h3>
                <p>General house rules</p>
              </div>
            </div>
            <div class="card-content">
              <div
                class="rule-item"
                v-for="rule in houseRules"
                :key="rule.title">
                <div class="rule-icon">
                  <i class="fas fa-check-circle"></i>
                </div>
                <div class="rule-info">
                  <div class="rule-title">{{ rule.title }}</div>
                  <div class="rule-subtitle">{{ rule.subtitle }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="info-card">
            <div class="card-header">
              <div class="card-icon">
                <i class="fas fa-wifi"></i>
              </div>
              <div class="card-title">
                <h3>Wi-Fi Details</h3>
                <p>Connect to our network</p>
              </div>
            </div>
            <div class="card-content">
              <div class="wifi-item">
                <div class="wifi-label">SSID:</div>
                <div class="wifi-value"><strong>LUKA_Guest</strong></div>
              </div>
              <div class="wifi-item">
                <div class="wifi-label">Password:</div>
                <div class="wifi-value">
                  <strong>apartment-luka2000</strong>
                </div>
              </div>
              <div class="wifi-item">
                <div class="wifi-icon">
                  <i class="fas fa-tachometer-alt"></i>
                </div>
                <div class="wifi-value">60/10 Mbps | Mesh Wi-Fi system</div>
              </div>
            </div>
          </div>

          <div class="info-card">
            <div class="card-header">
              <div class="card-icon">
                <i class="fas fa-kitchen-set"></i>
              </div>
              <div class="card-title">
                <h3>House Appliances</h3>
                <p>Available amenities</p>
              </div>
            </div>
            <div class="card-content">
              <div
                class="appliance-item"
                v-for="appliance in appliances"
                :key="appliance.title">
                <div class="appliance-icon">
                  <i class="fas fa-check"></i>
                </div>
                <div class="appliance-info">
                  <div class="appliance-title">{{ appliance.title }}</div>
                  <div class="appliance-subtitle">{{ appliance.subtitle }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="info-cards-section-mobile" v-else>
        <div class="info-cards-container-mobile">
          <div class="info-card-mobile">
            <div class="card-header">
              <div class="card-icon">
                <i class="fas fa-exclamation-triangle"></i>
              </div>
              <div class="card-title">
                <h3>House Rules</h3>
                <p>General house rules</p>
              </div>
            </div>
            <div class="card-content">
              <div
                class="rule-item"
                v-for="rule in houseRules"
                :key="rule.title">
                <div class="rule-icon">
                  <i class="fas fa-check-circle"></i>
                </div>
                <div class="rule-info">
                  <div class="rule-title">{{ rule.title }}</div>
                  <div class="rule-subtitle">{{ rule.subtitle }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="info-card-mobile">
            <div class="card-header">
              <div class="card-icon">
                <i class="fas fa-wifi"></i>
              </div>
              <div class="card-title">
                <h3>Wi-Fi Details</h3>
                <p>Connect to our network</p>
              </div>
            </div>
            <div class="card-content">
              <div class="wifi-item">
                <div class="wifi-label">SSID:</div>
                <div class="wifi-value"><strong>LUKA_Guest</strong></div>
              </div>
              <div class="wifi-item">
                <div class="wifi-label">Password:</div>
                <div class="wifi-value">
                  <strong>apartment-luka2000</strong>
                </div>
              </div>
              <div class="wifi-item">
                <div class="wifi-icon">
                  <i class="fas fa-tachometer-alt"></i>
                </div>
                <div class="wifi-value">60/10 Mbps | Mesh Wi-Fi system</div>
              </div>
            </div>
          </div>

          <div class="info-card-mobile">
            <div class="card-header">
              <div class="card-icon">
                <i class="fas fa-dishwasher"></i>
              </div>
              <div class="card-title">
                <h3>House Appliances</h3>
                <p>Available amenities</p>
              </div>
            </div>
            <div class="card-content">
              <div
                class="appliance-item"
                v-for="appliance in appliances"
                :key="appliance.title">
                <div class="appliance-icon">
                  <i class="fas fa-check"></i>
                </div>
                <div class="appliance-info">
                  <div class="appliance-title">{{ appliance.title }}</div>
                  <div class="appliance-subtitle">{{ appliance.subtitle }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <v-container>
      <infoTabs></infoTabs>
    </v-container>

    <!-- Reviews Section -->
    <section class="reviews-section" aria-label="Guest reviews">
      <v-container class="mt-2 text-center">
        <div>
          <div
            id="reviews"
            class="text-h3 text-center mb-4 font-weight-bold text-blue-grey-darken-4">
            Guest reviews
          </div>
          <p>
            We have been renting our home apartment for 10 years now and
            received great review from our friends all over Europe.
          </p>
          <p>We want to thank you for that! 😊</p>
          <p>
            Hope you enjoy your stay here too! Feel free to contact us if you
            need something, anytime!
          </p>

          <v-row>
            <v-divider class="mt-12"></v-divider>
            <v-col cols="12"> </v-col>
            <v-col cols="12">
              Reviews on
              <a target="_blank" href="https://www.booking.com/Pulse-itMdY9"
                >Booking.com</a
              >:
            </v-col>
          </v-row>
          <div class="text-center">
            <v-rating
              v-model="rating"
              bg-color="amber-lighten-3"
              readonly
              half-increments
              length="10"
              :size="$vuetify.display.mobile ? 16 : 24"
              color="amber-darken-1"
              class="rating-container"></v-rating>
            <pre>{{ rating }}</pre>
            <div class="container mx-auto px-4">
              <div class="flex flex-wrap -mx-2">
                <div
                  v-for="r in reviews"
                  :key="r.name"
                  class="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-2 mb-4">
                  <div
                    data-aos="flip-up"
                    class="bg-white rounded-lg shadow p-3 flex flex-col justify-between h-full">
                    <div>
                      <!-- Name + Flag -->
                      <div class="flex items-center gap-x-2 mb-2">
                        <p class="text-base font-semibold truncate">
                          {{ r.name }}
                        </p>
                        <country-flag
                          :country="r.flag"
                          size="normal"
                          class="h-5 w-5" />
                      </div>

                      <!-- Rating -->
                      <div class="mb-2 rating-wrapper">
                        <v-rating
                          :value="r.rating"
                          color="amber"
                          dense
                          readonly
                          :size="$vuetify.display.mobile ? 14 : 20"
                          class="review-rating" />
                      </div>

                      <!-- Text -->
                      <div
                        class="text-sm text-gray-600 truncate"
                        :title="r.text">
                        {{ r.text }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-container>
    </section>

    <!-- Contact Section -->
    <section class="contact-section" aria-label="Contact information">
      <v-container class="mt-2 text-center">
        <div>
          <div
            id="contact"
            class="text-h3 text-center mb-4 font-weight-bold text-blue-grey-darken-4">
            Contact Info
          </div>
          <div>
            <b
              >Book your stay directly with us and save money on booking
              fees!</b
            >
            <br />
            Or just send us a message if you have any questions.
          </div>

          <!-- Notice Section -->
          <div class="mt-4 pa-4 bg-amber-lighten-3 rounded">
            <p class="text-body-1 font-weight-bold mb-2">
              Notice: We are fully booked for 2025.
            </p>
            <p class="text-body-2">
              We offer bookings from June 1 - October 1, 2026.
              <br />
              <br />
              <b>We are looking forward to seeing you!</b>
            </p>
          </div>

          <!-- Contact and Calendar Layout -->
          <div class="contact-calendar-section mt-6">
            <v-row>
              <!-- Column 1: Contact Cards -->
              <v-col cols="12" md="8">
                <div class="contact-cards-section">
                  <div class="contact-cards-container">
                    <div
                      class="contact-card"
                      @click="openEmail"
                      style="cursor: pointer">
                      <div class="contact-icon-wrapper">
                        <v-icon
                          icon="mdi-email-outline"
                          :size="$vuetify.display.mobile ? 40 : 40"
                          class="contact-icon">
                        </v-icon>
                      </div>
                      <div class="contact-content">
                        <h3 class="contact-label">E-mail</h3>
                        <p class="contact-value">lukablaskovic2000@gmail.com</p>
                      </div>
                    </div>

                    <div
                      class="contact-card"
                      @click="openWhatsApp"
                      style="cursor: pointer">
                      <div class="contact-icon-wrapper">
                        <v-icon
                          icon="mdi-phone"
                          :size="$vuetify.display.mobile ? 40 : 40"
                          class="contact-icon">
                        </v-icon>
                      </div>
                      <div class="contact-content">
                        <h3 class="contact-label">Phone</h3>
                        <p class="contact-value">+385 91 721 7631</p>
                      </div>
                    </div>

                    <div
                      class="contact-card"
                      @click="openBooking"
                      style="cursor: pointer">
                      <div class="contact-icon-wrapper">
                        <v-img
                          :src="bookingcomLogo"
                          :aspect-ratio="$vuetify.display.mobile ? 2.5 : 3"
                          alt="booking.com"
                          loading="lazy"
                          class="contact-logo" />
                      </div>
                      <div class="contact-content">
                        <h3 class="contact-label">Booking.com</h3>
                        <p class="contact-value">
                          Additional booking charges apply.
                        </p>
                      </div>
                    </div>

                    <div
                      class="contact-card"
                      @click="openAirbnb"
                      style="cursor: pointer">
                      <div class="contact-icon-wrapper">
                        <v-img
                          :src="airbnbLogo"
                          :aspect-ratio="$vuetify.display.mobile ? 1.5 : 2"
                          alt="airbnb"
                          loading="lazy"
                          class="contact-logo" />
                      </div>
                      <div class="contact-content">
                        <h3 class="contact-label">Airbnb</h3>
                        <p class="contact-value">
                          Additional booking charges apply.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </v-col>

              <!-- Column 2: Calendar -->
              <v-col cols="12" md="4">
                <div class="calendar-section">
                  <v-card class="mx-auto" max-width="400">
                    <v-card-title class="text-center">
                      <v-icon start icon="mdi-calendar" class="mr-2"></v-icon>
                      Availability Calendar
                    </v-card-title>
                    <v-card-subtitle class="text-center text-caption">
                      Last updated:
                      <span class="font-weight-medium">August 5, 2025</span>
                    </v-card-subtitle>
                    <v-card-text>
                      <CustomCalendar
                        v-model="selectedDate"
                        :min-date="minDate"
                        :max-date="maxDate"
                        :disabled-dates="disabledDates"
                        class="mx-auto" />
                    </v-card-text>
                  </v-card>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-container>
    </section>
    <LazyImage
      :src="gardenImage"
      :aspect-ratio="$vuetify.display.mobile ? 1 : 2.5"
      :cover="true"
      alt="Beautiful garden at Apartment Luka in Pula, Croatia"
      title="Garden view at Apartment Luka" />
  </main>
</template>

<script>
import infoTabs from "@/components/info-tabs.vue";
import gallery from "@/components/gallery.vue";
import LazyImage from "@/components/LazyImage.vue";
import CustomCalendar from "@/components/CustomCalendar.vue";
import mainImage from "@/assets/main.jpg";
import mainAlphaReduced from "@/assets/main_alpha_reduced.jpg";
import libraryImage from "@/assets/library.jpg";
import bookingcomLogo from "@/assets/Bookingcom-logo.png";
import airbnbLogo from "@/assets/airbnb.png";
import CountryFlag from "vue-country-flag-next";
import gardenImage from "@/assets/garden.png";
import { usePageSEO } from "@/composables/useSEO";

export default {
  components: {
    infoTabs,
    gallery,
    LazyImage,
    CountryFlag,
    CustomCalendar,
  },
  setup() {
    // Initialize SEO for the home page
    usePageSEO({
      title: "Apartment Luka - Luxury Vacation Rental in Pula, Croatia",
      description:
        "Modern & elegant 2-bedroom apartment in Pula, Croatia. 100m² with garden, WiFi, parking. Perfect for families. Book direct and save on booking fees!",
      keywords:
        "apartment rental, Pula Croatia, vacation rental, holiday apartment, Istria, Adriatic coast, family accommodation, luxury vacation rental",
      url: "https://apartment-luka.eu/",
    });
  },
  data() {
    return {
      rating: 10.0,
      mainImageSRC: mainAlphaReduced,
      gardenImage: gardenImage,
      librarySRC: libraryImage,
      bookingcomLogo: bookingcomLogo,
      airbnbLogo: airbnbLogo,
      // Calendar data
      selectedDate: null,
      minDate: "2026-06-01",
      maxDate: "2026-10-01",
      disabledDates: [
        "2026-07-01",
        "2026-07-02",
        "2026-07-03",
        "2026-07-04",
        "2026-07-05",
        "2026-07-06",
        "2026-07-07",
        "2026-07-08",
        "2026-07-12",
        "2026-07-13",
        "2026-07-14",
        "2026-07-15",
        "2026-07-16",
        "2026-07-17",
        "2026-07-18",
        "2026-07-19",
        "2026-07-20",
        "2026-07-21",
        "2026-07-22",
        "2026-07-23",
        "2026-07-24",
        "2026-07-25",
        "2026-07-26",
        "2026-07-27",
        "2026-07-28",
        "2026-07-29",
        "2026-07-30",
        "2026-07-31",
        "2026-08-04",
        "2026-08-05",
        "2026-08-06",
        "2026-08-07",
        "2026-08-08",
        "2026-08-09",
        "2026-08-10",
        "2026-08-11",
        "2026-08-12",
      ],
      amenities: [
        { name: "Fast Wi-Fi", icon: "mdi-wifi" },
        { name: "Free Parking", icon: "mdi-parking" },
        { name: "2 Air Conditioners", icon: "mdi-air-conditioner" },
        { name: "4k Smart TV", icon: "mdi-television" },
        { name: "Bar", icon: "mdi-glass-wine" },
        { name: "Dishwasher", icon: "mdi-dishwasher" },
        { name: "Washing Machine", icon: "mdi-washing-machine" },
        { name: "100 m² Flat", icon: "mdi-texture-box" },

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
          subtitle: "00:00 - 08:00",
        },
        {
          title: "Pets allowed on request 🐕",
          subtitle: "Additional charges do apply",
        },
      ],
      wiFi: [
        { title: "SSID", subtitle: "LUKA_Guest" },
        { title: "Password", subtitle: "apartment-luka2000" },
      ],
      wiFiBonusData: {
        text: "60/10 Mbps | Mesh Wi-Fi system",
        icon: "mdi-speedometer",
      },
      appliances: [
        {
          title: "Air conditioner",
          subtitle: "2 in the apartment",
        },
        {
          title: "Cooking board",
          subtitle: "4 electric panels + oven",
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
          name: "Family Wojciech",
          ragin: "10/10",
          flag: "pl",
          text: "It was a pleasure to visit this place. Clean, quiet and very comfortable apartament helped my family to get rest for another busy year. I definately reccomend it as a nice place to spend wonderful holiday.",
        },
        {
          name: "Family Klaus",
          rating: "10/10",
          flag: "de",
          text: "Lovingly and well furnished apartment on the ground floor.We immediately felt comfortable and almost like at home. Everything you need for your daily life is there.",
        },
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
        {
          name: "Family Sarycheva",
          rating: "10/10",
          flag: "sk",
          text: "Clean spacious and well equipped apartment with its own shaded garden. The area is really quiet and just max 25 minutes walking from the city center. Free parking is in front of the house. Really nice friendly and hospitable owners. Great thanks!",
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

    // Contact methods
    openEmail() {
      window.open("mailto:lukablaskovic2000@gmail.com", "_blank");
    },

    openWhatsApp() {
      window.open("https://wa.me/385917217631", "_blank");
    },

    openBooking() {
      window.open("https://www.booking.com/Pulse-itMdY9", "_blank");
    },

    openAirbnb() {
      window.open("https://www.airbnb.com/h/apartment-luka", "_blank");
    },

    // SEO Structured Data Methods
    addStructuredData() {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "VacationRental",
        name: "Apartment Luka",
        description:
          "Modern & elegant 2-bedroom apartment in Pula, Croatia. 100m² with garden, WiFi, parking. Perfect for families.",
        url: "https://apartment-luka.eu/",
        telephone: "+385917217631",
        email: "lukablaskovic2000@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Pula",
          addressCountry: "HR",
          addressRegion: "Istria",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "44.8666",
          longitude: "13.8496",
        },
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "WiFi",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Parking",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Air Conditioning",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Garden",
            value: true,
          },
        ],
        numberOfBedrooms: 2,
        floorSize: {
          "@type": "QuantitativeValue",
          value: "100",
          unitCode: "MTK",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "10.0",
          reviewCount: "10",
          bestRating: "10",
          worstRating: "9",
        },
        review: this.reviews.map((review) => ({
          "@type": "Review",
          author: {
            "@type": "Person",
            name: review.name,
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: review.rating || "10",
            bestRating: "10",
          },
          reviewBody: review.text,
        })),
        image: [
          "https://apartment-luka.eu/assets/living_room.jpg",
          "https://apartment-luka.eu/assets/garden1.jpg",
        ],
        priceRange: "€€",
        availability: "https://schema.org/InStock",
      };

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    },

    addBreadcrumbData() {
      const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://apartment-luka.eu/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Croatia",
            item: "https://apartment-luka.eu/#croatia",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Pula",
            item: "https://apartment-luka.eu/#pula",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Apartment Luka",
            item: "https://apartment-luka.eu/#apartment",
          },
        ],
      };

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(breadcrumbData);
      document.head.appendChild(script);
    },

    addFAQData() {
      const faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What amenities are included?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our apartment includes WiFi, free parking, 2 air conditioners, 4K Smart TV, bar, dishwasher, washing machine, and a 100m² space with garden access.",
            },
          },
          {
            "@type": "Question",
            name: "What are the house rules?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No smoking inside (smoking allowed outside), no parties, quiet hours from 00:00-08:00, and pets allowed on request with additional charges.",
            },
          },
          {
            "@type": "Question",
            name: "How can I book?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Book directly with us via email (lukablaskovic2000@gmail.com) or phone (+385 91 721 7631) to save on booking fees, or through Booking.com and Airbnb.",
            },
          },
        ],
      };

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(faqData);
      document.head.appendChild(script);
    },
  },

  mounted() {
    // Add structured data for SEO
    this.addStructuredData();
    this.addBreadcrumbData();
    this.addFAQData();
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
  z-index: 2;
  color: whitesmoke;
  width: 90%;
  max-width: 600px;
}

.dark-overlay {
  background: rgba(0, 0, 0, 0.6);
  border-radius: 8px;
  letter-spacing: 6px;
  backdrop-filter: blur(2px);
}

/* Mobile-specific overlay improvements */
@media (max-width: 768px) {
  .overlay-content {
    width: 95%;
    letter-spacing: 2px;
  }

  .dark-overlay {
    background: rgba(0, 0, 0, 0.4);
    letter-spacing: 2px;
    backdrop-filter: blur(1px);
  }
}

.dancing-script-font {
  font-family: "Dancing Script", cursive !important;
  color: #ffde59;
}

.paragrahs-big-spacing {
  letter-spacing: 1px;
  line-height: 2;
}

/* Custom Info Cards Styles */
.info-cards-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.info-cards-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.info-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  min-height: 300px;
}

.info-card:hover {
  transform: translateY(-4px);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-bottom: 1px solid #eee;
}

.card-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.card-icon i {
  color: #fdd835;
}

.card-title h3 {
  margin: 0;
  font-size: 1.25rem;
  color: #333;
  font-weight: 600;
}

.card-title p {
  margin: 0.25rem 0 0 0;
  color: #666;
  font-size: 0.9rem;
}

.card-content {
  padding: 1.5rem;
}

.rule-item,
.appliance-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f0f0f0;
}

.rule-item:last-child,
.appliance-item:last-child {
  border-bottom: none;
}

.rule-icon,
.appliance-icon {
  color: #28a745;
  font-size: 1rem;
  margin-top: 0.125rem;
}

.rule-info,
.appliance-info {
  flex: 1;
}

.rule-title,
.appliance-title {
  font-weight: 500;
  color: #333;
  margin-bottom: 0.25rem;
}

.rule-subtitle,
.appliance-subtitle {
  color: #666;
  font-size: 0.9rem;
}

.wifi-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f0f0f0;
}

.wifi-item:last-child {
  border-bottom: none;
}

.wifi-label {
  font-weight: 500;
  color: #333;
  min-width: 80px;
}

.wifi-value {
  color: #333;
}

.wifi-icon {
  color: #007bff;
  font-size: 1rem;
  min-width: 20px;
}

/* Mobile Styles */
.info-cards-section-mobile {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 0.5rem;
}

.info-cards-container-mobile {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 400px;
  margin: 0 auto;
}

.info-card-mobile {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.info-card-mobile:hover {
  transform: translateY(-2px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .info-cards-container {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .card-header {
    padding: 1rem;
  }

  .card-content {
    padding: 1rem;
  }
}

/* Modern Apartment Section Styles */
.modern-apartment-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  position: relative;
  overflow: hidden;
}

/* Useful Information Section Styles */
.useful-info-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  position: relative;
  overflow: hidden;
}

/* Professional Section Styling */
.section-subtitle {
  font-size: 0.9rem;
  font-weight: 500;
  color: #ffc107;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.section-divider {
  width: 80px;
  height: 5px;
  background: linear-gradient(90deg, #ffc107, #ffb300);
  margin: 0 auto;
  border-radius: 2px;
}

.lead-text {
  font-size: 1.25rem;
  line-height: 1.8;
  color: #5a6c7d;
  font-weight: 400;
  max-width: 700px;
  margin: 0 auto;
}

.highlight-link {
  color: #ffc107;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
  border-bottom: 2px solid transparent;
}

.highlight-link:hover {
  color: #ffb300;
  border-bottom-color: #ffb300;
}

.feature-column {
  margin-bottom: 2rem;
}

.feature-card {
  background: white;
  border-radius: 16px;
  padding: 2.5rem 2rem;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.9);
}

.feature-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 193, 7, 0.03) 0%,
    rgba(255, 193, 7, 0.08) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  border-color: #ffe082;
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-icon {
  margin-bottom: 1.5rem;
  display: inline-block;
  padding: 1rem;
  background: linear-gradient(
    135deg,
    rgba(255, 193, 7, 0.1),
    rgba(255, 193, 7, 0.2)
  );
  border-radius: 50%;
  transition: all 0.3s ease;
}

.feature-card:hover .feature-icon {
  transform: scale(1.1);
  background: linear-gradient(
    135deg,
    rgba(255, 193, 7, 0.2),
    rgba(255, 193, 7, 0.3)
  );
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.feature-text {
  font-size: 1rem;
  line-height: 1.7;
  color: #5a6c7d;
  font-weight: 400;
  margin: 0;
}

/* Mobile Responsive Adjustments */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
    padding: 0 1rem;
  }

  .lead-text {
    font-size: 1.1rem;
    padding: 0 1rem;
  }

  .feature-card {
    padding: 2rem 1.5rem;
  }

  .feature-title {
    font-size: 1.3rem;
  }

  .feature-text {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.75rem;
  }

  .lead-text {
    font-size: 1rem;
  }

  .feature-card {
    padding: 1.5rem 1rem;
  }
}

/* Modern Amenities Section Styles */
.amenities-section {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  position: relative;
  overflow: hidden;
}

.amenities-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="%23ffffff" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  opacity: 0.3;
  pointer-events: none;
}

.amenities-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.amenities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 0 1rem;
}

.amenity-card {
  background: white;
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.8);
}

.amenity-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 193, 7, 0.05) 0%,
    rgba(255, 193, 7, 0.1) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.amenity-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  border-color: #ffe082;
}

.amenity-card:hover::before {
  opacity: 1;
}

.amenity-icon-wrapper {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, #ffc107 0%, #ffb300 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.3s ease;
}

.amenity-icon-wrapper::before {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(135deg, #ffc107, #ffb300, #ff9800);
  border-radius: 50%;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.amenity-card:hover .amenity-icon-wrapper {
  transform: scale(1.1);
  box-shadow: 0 8px 25px rgba(255, 193, 7, 0.4);
}

.amenity-card:hover .amenity-icon-wrapper::before {
  opacity: 1;
}

.amenity-icon {
  color: white !important;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.amenity-content {
  position: relative;
  z-index: 1;
}

.amenity-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0;
  line-height: 1.4;
}

/* Mobile Responsive Styles */
@media (max-width: 768px) {
  .amenities-section {
    padding: 2rem 1rem;
  }

  .amenities-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    padding: 0;
  }

  .amenity-card {
    padding: 1.5rem 1rem;
  }

  .amenity-icon-wrapper {
    width: 60px;
    height: 60px;
    margin-bottom: 1rem;
  }

  .amenity-name {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .amenities-grid {
    grid-template-columns: 1fr;
  }

  .amenity-card {
    padding: 1.25rem 1rem;
  }
}

/* Rating overflow fixes for mobile */
.rating-container {
  overflow: visible;
  max-width: 100%;
}

.review-rating {
  overflow: visible;
  max-width: 100%;
}

.rating-wrapper {
  overflow: visible;
  max-width: 100%;
}

/* Mobile-specific rating adjustments */
@media (max-width: 768px) {
  .rating-container {
    transform: scale(0.9);
    transform-origin: center;
  }

  .review-rating {
    transform: scale(0.85);
    transform-origin: center;
  }
}

@media (max-width: 480px) {
  .rating-container {
    transform: scale(0.8);
    transform-origin: center;
  }

  .review-rating {
    transform: scale(0.75);
    transform-origin: center;
  }
}

/* Hero Image Container */
.hero-image-container {
  position: relative;
  width: 100%;
}

/* Contact Button Styles */
.contact-btn {
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: none;
  border-radius: 50px;
  padding: 0 2rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(255, 193, 7, 0.3);
}

.contact-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 193, 7, 0.4);
}

.contact-btn:active {
  transform: translateY(0);
}

/* Mobile responsive adjustments for contact button */
@media (max-width: 768px) {
  .contact-btn {
    padding: 0 1.5rem;
    font-size: 0.9rem;
  }
}

/* Contact and Calendar Layout Styles */
.contact-calendar-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 0;
}

/* Contact Cards Section Styles */
.contact-cards-section {
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem 0;
}

.contact-cards-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  max-width: 100%;
  margin: 0 auto;
}

.contact-card {
  background: white;
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.8);
}

.contact-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 193, 7, 0.05) 0%,
    rgba(255, 193, 7, 0.1) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  border-color: #ffe082;
}

.contact-card:hover::before {
  opacity: 1;
}

.contact-icon-wrapper {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, #ffc107 0%, #ffb300 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.3s ease;
}

.contact-icon-wrapper::before {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(135deg, #ffc107, #ffb300, #ff9800);
  border-radius: 50%;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.contact-card:hover .contact-icon-wrapper {
  transform: scale(1.1);
  box-shadow: 0 8px 25px rgba(255, 193, 7, 0.4);
}

.contact-card:hover .contact-icon-wrapper::before {
  opacity: 1;
}

/* Special styling for logo contact cards (Booking.com and Airbnb) */
.contact-card:has(.contact-logo) .contact-icon-wrapper {
  background: transparent;
  box-shadow: none;
}

.contact-card:has(.contact-logo):hover .contact-icon-wrapper {
  background: transparent;
  box-shadow: none;
  transform: scale(1.05);
}

.contact-card:has(.contact-logo) .contact-icon-wrapper::before {
  display: none;
}

.contact-icon {
  color: white !important;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.contact-logo {
  max-width: 100%;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.contact-content {
  position: relative;
  z-index: 1;
}

.contact-label {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
}

.contact-value {
  font-size: 1rem;
  color: #5a6c7d;
  margin: 0;
  line-height: 1.4;
  word-break: break-word;
}

/* Booking Partners Section Styles */
.booking-partners-section {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem 0;
}

.booking-partners-container {
  text-align: center;
}

.booking-partners-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 2rem;
  line-height: 1.4;
}

.booking-partners-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 500px;
  margin: 0 auto;
}

.booking-partner-card {
  background: white;
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.8);
}

.booking-partner-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 193, 7, 0.05) 0%,
    rgba(255, 193, 7, 0.1) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.booking-partner-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  border-color: #ffe082;
}

.booking-partner-card:hover::before {
  opacity: 1;
}

.partner-link {
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
}

.partner-logo-wrapper {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
}

.partner-logo {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

.partner-text {
  font-size: 1rem;
  font-weight: 500;
  color: #2c3e50;
  margin: 0;
  line-height: 1.4;
}

.partner-subtext {
  font-size: 0.8rem;
  color: #6c757d;
  margin: 0.25rem 0 0 0;
  line-height: 1.3;
}

/* Mobile Responsive Styles for Contact and Calendar Sections */
@media (max-width: 768px) {
  .contact-cards-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    max-width: 100%;
  }

  .contact-card {
    padding: 1.25rem 0.75rem;
  }

  .contact-icon-wrapper {
    width: 60px;
    height: 60px;
    margin-bottom: 0.75rem;
  }

  .contact-label {
    font-size: 1.1rem;
  }

  .contact-value {
    font-size: 0.95rem;
  }

  .calendar-section {
    margin-top: 2rem;
  }
}

@media (max-width: 480px) {
  .contact-cards-container {
    grid-template-columns: 1fr;
    max-width: 100%;
  }

  .contact-card {
    padding: 1rem 0.75rem;
  }

  .contact-icon-wrapper {
    width: 55px;
    height: 55px;
    margin-bottom: 0.5rem;
  }

  .contact-label {
    font-size: 1rem;
  }

  .contact-value {
    font-size: 0.9rem;
  }
}
</style>

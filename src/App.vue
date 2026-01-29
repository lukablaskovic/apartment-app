<template>
  <v-app id="inspire">
    <v-app-bar class="px-3" color="white" flat density="compact">
      <v-spacer></v-spacer>

      <v-tabs
        v-model="activeTab"
        centered
        color="amber-darken-1"
        @update:model-value="onTabChange">
        <v-tab v-for="(link, index) in links" :key="link" :value="index">
          {{ link }}
        </v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer color="#212121" style="color: aliceblue">
      <v-row justify="center" class="text-center">
        <v-col cols="12">
          <p>Apartment Luka (Pula - Croatia)</p>
          <p>Season {{ new Date().getFullYear() }}</p>
        </v-col>
        <v-divider class=""></v-divider>

        <v-col class="text-center" cols="12">
          <v-dialog v-model="contact" width="auto">
            <template v-slot:activator="{ props }">
              <i
                style="cursor: pointer"
                v-bind="props"
                class="fa-solid fa-envelope fa-2x mx-4"></i>
            </template>

            <v-card>
              <v-card-text>
                <div class="mb-2">
                  Book your stay directly with us and save money on booking
                  fees!
                  <b>Or just send us a message if you have any questions.</b>
                  <div><b>E-mail:</b> lukablaskovic2000@gmail.com</div>
                  <div><b>Phone:</b> +385 91 721 7631</div>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="black" block @click="contact = false"
                  >Close Dialog</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>

          <a href="https://wa.me/385917217631"
            ><i class="fa-brands fa-whatsapp fa-2x mx-4"></i
          ></a>
          <a href="https://www.booking.com/Pulse-itMdY9" target="_blank"
            ><i class="fa-solid fa-b fa-2x mx-4"></i
          ></a>
          <a href="https://airbnb.com/h/apartment-luka" target="_blank"
            ><i class="fa-brands fa-airbnb fa-2x mx-4"></i
          ></a>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    links: ["Welcome", "Amenities", "Gallery", "Info", "Contact", "Reviews"],
    sectionIds: [
      "welcome",
      "amenities",
      "gallery",
      "info",
      "contact",
      "reviews",
    ],
    contact: false,
    activeTab: 0,
    isScrolling: false,
    observer: null,
  }),

  mounted() {
    // Delay scroll spy initialization to prevent interference with initial page load
    this.$nextTick(() => {
      setTimeout(() => {
        this.initScrollSpy();
      }, 500); // Small delay to ensure page is fully loaded
    });

    // Prevent any automatic scrolling on page refresh
    this.preventAutoScroll();
  },

  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },

  methods: {
    initScrollSpy() {
      // Wait for next tick to ensure all sections are rendered
      this.$nextTick(() => {
        const sections = this.sectionIds
          .map((id) => document.getElementById(id))
          .filter(Boolean);

        if (sections.length === 0) return;

        this.observer = new IntersectionObserver(
          (entries) => {
            if (this.isScrolling) return; // Don't update tabs while programmatically scrolling

            // Find the section that's most visible
            let maxRatio = 0;
            let activeSection = null;

            entries.forEach((entry) => {
              if (entry.intersectionRatio > maxRatio) {
                maxRatio = entry.intersectionRatio;
                activeSection = entry.target;
              }
            });

            if (activeSection) {
              const sectionId = activeSection.id;
              const tabIndex = this.sectionIds.indexOf(sectionId);
              if (tabIndex !== -1 && tabIndex !== this.activeTab) {
                this.activeTab = tabIndex;
              }
            }
          },
          {
            root: null,
            rootMargin: "-20% 0px -20% 0px", // Only trigger when section is well into view
            threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
          }
        );

        sections.forEach((section) => {
          this.observer.observe(section);
        });
      });
    },

    preventAutoScroll() {
      // If there's a hash in the URL, scroll to that section instead of clearing it
      if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        this.$nextTick(() => {
          setTimeout(() => {
            this.scroll(targetId);
          }, 100);
        });
        return;
      }

      // Ensure we start at the top for new visits or refreshes (only when no hash)
      if (document.readyState === "complete") {
        window.scrollTo(0, 0);
      } else {
        window.addEventListener("load", () => {
          window.scrollTo(0, 0);
        });
      }
    },

    onTabChange(tabIndex) {
      if (
        typeof tabIndex === "number" &&
        tabIndex >= 0 &&
        tabIndex < this.sectionIds.length
      ) {
        this.scroll(this.sectionIds[tabIndex]);
      }
    },

    //Link scroll
    async scroll(id) {
      if (id == null) return;

      try {
        this.isScrolling = true;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          // Reset scrolling flag after animation completes
          setTimeout(() => {
            this.isScrolling = false;
          }, 1000);
        }
        this.drawer = false;
      } catch (e) {
        this.isScrolling = false;
      }
    },
  },
};
</script>
<style scoped>
a {
  color: inherit;
}
.fa-envelope:hover {
  color: #f7c844;
}
.fa-whatsapp:hover {
  color: #2ed74a; /* red */
}
.fa-airbnb:hover {
  color: #fc325e;
}
.fa-b:hover {
  color: #05377e;
}
</style>

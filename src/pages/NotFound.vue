<template>
  <div class="not-found-container">
    <v-container class="fill-height">
      <v-row justify="center" align="center">
        <v-col cols="12" md="8" lg="6" class="text-center">
          <v-card class="not-found-card" elevation="8">
            <v-card-text class="pa-8">
              <div class="error-code">404</div>
              <div class="error-title">Page Not Found</div>
              <div class="error-message">
                Oops! The page you're looking for doesn't exist.
              </div>
              <div class="error-description">
                The page might have been moved, deleted, or you entered the
                wrong URL.
              </div>

              <v-divider class="my-6"></v-divider>

              <div class="action-buttons">
                <v-btn
                  color="amber-darken-1"
                  size="large"
                  variant="elevated"
                  @click="goHome"
                  class="mr-4">
                  <v-icon start>mdi-home</v-icon>
                  Home page
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { useSEO } from "@/composables/useSEO";

export default {
  name: "NotFound",
  setup() {
    // Set SEO for 404 page
    useSEO({
      title: "Page Not Found - Apartment Luka, Pula Croatia",
      description:
        "The page you are looking for could not be found. Return to our homepage to explore our luxury vacation rental in Pula, Croatia.",
      keywords: "404, page not found, apartment Luka, Pula Croatia",
      robots: "noindex, nofollow",
      url: "https://apartment-luka.eu/404",
    });
  },
  data() {
    return {
      sections: [
        { name: "Welcome", id: "welcome", color: "amber" },
        { name: "Amenities", id: "amenities", color: "green" },
        { name: "Gallery", id: "gallery", color: "blue" },
        { name: "Info", id: "info", color: "purple" },
        { name: "Reviews", id: "reviews", color: "orange" },
        { name: "Contact", id: "contact", color: "red" },
      ],
    };
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    goBack() {
      this.$router.go(-1);
    },
    scrollToSection(sectionId) {
      this.$router.push("/").then(() => {
        this.$nextTick(() => {
          setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
              element.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }, 100);
        });
      });
    },
  },
};
</script>

<style scoped>
.not-found-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.not-found-card {
  border-radius: 16px;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.95);
}

.error-code {
  font-size: 6rem;
  font-weight: 900;
  color: #ffb300;
  line-height: 1;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.error-title {
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.error-message {
  font-size: 1.2rem;
  color: #34495e;
  margin-bottom: 0.5rem;
}

.error-description {
  font-size: 1rem;
  color: #7f8c8d;
  margin-bottom: 2rem;
}

.action-buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

@media (max-width: 600px) {
  .error-code {
    font-size: 4rem;
  }

  .error-title {
    font-size: 1.5rem;
  }

  .error-message {
    font-size: 1rem;
  }

  .action-buttons {
    flex-direction: column;
    align-items: center;
  }

  .action-buttons .v-btn {
    width: 100%;
    max-width: 250px;
  }
}
</style>

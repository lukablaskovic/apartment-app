<template>
  <div class="info-tabs">
    <!-- Tab Navigation -->
    <nav class="tab-nav" role="tablist">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['tab-button', { active: activeTab === tab.value }]"
        @click="activeTab = tab.value"
        role="tab"
        :aria-selected="activeTab === tab.value">
        {{ tab.label }}
      </button>
    </nav>

    <!-- Tab Content -->
    <div class="tab-content">
      <!-- Emergency Numbers -->
      <div v-if="activeTab === 'emergency'" class="tab-pane">
        <div class="emergency-intro">
          <p>
            We wish you peaceful and healthy holiday in Pula Croatia, but
            emergency situations may occur unexpectedly.
          </p>
          <p class="emergency-title">
            Here's a list of emergency numbers in Croatia 🚨
          </p>
        </div>
        <div class="emergency-grid">
          <div
            v-for="num in emergencyNumbers"
            :key="num.name"
            class="emergency-item">
            <strong>{{ num.name }}</strong>
            <span class="emergency-number">{{ num.value }}</span>
          </div>
        </div>
      </div>

      <!-- Hosts -->
      <div v-if="activeTab === 'hosts'" class="tab-pane">
        <p class="hosts-intro">
          Hi there! We are here for you during your stay in our apartment 😊
        </p>
        <div class="hosts-grid">
          <div class="host-card" v-for="host in hosts" :key="host.name">
            <div class="host-image">
              <img :src="host.image" :alt="host.name" />
            </div>
            <div class="host-info">
              <h3>{{ host.name }}</h3>
              <p class="host-phone">{{ host.phone }}</p>
              <p v-if="host.email" class="host-email">
                <a :href="'mailto:' + host.email" target="_blank">{{
                  host.email
                }}</a>
              </p>
              <p v-if="host.telegram" class="host-telegram">
                Telegram: {{ host.telegram }}
              </p>
              <div class="host-socials">
                <i
                  v-for="social in host.socials"
                  :key="social"
                  :class="['fa-brands', `fa-${social}`, 'fa-2x', 'mx-2']"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Boat Tour -->
      <div v-if="activeTab === 'boat'" class="tab-pane">
        <div class="boat-intro">
          <h3>Up for a boat tour?</h3>
          <p>Feel free to contact us and we can arrange it!</p>
          <p>
            Over the last few years we have had great interest and positive
            feedback from our guests for a private boat tour.
          </p>
        </div>

        <div class="features-list">
          <div
            v-for="feature in boatFeatures"
            :key="feature"
            class="feature-item">
            <i class="fas fa-check-circle"></i>
            <span v-html="feature"></span>
          </div>
        </div>

        <div class="boat-price">Family Price: 80€</div>

        <div class="boat-gallery">
          <img
            v-for="(image, index) in boatImages"
            :key="index"
            :src="image"
            :alt="'Boat tour image ' + (index + 1)"
            class="boat-image" />
        </div>
      </div>

      <!-- What's Nearby -->
      <div v-if="activeTab === 'nearby'" class="tab-pane">
        <div class="nearby-intro">
          <p>
            Local restaurants, shops and services - everything is a few steps
            away from the apartment 🏠
          </p>
        </div>
        <div class="services-grid">
          <div v-for="s in services" :key="s.title" class="service-card">
            <service
              :imageSrc="s.imageSRC"
              :title="s.title"
              :subtitle="s.subtitle"
              :rawHTML="s.rawHTML">
            </service>
          </div>
        </div>
      </div>

      <!-- Waste Disposal -->
      <div v-if="activeTab === 'waste'" class="tab-pane">
        <div class="waste-containers">
          <div
            v-for="(container, index) in wasteContainers"
            :key="index"
            class="waste-section">
            <div class="waste-image">
              <img
                :src="container.image"
                :alt="container.type + ' container'" />
            </div>
            <div class="waste-info">
              <div class="waste-allowed">
                <h4>Allowed ✅</h4>
                <ul>
                  <li v-for="(item, i) in container.allowed" :key="i">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="waste-not-allowed">
                <h4>Not allowed ⛔</h4>
                <ul>
                  <li v-for="(item, i) in container.notAllowed" :key="i">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ -->
      <div v-if="activeTab === 'faq'" class="tab-pane">
        <div class="faq-list">
          <div v-for="f in faq" :key="f.id" class="faq-item">
            <details>
              <summary>{{ f.question }}</summary>
              <p>{{ f.answer }}</p>
            </details>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lukaImage from "@/assets/me.jpg";
import tataImage from "@/assets/tata.jpg";
import boat1 from "@/assets/boat/boat1.jpg";
import boat2 from "@/assets/boat/boat2.jpg";
import boat3 from "@/assets/boat/boat3.jpg";
import service from "@/components/expandable/local-service.vue";
import faq from "@/faq.js";

// Services images
import s_tivoli from "@/assets/services/tivoli.jpg";
import s_ultra from "@/assets/services/ultra.jpg";
import s_ljekarna from "@/assets/services/ljekarna.jpg";
import s_mons from "@/assets/services/mons.jpg";
import s_posta from "@/assets/services/posta.jpg";
import s_shell from "@/assets/services/shell.jpg";

// Waste container images
import w_plava from "@/assets/kante/plava.jpg";
import w_zelena from "@/assets/kante/zelena.jpg";
import w_zuta from "@/assets/kante/zuta.jpg";

export default {
  name: "InfoTabs",
  components: {
    service,
  },
  data() {
    return {
      activeTab: "emergency",
      tabs: [
        { label: "Emergency numbers", value: "emergency" },
        { label: "Your hosts", value: "hosts" },
        { label: "Boat tour", value: "boat" },
        { label: "What's nearby?", value: "nearby" },
        { label: "Waste disposal", value: "waste" },
        { label: "FAQ", value: "faq" },
      ],
      emergencyNumbers: [
        { name: "General emergency", value: "112" },
        { name: "Police department", value: "192" },
        { name: "Ambulance", value: "194" },
        { name: "Fire department", value: "193" },
        { name: "Search and rescue at sea", value: "195" },
        { name: "Road help", value: "1987" },
        { name: "Missing children", value: "116 000" },
        { name: "Tourist health care Pula", value: "+385 95 3256 003" },
      ],
      hosts: [
        {
          name: "Luka",
          image: lukaImage,
          phone: "+385 91 721 7631",
          email: "lukablaskovic2000@gmail.com",
          telegram: "lukablaskovic",
          socials: ["whatsapp", "viber", "telegram"],
        },
        {
          name: "Davor",
          image: tataImage,
          phone: "+385 92 181 4318",
          socials: ["whatsapp", "viber"],
        },
      ],
      boatFeatures: [
        "Tour is organized by your host Davor",
        'Navigation next to <a target="_blank" href="https://www.np-brijuni.hr/en">Brijuni National Park</a>',
        'Visit of the town <a target="_blank" href="https://www.fazana.hr/">Fažana</a>',
        "Swimming or sunbathing on local beaches",
        "Swimming or sunbathing on Kozada Island",
        "3-4 hours tour duration",
        "Departure time by agreement",
      ],
      boatImages: [boat1, boat2, boat3],
      services: [
        {
          imageSRC: s_tivoli,
          title: "🍕Pizzeria - Tivoli",
          subtitle: "Veli vrh 8, 52100 Pula",
          rawHTML:
            "<p>Food is our passion. We strive to offer a unique journey for all your senses. We use only the best ingredients to prepare pizza, pasta, salads and desserts.</p><p><b>Address:</b> Veli vrh 8, 52100, Pula</p><p><b>Phone:</b> 052 508 000 (Delivery available)</p><p><b>Distance:</b> 5 min walk the from apartment</p>",
        },
        {
          imageSRC: s_ultra,
          title: "🛒Grocery store - Ultra",
          subtitle: "Braće Leonardelli 1, 52100, Pula",
          rawHTML:
            "<p>Open everyday from 7AM–9PM</p><p><b>Address:</b> Braće Leonardelli 1, 52100, Pula</p><p><b>Phone:</b> 052 753 819</p><p><b>Distance:</b> 5 min walk from the apartment</p>",
        },
        {
          imageSRC: s_ljekarna,
          title: "⚕️Pharmacy - Veli Vrh",
          subtitle: "Braće Leonardelli 1, 52100, Pula",
          rawHTML:
            "<p>7AM–8PM Monday-Friday, 8AM-1PM Saturday, Sunday closed</p><p><b>Address:</b> Braće Leonardelli 1, 52100, Pula</p><p><b>Phone:</b> 052 223 657</p><p><b>Distance:</b> 5 min walk from the apartment</p>",
        },
        {
          imageSRC: s_mons,
          title: "🥩Barbecue Mons",
          subtitle: "Braće Leonardelli 1, 52100, Pula",
          rawHTML:
            "<p>Open everyday from 7AM–9PM</p><p><b>Address:</b> Braće Leonardelli 1, 52100, Pula</p><p><b>Phone:</b> 052 753 819</p><p><b>Distance:</b> 2 min walk from the apartment</p>",
        },
        {
          imageSRC: s_posta,
          title: "📮Post office - Veli vrh",
          subtitle: "Creska ul. 5, 52100, Pula",
          rawHTML:
            "<p>8–11AM, 11:30AM–3:30PM Monday-Saturday, Sunday closed</p><p><b>Address:</b> Creska ul. 5, 52100, Pula</p><p><b>Phone:</b> 052 553 679</p><p><b>Distance:</b> 1 min walk from the apartment</p>",
        },
        {
          imageSRC: s_shell,
          title: "⛽Petrol station Shell",
          subtitle: "Tršćanska ul. 44, 52100, Pula",
          rawHTML:
            "<p>6AM–12AM everyday</p><p><b>Address:</b> Tršćanska ul. 44, 52100, Pula</p><p><b>Phone:</b> 099 529 4436</p><p><b>Distance:</b> 5 min from the apartment by car</p>",
        },
      ],
      wasteContainers: [
        {
          type: "Blue",
          image: w_plava,
          allowed: [
            "plain paper and newspaper",
            "paper and cardboard packaging",
            "paper towel and napkins",
          ],
          notAllowed: [
            "tetrapack packaging (milk, juice etc)",
            "plasticized or metallized paper",
            "photographs",
          ],
        },
        {
          type: "Yellow",
          image: w_zuta,
          allowed: [
            "packaging detergent or shampoo",
            "plastic food packaging products",
            "cans, cans, metal lids",
          ],
          notAllowed: [
            "spray packaging",
            "plastic toys",
            "strong chemicals and paint",
          ],
        },
        {
          type: "Green",
          image: w_zelena,
          allowed: [
            "cigarettes and tobacco products",
            "diapers",
            "deodorant spray, hair spray, makeup",
          ],
          notAllowed: [
            "glass bottles (put them in separate nylon bags)",
            "food and green waste (put it in separate nylon bags)",
          ],
        },
      ],
      faq,
    };
  },
  mounted() {
    this.scrollActiveTabIntoView();
  },
  methods: {
    scrollActiveTabIntoView() {
      this.$nextTick(() => {
        const activeButton = this.$el.querySelector(".tab-button.active");
        if (activeButton) {
          activeButton.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
          });
        }
      });
    },
  },
  watch: {
    activeTab() {
      this.scrollActiveTabIntoView();
    },
  },
};
</script>

<style scoped>
.info-tabs {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.tab-nav {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #eee;
  -webkit-overflow-scrolling: touch;
  justify-content: center;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.tab-nav::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}

.tab-button {
  padding: 0.75rem 1.25rem;
  border: none;
  background: none;
  color: #666;
  font-weight: 500;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px;
}

.tab-button:hover {
  background: #f5f5f5;
  color: #333;
}

.tab-button.active {
  background: #ffe082;
  color: black;
}

.tab-content {
  padding: 1rem;
}

.tab-pane {
  animation: fadeIn 0.3s ease;
}

/* Emergency Numbers Styles */
.emergency-intro {
  text-align: center;
  margin-bottom: 2rem;
}

.emergency-title {
  font-size: 1.2rem;
  color: #dc3545;
  margin: 1rem 0;
}

.emergency-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.emergency-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  transition: transform 0.2s ease;
}

.emergency-item:hover {
  transform: translateY(-2px);
}

.emergency-number {
  font-family: monospace;
  font-size: 1.1rem;
  color: #007bff;
}

/* Hosts Styles */
.hosts-intro {
  text-align: center;
  margin-bottom: 2rem;
}

.hosts-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(
    auto-fit,
    minmax(200px, 1fr)
  ); /* Reduced from 280px by ~30% */
  max-width: 800px; /* Limit maximum width for better control */
  margin: 0 auto;
}

.host-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.host-card:hover {
  transform: translateY(-4px);
}

.host-image {
  height: 280px; /* Reduced from 400px by 30% */
  overflow: hidden;
}

.host-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.host-info {
  padding: 1rem;
  text-align: center;
  background: #f8f9fa;
}

.host-info h3 {
  margin: 0;
  font-size: 1.5rem;
  color: #333;
}

.host-phone {
  color: #666;
  margin: 0.25rem 0;
}

.host-email {
  color: #0088cc; /* Same blue as Telegram */
  margin: 0.25rem 0;
  font-size: 0.9rem;
}

.host-email a {
  color: inherit;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.host-email a:hover {
  opacity: 0.8;
}

.host-telegram {
  color: #0088cc;
  margin: 0.25rem 0;
}

.host-socials {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  margin-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.host-socials i {
  color: #666;
  transition: color 0.2s ease;
}

.host-socials i:hover {
  color: #007bff;
}

/* Boat Tour Styles */
.boat-intro {
  text-align: center;
  margin-bottom: 2rem;
}

.features-list {
  max-width: 600px;
  margin: 0 auto 2rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  background: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 0.5rem;
}

.feature-item i {
  color: #28a745;
}

.feature-item a {
  color: #007bff;
  text-decoration: none;
}

.feature-item a:hover {
  text-decoration: underline;
}

.boat-price {
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 2rem 0;
  color: #28a745;
}

.boat-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.boat-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.boat-image:hover {
  transform: scale(1.05);
}

/* Services Styles */
.nearby-intro {
  text-align: center;
  margin-bottom: 2rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

/* Waste Disposal Styles */
.waste-containers {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.waste-section {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 2rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 12px;
}

.waste-image img {
  width: 100%;
  border-radius: 8px;
}

.waste-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.waste-allowed h4,
.waste-not-allowed h4 {
  margin-bottom: 1rem;
}

.waste-allowed ul,
.waste-not-allowed ul {
  list-style: none;
  padding: 0;
}

.waste-allowed li,
.waste-not-allowed li {
  padding: 0.5rem 0;
  position: relative;
}

/* FAQ Styles */
.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  margin-bottom: 1rem;
}

.faq-item details {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
}

.faq-item summary {
  cursor: pointer;
  font-weight: 500;
  padding: 0.5rem 0;
}

.faq-item summary:hover {
  color: #007bff;
}

.faq-item p {
  margin-top: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Mobile Responsive Adjustments */
@media (max-width: 768px) {
  .info-tabs {
    padding: 1rem 0.5rem;
  }

  .tab-nav {
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
    justify-content: flex-start;
    gap: 0.25rem;
    scroll-padding-left: 1rem;
    scroll-padding-right: 1rem;
  }

  .tab-button {
    padding: 0.5rem 0.75rem;
    font-size: 0.85rem;
    min-width: auto;
    flex-shrink: 0;
  }

  .emergency-grid,
  .hosts-grid,
  .boat-gallery,
  .services-grid {
    grid-template-columns: 1fr;
  }

  .waste-section {
    grid-template-columns: 1fr;
  }

  .waste-info {
    grid-template-columns: 1fr;
  }

  .waste-image {
    max-width: 250px;
    margin: 0 auto;
  }

  .host-card {
    max-width: 350px;
    margin: 0 auto;
  }
}
</style>

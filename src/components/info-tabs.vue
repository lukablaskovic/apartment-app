<template>
  <v-card>
    <v-tabs
      align-tabs="center"
      v-model="tab"
      color="$vuetify.theme.current.colors.black">
      <v-tab value="one">Emergency numbers</v-tab>
      <v-tab value="two">Your hosts</v-tab>
      <v-tab value="three">Boat tour</v-tab>
      <v-tab value="four">Local services</v-tab>
      <v-tab value="five">Waste disposal</v-tab>
      <v-tab value="six">FAQ</v-tab>
    </v-tabs>

    <v-card-text class="text-center">
      <v-window v-model="tab">
        <v-window-item value="one">
          <div>
            We wish you peaceful and healthy holiday in Pula Croatia, but
            emergency situations may occur unexpectedly.
          </div>
          <p>Here's a list of emergency numbers in Croatia 🚨</p>
          <v-table class="text-center px-6" density="compact">
            <thead>
              <tr>
                <th class="text-left text-center">Emergency</th>
                <th class="text-left text-center">Number</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="num in emergencyNumbers" :key="num.name">
                <td>{{ num.name }}</td>
                <td>{{ num.value }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-window-item>

        <v-window-item value="two">
          <p>
            Hi there! We are here for you during your stay in our apartment 😊
          </p>
          <v-container fill-height>
            <v-row align="center" justify="center">
              <v-col sm="3" cols="12">
                <v-card
                  class="mx-auto animate__animated animate__backInDown"
                  max-width="200">
                  <v-img :src="lukaSRC" height="200px" cover></v-img>

                  <v-card-title> Luka </v-card-title>

                  <v-card-subtitle> +385 91 721 7631 </v-card-subtitle>
                  <v-card-subtitle class="mb-2">
                    Telegram: lukablaskovic
                  </v-card-subtitle>
                  <v-card-subtitle>
                    <i class="fa-brands fa-whatsapp fa-2x mx-2"></i>
                    <i class="fa-brands fa-viber fa-2x mx-2"></i>
                    <i class="fa-brands fa-telegram fa-2x mx-2"></i>
                  </v-card-subtitle> </v-card
              ></v-col>
              <v-col sm="3" cols="12">
                <v-card
                  class="mx-auto animate__animated animate__backInDown"
                  max-width="200">
                  <v-img :src="tataSRC" height="200px" cover></v-img>

                  <v-card-title> Davor </v-card-title>

                  <v-card-subtitle> +385 92 181 4318 </v-card-subtitle>
                  <v-card-subtitle class="mb-2">
                    <i class="fa-brands fa-whatsapp fa-2x mx-2"></i>
                    <i class="fa-brands fa-viber fa-2x mx-2"></i>
                  </v-card-subtitle> </v-card
              ></v-col>
            </v-row>
          </v-container>
        </v-window-item>
        <v-window-item value="three">
          <div>
            Up for a boat tour? Feel free to contact us and we can arrange it!
          </div>
          <div>
            Over the last few years we have had great interest and positive
            feedback from our guests for a private boat tour.
          </div>
          <ul class="mt-4">
            <li>
              <v-icon>mdi-checkbox-marked-circle</v-icon>Tour is organized by
              your host Davor
            </li>
            <li>
              <v-icon>mdi-checkbox-marked-circle</v-icon>Navigation next to
              <a target="_blank" href="https://www.np-brijuni.hr/en"
                >Brijuni National Park</a
              >
            </li>
            <li>
              <v-icon>mdi-checkbox-marked-circle</v-icon>Visit of the town
              <a target="_blank" href="https://www.fazana.hr/">Fažana</a>
            </li>
            <li>
              <v-icon>mdi-checkbox-marked-circle</v-icon>Swimming or sunbathing
              on local beaches
            </li>
            <li>
              <v-icon>mdi-checkbox-marked-circle</v-icon>Swimming or sunbathing
              on Kozada Island
            </li>
            <li>
              <v-icon>mdi-checkbox-marked-circle</v-icon>3-4 hours tour duration
            </li>
            <li>
              <v-icon>mdi-checkbox-marked-circle</v-icon>Departure time by
              agreement
            </li>
          </ul>
          <br />
          <div><b>Family Price: 80€</b></div>

          <v-container fill-height>
            <v-row align="center" justify="center">
              <v-col sm="3" cols="12">
                <v-img
                  :src="boat1SRC"
                  aspect-ratio="1"
                  cover
                  class="bg-grey-lighten-2"></v-img>
              </v-col>
              <v-col sm="3" cols="12">
                <v-img
                  :src="boat2SRC"
                  aspect-ratio="1"
                  cover
                  class="bg-grey-lighten-2"></v-img>
              </v-col>
              <v-col sm="3" cols="12">
                <v-img
                  :src="boat3SRC"
                  aspect-ratio="1"
                  cover
                  class="bg-grey-lighten-2"></v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-window-item>
        <v-window-item value="four">
          <div>
            Local restaurants, shops and services - everything is a few steps
            away from the apartment 🏠.
          </div>
          <v-container>
            <v-row no-gutters>
              <v-col
                sm="2"
                cols="12"
                class="mb-4"
                v-for="s in services"
                :key="s">
                <service
                  :imageSrc="s.imageSRC"
                  :title="s.title"
                  :subtitle="s.subtitle"
                  :rawHTML="s.rawHTML">
                </service>
              </v-col>
            </v-row>
          </v-container>
        </v-window-item>
        <v-window-item value="five">
          <v-container>
            <v-row>
              <v-col>
                <v-card class="" max-width="200">
                  <v-img :src="plavaKantaSRC"> </v-img>
                </v-card>
              </v-col>
              <v-col>
                Allowed ✅
                <v-img
                  :aspect-ratio="$vuetify.display.mobile ? 1.5 : 4.5"
                  src="https://cdn-icons-png.flaticon.com/512/1039/1039780.png">
                </v-img>
                <p>- plain paper and newspaper</p>
                <p>- paper and cardboard packaging</p>
                <p>- paper towel and napkins</p>
              </v-col>
              <v-col>
                Not allowed ⛔
                <p>- tetrapack packaging (milk, juice etc)</p>
                <p>- plasticized or metallized paper</p>
                <p>- photographs</p>
              </v-col>
            </v-row>
          </v-container>
          <v-container>
            <v-row>
              <v-col>
                <v-card class="" max-width="200">
                  <v-img :src="zutaKantaSRC"> </v-img>
                </v-card>
              </v-col>
              <v-col>
                Allowed ✅
                <v-img
                  :aspect-ratio="$vuetify.display.mobile ? 1.5 : 4.5"
                  src="https://cdn-icons-png.flaticon.com/512/1039/1039778.png">
                </v-img>
                <p>- packaging detergent or shampoo</p>
                <p>- plastic food packaging products</p>
                <p>- cans, cans, metal lids</p>
              </v-col>
              <v-col>
                Not allowed ⛔
                <p>- spray packaging</p>
                <p>- plastic toys</p>
                <p>- strong chemicals and paint</p>
              </v-col>
            </v-row>
          </v-container>
          <v-container>
            <v-row>
              <v-col>
                <v-card class="" max-width="200">
                  <v-img :src="zelenaKantaSRC"> </v-img>
                </v-card>
              </v-col>

              <v-col>
                Allowed ✅
                <v-img
                  :aspect-ratio="$vuetify.display.mobile ? 1.5 : 4.5"
                  src="https://img.freepik.com/premium-vector/illustration-spray-paint-throwing-garbage-trash-can_152558-87632.jpg?w=2000">
                </v-img>
                <p>- cigarettes and tobacco products</p>
                <p>- diapers</p>
                <p>- deodorant spray, hair spray, makeup</p>
              </v-col>
              <v-col>
                Not allowed ⛔
                <p>- glass bottles (put them in separate nylon bags)</p>
                <p>- food and green waste (put it in separate nylon bags)</p>
              </v-col>
            </v-row>
          </v-container>
        </v-window-item>
        <v-window-item value="six">
          <v-expansion-panels
            :class="$vuetify.display.mobile ? 'px-2' : 'px-12'"
            align="start"
            v-for="f in faq"
            :key="f.id">
            <v-expansion-panel :title="f.question" :text="f.answer">
            </v-expansion-panel>
          </v-expansion-panels>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script>
import lukaImage from "@/assets/me.jpg";
import tataImage from "@/assets/tata.jpg";

//Services
import service from "@/components/expandable/local-service.vue";

import s_tivoli from "@/assets/services/tivoli.jpg";
import s_ultra from "@/assets/services/ultra.jpg";
import s_ljekarna from "@/assets/services/ljekarna.jpg";
import s_mons from "@/assets/services/mons.jpg";
import s_posta from "@/assets/services/posta.jpg";
import s_shell from "@/assets/services/shell.jpg";

import "animate.css";

import faq from "@/faq.js";

import w_plava from "@/assets/kante/plava.jpg";
import w_zelena from "@/assets/kante/zelena.jpg";
import w_zuta from "@/assets/kante/zuta.jpg";

import boat1 from "@/assets/boat/boat1.jpg";
import boat2 from "@/assets/boat/boat2.jpg";
import boat3 from "@/assets/boat/boat3.jpg";
export default {
  components: {
    service,
  },
  data: () => ({
    faq,
    lukaSRC: lukaImage,
    tataSRC: tataImage,
    tab: null,
    justify: ["start", "center", "end", "space-around", "space-between"],
    plavaKantaSRC: w_plava,
    zelenaKantaSRC: w_zelena,
    zutaKantaSRC: w_zuta,
    boat1SRC: boat1,
    boat2SRC: boat2,
    boat3SRC: boat3,
    emergencyNumbers: [
      {
        name: "General emergency",
        value: "112",
      },
      {
        name: "Police department",
        value: "192",
      },
      {
        name: "Ambulance",
        value: "194",
      },
      {
        name: "Fire department",
        value: "193",
      },
      {
        name: "Search and rescue at sea",
        value: "195",
      },
      {
        name: "Road help",
        value: "1987",
      },
      {
        name: "Missing children",
        value: "116 000",
      },
      {
        name: "Tourist health care Pula",
        value: "+385 95 3256 003",
      },
    ],
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
          "<p>Open everyday from 7AM–9PM</p><p><b>Address:</b> Braće Leonardelli 1, 52100, Pula</p><p><b>Phone:</b> 052 753 819</p><p><b>Distance:</b> 5 min walk from the apartment</p>",
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
  }),
};
</script>
<style></style>

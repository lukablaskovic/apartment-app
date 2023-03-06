<template>
  <v-card>
    <v-tabs v-model="tab">
      <v-tab value="one">Emergency numbers</v-tab>
      <v-tab value="two">Your hosts</v-tab>
      <v-tab value="three">Apartment</v-tab>
      <v-tab value="four">Waste disposal</v-tab>
      <v-tab value="five">FAQ</v-tab>
    </v-tabs>

    <v-card-text class="text-center">
      <v-window v-model="tab">
        <v-window-item value="one">
          <div>
            We wish you peaceful and healthy holiday in Pula Croatia, but
            emergency situations may occur unexpectedly.
          </div>
          <p>Here's a list of emergency numbers in Croatia 🚨</p>
          <v-table class="text-center px-12" density="compact">
            <thead>
              <tr>
                <th class="text-left text-center">Name</th>
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
                <v-card class="mx-auto" max-width="344">
                  <v-img :src="lukaSRC" height="400px" cover></v-img>

                  <v-card-title> Luka </v-card-title>

                  <v-card-subtitle> +385 91 721 7631 </v-card-subtitle>
                </v-card></v-col
              >
              <v-col sm="3" cols="12">
                <v-card class="mx-auto" max-width="344">
                  <v-img :src="tataSRC" height="400px" cover></v-img>

                  <v-card-title> Davor </v-card-title>

                  <v-card-subtitle> +385 92 181 4318 </v-card-subtitle>
                </v-card></v-col
              >
            </v-row>
          </v-container>
        </v-window-item>

        <v-window-item value="three"> Three </v-window-item>
        <v-window-item value="four"> Four </v-window-item>
        <v-window-item value="five"> Five </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script>
import lukaImage from "@/assets/me.jpg";
import tataImage from "@/assets/tata.jpg";

export default {
  data: () => ({
    lukaSRC: lukaImage,
    tataSRC: tataImage,
    tab: null,
    justify: ["start", "center", "end", "space-around", "space-between"],
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
    ],
  }),
};
</script>

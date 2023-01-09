<template>
  <v-app id="inspire">
    <v-app-bar class="px-3" color="white" flat density="compact">
      <v-spacer></v-spacer>

      <v-tabs centered :color="$vuetify.theme.current.colors.yellow">
        <v-tab
          v-for="link in links"
          :key="link"
          @click="scroll(link.toLocaleLowerCase())">
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
          <p>Apartment Luka</p>
          <p>Season {{ new Date().getFullYear() }}</p>
        </v-col>
        <v-divider class=""></v-divider>
        <v-col class="text-center" cols="12">
          <i class="fa-solid fa-envelope fa-2x mx-4"></i>
          <a href="https://wa.me/385917217631"
            ><i class="fa-brands fa-whatsapp fa-2x mx-4"></i
          ></a>
          <a href="https://airbnb.com/h/pula-apartment-luka"
            ><i class="fa-brands fa-airbnb fa-2x mx-4"></i
          ></a>
          <i class="fa-solid fa-b fa-2x mx-4"></i>
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
    links: ["Welcome", "Amenities", "Info", "Help", "News"],
  }),
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

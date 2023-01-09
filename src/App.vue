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
    <v-footer color="#100c14"
      ><v-row justify="center">
        <v-col cols="auto" class="red--text">
          <p>Apartment Luka</p>
          <p>Season 2023</p>
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

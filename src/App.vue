<template>
  <v-app id="inspire">
    <v-app-bar class="px-3" color="white" flat density="compact">
      <v-spacer></v-spacer>

      <v-tabs centered color="amber-darken-1">
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
    links: ["Welcome", "Amenities", "Gallery", "Info", "Reviews", "Contact"],
    contact: false,
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

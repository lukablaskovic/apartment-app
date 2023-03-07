<template>
  <v-card class="mx-4 mb-2" max-width="344">
    <v-img :src="imageSrc" height="200px" cover></v-img>

    <v-card-title> {{ title }} </v-card-title>

    <v-card-subtitle> {{ subtitle }} </v-card-subtitle>

    <v-card-actions>
      <v-btn @click="show = !show" color="amber-lighten-3" variant="text">
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        color="black"
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text v-html="rawHTML"> </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
export default {
  props: ["title", "subtitle", "imageSrc", "rawHTML", "height"],
  name: "local-service",
  data: () => ({
    show: false,
  }),
};
</script>

<template>
  <v-card class="mx-auto" max-width="368">
    <v-card-item :title="p_title">
      <template v-slot:subtitle>
        {{ p_description }}
      </template>
    </v-card-item>

    <v-card-text class="py-0">
      <v-row align="center" no-gutters>
        <v-col class="" cols="8">
          <v-list lines="one">
            <v-list-item
              v-for="item in p_list"
              :key="item.title"
              :title="item.title"
              :subtitle="item.subtitle"></v-list-item>
          </v-list>
        </v-col>

        <v-col cols="4" class="text-right">
          <v-icon :color="p_iconColor" :icon="p_icon" size="88"></v-icon>
        </v-col>
      </v-row>
    </v-card-text>

    <div class="d-flex">
      <v-list-item density="compact" :prepend-icon="p_bonusDataIcon">
        <v-list-item-subtitle>{{ p_bonusDataText }}</v-list-item-subtitle>
      </v-list-item>
    </div>

    <v-expand-transition>
      <div v-if="expand">
        <div class="py-2"></div>

        <component :is="p_component"></component>
      </div>
    </v-expand-transition>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn @click="expand = !expand" :color="'black'">
        {{ !expand ? p_extendTitle : "Close" }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import c_e_wifi from "@/components/expandable/wi-fi.vue";
export default {
  components: {
    c_e_wifi,
  },
  props: [
    "p_title",
    "p_description",
    "p_icon",
    "p_iconColor",
    "p_list",
    "p_extendTitle",
    "p_bonusDataIcon",
    "p_bonusDataText",
    "p_component",
  ],
  data: () => ({
    expand: false,
  }),
};
</script>

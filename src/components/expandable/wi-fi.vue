<template>
  <v-container
    ><v-img :src="QRImageSRC" aspect-ratio="1.25"> </v-img>
  </v-container>
</template>

<script>
import qrImage from "@/assets/wifi_qrcode.png";
export default {
  data() {
    return {
      QRImageSRC: qrImage,
    };
  },
};
</script>

<style></style>

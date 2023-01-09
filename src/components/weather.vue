<template>
  <a
    class="weatherwidget-io"
    href="https://forecast7.com/en/44d8713d89/52100/"
    data-label_1="52100"
    data-label_2="WEATHER"
    data-theme="original"
    >52100 WEATHER</a
  >
</template>

<script>
!(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id;
    js.src = "https://weatherwidget.io/js/widget.min.js";
    fjs.parentNode.insertBefore(js, fjs);
  }
})(document, "script", "weatherwidget-io-js");

export default {
  name: "weather",
};
</script>

<style></style>

<template>
    <section
    data-color-mode="auto"
    data-light-theme="light"
    data-dark-theme="dark"
    class="my-3 py-4 px-2 rounded color-shadow-extra-large color-bg-secodary"
  >
    <div class="Subhead px-3">
      <h3 class="Subhead-heading">Plugin Installati</h3>
    </div>
    <div class="Box-row text-small"
     v-for="item in items"
     :key="item"
    ><a target="_blank"
     href="https://api.wordpress.org/plugins/info/1.0/" item >
     {{item}}
     </a></div>
    </section>
</template>

<script>
import installed from "./json/installed.json";
export default {
  name: "DowntimeWidget",
  data() {
    return {
      items: installed.installed,
    };
  },
};
</script>

<style>

</style>
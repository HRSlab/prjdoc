<template>
  <section class="my-3 py-4 px-3 olor-bg-secondary" data-color-mode="auto" data-light-theme="light" data-dark-theme="dark" >
        <div class="Subhead px-3 color-bg-secondary">
      <h3 class="Subhead-heading">Plugins Installati</h3>
    </div>
  <div id="Box_Container">
  <div data-color-mode="auto" data-light-theme="light" data-dark-theme="dark_dimmed"  class="Box Box--condensed text-small d-flex flex-column my-2 color-shadow-medium" v-for="plugin in plugins" :key="plugin">
  <div class="Box-header">
    <h4 class="Box-title">{{ plugin.name }}<span class="State State--small State--open float-right">{{ plugin.status }}</span></h4>
  </div>
  <div class="Box-body">
    <p v-html="plugin.description.rendered"></p>
  </div>
  <div class="Box-footer">
    <a :href="plugin.plugin_uri">{{ plugin.name }}</a><span class="Label float-right">Versione {{ plugin.version }}</span>
  </div>
  </div>
 </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
       plugins: []
    };
  },

  beforeMount() {
var config = {
      method: 'get',
      url: 'https://reinnovame.com/wp-json/wp/v2/plugins',
      headers: {
        'Authorization': 'Basic SFJTRGV2OlZIOEJ6MFZZbWwzelFucnRDZVpLNTB5Uw=='
      }
    };
      axios(config)
      .then(response => {
       this.$data.plugins = response.data
    })
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
</script>

<style scoped>

#Box_Container {
  max-height: 280px;
  overflow-y: scroll;
}


</style>
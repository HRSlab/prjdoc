<template>
  <section
    class=" py-4 px-2  color-bg-secondary"
    data-color-mode="auto"
    data-light-theme="light"
    data-dark-theme="dark_dimmed"
  >
    <div class="Subhead px-3 color-bg-secondary">
      <h3 class="Subhead-heading">Plugins Installati</h3>
    </div>
    <div  id="Box_Container">
      <div
        v-for="plugin in plugins"
        :key="plugin"
      >
    <div v-if="plugin.name == 'Akismet Anti-Spam' + 'Hide My WP Ghost Lite'" class="hide"></div>
    <div v-else-if="plugin.name == 'Hide My WP Ghost Lite'" class="hide"></div>
    <div v-else-if="plugin.name == 'Slate Admin Theme'" class="hide"></div>
    <div v-else-if="plugin.name == 'White Label CMS'" class="hide"></div>
      <div v-else
      data-color-mode="auto"
        data-light-theme="light"
        data-dark-theme="dark"
      class="Box Box--condensed
          text-small
          d-flex
          flex-column
          my-2
          color-shadow-small" >
        <div class="Box-header">
          <h4 class="Box-title"
          v-if="plugin.name == 'ManageWP - Worker' "
          >Maintenance HRSlab WP<span class="State State--small State--open float-right">{{
          plugin.status
          }}</span>
          </h4>
          <!-- V-ELSE -->
          <h4 v-else class="Box-title">
            {{ plugin.name
            }}<span v-if="plugin.status == 'active' " class="State State--small State--open float-right">{{
              plugin.status
            }}</span>
            <span v-else-if="plugin.status == 'inactive' " class="State State--small State--closed float-right">{{
              plugin.status
            }}</span>
          </h4>
        </div>
       <div class="Box-body">
        <p v-if="plugin.name == 'ManageWP - Worker' ">
          Questo è un plug-in avanzato che permette agl ingegneri
          <a href="https://www.hrslab.com/" target="blank"> HRS </a> di eseguire tutte le attività di manutenzione senza
          accedere al tuo sito. Per maggiori informazioni: <a href="mailto:developers@hrslab.com">developers@hrslab.com</a>
        </p>
          <p  v-else v-html="plugin.description.rendered"></p>
        </div>
        <div class="Box-footer">
          <a  v-if="plugin.name == 'ManageWP - Worker'" href="https://www.hrslab.com/" target="blank">HRS lab</a>

          <a v-else :href="plugin.plugin_uri">{{ plugin.name }}</a>
          <span class="Label float-right">Versione {{ plugin.version }}</span>
        </div>
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
      plugins: [],
    };
  },

  beforeMount() {
    var config = {
      method: "get",
      url: "https://reinnovame.com/wp-json/wp/v2/plugins",
      headers: {
        Authorization: "Basic SFJTRGV2OlZIOEJ6MFZZbWwzelFucnRDZVpLNTB5Uw==",
      },
    };
    axios(config)
      .then((response) => {
        this.$data.plugins = response.data;
      })
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style scoped>
#Box_Container {
  max-height: 280px;
  overflow-y: scroll;
}
</style>
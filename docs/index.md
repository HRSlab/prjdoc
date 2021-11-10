---
sidebar: false
home:  true
navbar: false
heroImage: /logo-hrs.png
tagline: Documentazione Di Progetto
Status: On Track  # Available Options: On Track, At Risk, Off Track, Stopped
Version: 1.1.0
footer: © 2012 - 2021 HRS Consulting Group. All rights reserved.
---

<template>
  <div class="main-content">
    <div v-if="user">
      <p align="center" class="text-small">
        Ciao {{user.name}}, Benvenuto!
      </p>
      <p align="center">
        <LogoutButton class="btn btn-danger mr-2" type="button" :client="auth0client" />
        <DashboardButton>
        </DashboardButton>
      </p>
    </div>
    <div v-else>
      <p  class="text-small" align="center">
        Non hai effettuato l'accesso. Per accedere utilizza il seguente pulsante di login.
      </p>
      <p align="center">
        <LoginButton :client="auth0client" @login-complete="getUser()" />
      </p>
    </div>
  </div>

<ProjectStatus>
</ProjectStatus>
<div class="d-flex my-3">
<span class="branch-name mx-auto text-gray-light">{{ $page.git.commits[0].dateShort }}<span classs="mx-2">{{ $page.git.author }}</span><span>{{ $page.git.commits[0].shortHash }}</span></span>
</div>
</template>


<script>
import auth from "./.vuepress/auth";
import LoginButton from "./.vuepress/components/LoginButton";
import LogoutButton from "./.vuepress/components/LogoutButton";
import ProjectStatus from "./.vuepress/components/ProjectStatus";
import DashboardButton from "./.vuepress/components/DashboardButton";

export default {
  data() {
    return {
      auth0client : null,
      user : null
    }
  },
  async mounted(){
    this.auth0client = await auth.createClient();

    this.user = await this.auth0client.getUser();
  },
  methods : {
    async login () {
      await auth.loginWithPopup(this.auth0client);
    },
    async getUser(){
      this.user = await this.auth0client.getUser();
    }
  }
}
</script>


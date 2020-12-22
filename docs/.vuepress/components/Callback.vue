<template>
  <div>
  <div id="authframe" class="blankslate blankslate-spacious border Box-overlay--wide";>
  <h1 class="text-center anim-fade-in"><span>Checking Authentication</span><span class="AnimatedEllipsis"></span></h1>
  </div>
</div>
</template>
<style scoped>
#authframe {
height: 60vh !important;
}
</style>


<script>
export default {
  async beforeMount() {
    // Process the auth tokens
    const handleAuth = await this.$auth.handleAuthentication();
  }
}
</script>
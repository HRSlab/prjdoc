<template>
  <div>
  <div class="blankslate blankslate-spacious border">
  <h1 class="text-center anim-fade-in"><span>Checking Authentication</span><span class="AnimatedEllipsis"></span></h1>
  </div>
</div>
</template>
 
<script>
export default {
  async beforeMount() {
    // Process the auth tokens
    const handleAuth = await this.$auth.handleAuthentication();
  }
}
</script> 
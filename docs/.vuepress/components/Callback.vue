<template>

  <link href="https://unpkg.com/@primer/css/dist/primer.css" rel="stylesheet"></link>

  <p>Checking Authentication...<span class="AnimatedEllipsis"></span></p>

</template>
 
<script>
export default {
  async beforeMount() {
    // Process the auth tokens
    const handleAuth = await this.$auth.handleAuthentication();
  }
}
</script> 
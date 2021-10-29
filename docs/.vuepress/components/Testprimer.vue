<template>

<div class="cont">

<!-- Start of Meetings Embed Script -->
<div class="meetings-iframe-container"  data-src="https://app.hubspot.com/meetings/carlo7?embed=true"></div>
<script type="text/javascript" src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js">
</script>

<!-- End of Meetings Embed Script -->

<!-- Start of HubSpot Embed Code -->
  <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/704325.js"></script>
<!-- End of HubSpot Embed Code -->

</div>

</template>


<style scoped>

.cont {
  position: relative;
}

.cont::after{
  content: "";
  border: 1px solid white;
  background: white;
  position: absolute;
  display: inherit;
  width: 400px;
  height: 1.75rem;
  left: 20%;
  bottom: 5%;
  z-index: 99999;
}

</style>








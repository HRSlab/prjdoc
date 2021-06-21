<template>
    <div class="Box">
  <div class="Box-header">
    <h3 class="Box-title">
      Di Sistema
    </h3>
  </div>
<ul class="list-style-none Box-body">
  <li class="d-inline-block col-2 p-2 color-summary info">
  <p class="text-small text-mono f6-light text-center text-uppercase">
  <a href="">{{ $frontmatter.colorsystem.info.name }}</a>
  #{{ $frontmatter.colorSystem.info.hex }}</p>
  </li>
  <!--
  -->
  <li class="d-inline-block col-2 p-2 color-summary success">
<p class="text-small text-mono f6-light text-center text-uppercase">
  <a href="#primario">{{ $frontmatter.colorsystem.success.name }}</a>
  #{{ $frontmatter.colorsystem.success.hex }}</p>
  </li>
  <!--
  -->
  <li class="d-inline-block col-2 p-2 color-summary warning">
  <p class="text-small text-mono f6-light text-center text-uppercase">
  <a href="#primario">{{ $frontmatter.colorSystem.warning.name }}</a>
  #{{ $frontmatter.colorSystem.warning.hex }}</p>
  </li>
  <!--
  -->
    <li class="d-inline-block col-2 p-2 color-summary error">
  <p class="text-small text-mono f6-light text-center text-uppercase">
  <a href="">{{ $frontmatter.colorsystem.error.name }}</a>
  #{{ $frontmatter.colorSystem.error.hex }}</p>
  </li>
   <!--
  -->
</ul>
</div>
</template>


<style scoped>
.color-summary {
width: 120px;
height: 120px;
border-radius: 8px;
}

.color-summary p {
padding-top: 120px;
color: #424242;
}
.color-summary p a {
font-size: 10px;
color: #424242;
}

.color-summary p a:hover {
color: lightgrey;
}

.colorbox {
width: 100%;
height: 80px;
border-radius: 8px;
}

.colorbox p {
padding-top: 80px;
color: #424242;
}
</style>

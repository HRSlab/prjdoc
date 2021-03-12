<template>
    <div class="Box">
  <div class="Box-header">
    <h3 class="Box-title">
      Princpali
    </h3>
  </div>
<ul class="list-style-none Box-body">
  <li class="d-inline-block col-2 p-2 color-summary primary">
  <p class="text-small text-mono f6-light text-center text-uppercase">
  <a href="#primario">{{ $frontmatter.colors.primary.name }}</a>
  #{{ $frontmatter.colors.primary.hex }}</p>
  </li>
  <!--
  -->
  <li class="d-inline-block col-2 p-2 color-summary secondary">
<p class="text-small text-mono f6-light text-center text-uppercase">
  <a href="#primario">{{ $frontmatter.colors.secondary.name }}</a>
  #{{ $frontmatter.colors.secondary.hex }}</p>
  </li>
  <!--
  -->
  <li class="d-inline-block col-2 p-2 color-summary accent">
  <p class="text-small text-mono f6-light text-center text-uppercase">
  <a href="#primario">{{ $frontmatter.colors.accent.name }}</a>
  #{{ $frontmatter.colors.accent.hex }}</p>
  </li>
  <!--
  -->
    <li class="d-inline-block col-2 p-2 color-summary dark">
  <p class="text-small text-mono f6-light text-center text-uppercase">
  <a href="">{{ $frontmatter.colors.dark.name }}</a>
  #{{ $frontmatter.colors.dark.hex }}</p>
  </li>
   <!--
  -->
    <li class="d-inline-block col-2 p-2 color-summary light">
  <p class="text-small text-mono f6-light text-center text-uppercase">
  <a href="">{{ $frontmatter.colors.light.name }}</a>
  #{{ $frontmatter.colors.light.hex }}</p>
  </li>
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

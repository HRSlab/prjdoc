<template>
  <section
    data-color-mode="auto"
    data-light-theme="light"
    data-dark-theme="dark"
    class="Container border rounded py-4 px-2 color-bg-canvas"
  >
    <div class="Subhead ml-6">
      <h1 class="Subhead-heading">Ottimizzazione</h1>
    </div>
    <div
      class="
        d-flex
        flex-justify-around
        flex-content-stretch
        flex-items-stretch
        flex-wrap
        flex-column
        flex-sm-row
      "
    >
      <div
        id="widget_box"
        class="
          Box
          text-center
          m-2
          col-sm-12 col-md-3
          p-3
          color-bg-tertiary color-shadow-medium
          anim-hover-grow
        "
      >
        <h1 class="color-text-link">{{ $frontmatter.Optimization.spam }}</h1>
        <p class="">Commenti Spam</p>
      </div>
      <div
        id="widget_box"
        class="
          Box
          text-center
          m-2
          col-sm-12 col-md-3
          p-3
          color-bg-tertiary color-shadow-extra-large
          anim-hover-grow
        "
      >
        <h1 class="color-text-link">
          {{ $frontmatter.Optimization.revision }}
        </h1>
        <p class="">Revisioni Post</p>
      </div>
      <div
        id="widget_box"
        class="
          Box
          text-center
          m-2
          col-sm-12 col-md-3
          p-3
          color-bg-tertiary color-shadow-extra-large
          anim-hover-grow
        "
      >
        <h1 class="color-text-link">
          {{ $frontmatter.Optimization.overhead }} KB
        </h1>
        <p class="">Database Overhead</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
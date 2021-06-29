<template>
<div
data-color-mode="dark"
data-light-theme="light"
data-dark-theme="dark"
class="Box flex-1 m-2">
    <div class="Box-row border-0 Layout--sidebar-narrow">
    <div class="TableObject">
  <div class="TableObject-item TableObject-item--primary">
       <h1 class="f5">PageSpeed</h1>
      <p class="small f6 color-text-secondary"> Luogo: {{ $frontmatter.Perfomance.Region }}</p>
  </div>
<!-- Conditional Render Based on Speed Score Index -->
  <div class="TableObject-item">
<!-- Good Score >= 70% -->
  <p v-if="$frontmatter.pageSpeed.result >= '70%'"
    class="f1 text-bold color-text-success"
  > {{ $frontmatter.pageSpeed.grade }} {{ $frontmatter.pageSpeed.result }}
  </p>
<!-- Bad Score <= 40% -->
  <p v-else-if="$frontmatter.pageSpeed.result <= '40%'"
    class="f1 text-bold color-text-danger"
  > {{ $frontmatter.pageSpeed.grade }} {{ $frontmatter.pageSpeed.result }}
  </p>
<!-- Average Score 40% - 70%  -->
  <p v-else
    class="f2 text-bold"
    style="color: #ffd33d;"
  > {{ $frontmatter.pageSpeed.grade }} {{ $frontmatter.pageSpeed.result }}
  </p>
  </div>
</div>
<span class="Progress Progress--large">
<!-- Good Score >= 70% -->
    <span v-if="$frontmatter.pageSpeed.result >= '70%'"
    class="Progress-item color-bg-success-inverse"
    :style="{ width: $frontmatter.pageSpeed.result }"></span>
<!-- Bad Score <= 40% -->
    <span v-else-if="$frontmatter.pageSpeed.result <= '40%'"
    class="Progress-item color-bg-danger"
    :style="{ width: $frontmatter.pageSpeed.result }"></span>
<!-- Average Score 40% - 70%  -->
    <span v-else
    class="Progress-item"
    style="background-color: #ffd33d;"
    :style="{ width: $frontmatter.pageSpeed.result }"></span>
  </span>
<p class="small f6 color-text-tertiary"> Precedente: {{ $frontmatter.pageSpeed.previous }}</p>
    </div>
</div>
</template>

<script>
export default {

};

</script>

<style>

</style>
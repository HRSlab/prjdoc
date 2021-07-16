<template>
  <section
    data-color-mode="auto"
    data-light-theme="light"
    data-dark-theme="dark"
    class="my-3 py-4 px-3 rounded color-shadow-extra-large"
  >
    <div class="Subhead">
      <h3 class="Subhead-heading">Downtime</h3>
    </div>
    <div class="d-flex flex-justify-around">
      <div
        class="
          Box
          text-center
          color-text-link
          col-sm-12 col-md-5
          p-3
          color-bg-tertiary
          anim-hover-grow
        "
        data-color-mode="auto"
        data-light-theme="light"
        data-dark-theme="dark_dimmed"
      >
        <p class="f2-light">
          {{ $frontmatter.Availability.up }}<span class="text-small">%</span>
        </p>
        <span class="f5 color-text-secondary">Disponibilità</span>
      </div>
      <div
        class="
          Box
          text-center
          col-sm-12
          color-text-link
          col-md-5
          p-3
          anim-hover-grow
          color-bg-tertiary
        "
        data-color-mode="auto"
        data-light-theme="light"
        data-dark-theme="dark_dimmed"
      >
        <p class="f2-light">{{ $frontmatter.Availability.downtimes }}</p>
        <p class="f5 color-text-secondary">
          Downtime<br /><span class="text-small color-text-tertiary">{{
            $frontmatter.Availability.timedown
          }}</span>
        </p>
      </div>
    </div>
    <div class="container mx-auto text-center color-text-tertiary">
      <div class="text-small mt-3 color-text-tertiary text-left">Mese Corrente:</div>
      <span class="diffstat" v-for="item in items" :key="item">
        <!-- Conditional Render Based on Envent -->
        <!-- DOWN -->
        <span
          v-if="item.Down == true"
          class="diffstat-block-deleted tooltipped tooltipped-n"
          :aria-label="item.DownTime + ' ' + item.From"
        ></span>
        <!-- UP -->
        <span
          v-else-if="item.Day < new Date().getDate()"
          class="diffstat-block-added tooltipped tooltipped-n"
          :aria-label="item.Day + ' ' + $frontmatter.Availability.month + ': UP' "
        ></span>
        <!-- NOT CHECKED -->
        <span v-else class="diffstat-block-neutral tooltipped tooltipped-n"
        :aria-label="item.Day + ' ' + $frontmatter.Availability.month"
        ></span>
      </span>
    </div>
  </section>
</template>

<script>
import availabilty from "./json/downtime.json";
export default {
  name: "DowntimeWidget",
  data() {
    return {
      items: availabilty.availabilty,
    };
  },
};
</script>

<style>
</style>
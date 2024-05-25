<template>
  <section
    data-color-mode="auto"
    data-light-theme="light"
    data-dark-theme="dark_dimmed"
    class="my-3 pt-4 px-md-4 px-sm-2 color-bg-secondary border-md-right"
  >
    <div class="Subhead">
      <h3 class="Subhead-heading">Downtime</h3>
    </div>
    <div class="d-flex flex-justify-around my-5 flex-content-center
        flex-items-stretch">
      <div
        class="
          Box
          flex-1
          text-center
          color-text-link
          p-3
          anim-hover-grow
        "
        data-color-mode="auto"
        data-light-theme="light"
        data-dark-theme="dark"
      >
        <p class="f2-light">
          {{ $frontmatter.Availability.up }}<span class="text-small">%</span>
        </p>
        <span class="f5 color-text-secondary">Disponibilità</span>
      </div>
      <div
        class="
          Box
          flex-1
          text-center
          color-text-link
          p-3
          anim-hover-grow
        "
        data-color-mode="auto"
        data-light-theme="light"
        data-dark-theme="dark"
      >
        <p class="f2-light">{{ $frontmatter.Availability.downtimes }}</p>
        <p class="f5 color-text-secondary">
          Downtime<br /><span class="text-small color-text-tertiary">{{
            $frontmatter.Availability.timedown
          }}</span>
        </p>
      </div>
    </div>
    <div
    data-color-mode="auto"
    data-light-theme="light"
    data-dark-theme="dark"
    class="container  text-center color-text-tertiary border rounded py-3 px-2">
      <div class="text-small ml-3 my-2 color-text-tertiary text-left">
        Mese Corrente:
      </div>
      <!-- Conditional Render Based on Envent -->
      <span class="diffstat d-inline-flex flex-justify-center" v-for="item in items" :key="item">
      <!-- DOWN -->
        <span style="width:0.5625rem; height:1rem;"
          v-if="item.Down == true"
          class="diffstat-block-deleted tooltipped tooltipped-n"
          :aria-label="item.DownTime + ' ' + item.To"
        ></span>
        <!-- SUSPENDED -->
        <span style="width:0.5625rem; height:1rem; background-color: #ffc107; outline: #ffc107;"
          v-if="item.Suspended == true"
          class="diffstat-block-neutral tooltipped tooltipped-n"
          :aria-label="item.DownTime + ' ' + item.Status" >
          </span>
        <!-- UP -->
        <span  style="width:0.5625rem; height:1rem;"
          v-else-if="item.Day < new Date().getDate()"
          class="diffstat-block-added tooltipped tooltipped-n"
          :aria-label="item.Day + ' ' + $frontmatter.Availability.month"
        ></span>
        <!-- NOT CHECKED -->
        <span style="width:0.5625rem; height:1rem;"
          v-else
          class="diffstat-block-neutral tooltipped tooltipped-n"
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
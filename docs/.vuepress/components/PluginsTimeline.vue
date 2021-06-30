<template>
  <section
    data-color-mode="dark"
    data-light-theme="light"
    data-dark-theme="dark_dimmed"
  class="color-bg-secondary border-0 rounded">
    <div
      class="TimelineItem text-small"
      v-for="plugin in plugins"
      :key="plugin"
    >
      <div class="TimelineItem-badge">
        <svg
          class="octicon octicon-git-merge color-text-link"
          viewBox="0 0 14 16"
          version="1.1"
          width="14"
          height="16"
          aria-hidden="true"
        >
        <path fill-rule="evenodd" d="M5 3.254V3.25v.005a.75.75 0 110-.005v.004zm.45 1.9a2.25 2.25 0 10-1.95.218v5.256a2.25 2.25 0 101.5 0V7.123A5.735 5.735 0 009.25 9h1.378a2.251 2.251 0 100-1.5H9.25a4.25 4.25 0 01-3.8-2.346zM12.75 9a.75.75 0 100-1.5.75.75 0 000 1.5zm-8.5 4.5a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
        </svg>
      </div>
      <div class="TimelineItem-body lh-sm-condensed item color-shadow-extra-large">
        <div>
          <span class="text-small">{{ plugin.Date }}</span>
          <h4 class="f4 color-text-scondary mt-1">{{ plugin.Plugin }}</h4>
          <p class="text-small color-text-tertiary mt-1">
            <span class="Label Label--danger mr-1 text-small">{{ plugin.Previous }}</span>
            <span class="Label Label--success mr-1 text-small">{{ plugin.Latest }}</span></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import plugins from "./json/plugins.json";
export default {
  data() {
    return {
      plugins: plugins.plugins
    };
  },
};
</script>
<template>
  <section>
    <div
      class="TimelineItem TimelineItem--condensed"
      v-for="plugin in plugins"
      :key="plugin"
    >
      <div class="TimelineItem-badge">
        <svg
          class="octicon octicon-git-commit"
          viewBox="0 0 14 16"
          version="1.1"
          width="14"
          height="16"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M10.86 7c-.45-1.72-2-3-3.86-3-1.86 0-3.41 1.28-3.86 3H0v2h3.14c.45 1.72 2 3 3.86 3 1.86 0 3.41-1.28 3.86-3H14V7h-3.14zM7 10.2c-1.22 0-2.2-.98-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.22-.98 2.2-2.2 2.2z"
          ></path>
        </svg>
      </div>
      <div class="TimelineItem-body lh-sm-condensed item">
        <div>
          <span class="text-small">{{ plugin.Date }}</span>
          <h4 class="color-text-scondary">{{ plugin.Plugin }}</h4>
          <p class="text-small color-text-tertiary">{{ plugin.Version }}</p>
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
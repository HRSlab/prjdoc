<template>
  <section>
    <div class="my-3 gutter-md-spacious d-flex flex-justify-around flex-wrap">
      <div
        id="widget_box"
        data-color-mode="auto"
        data-light-theme="light"
        data-dark-theme="dark"
        class="
          Box
          p-3
          text-center
          mx-auto
          col-sm-12 col-md-3
          color-bg-info-inverse color-text-white color-shadow-extra-large
          anim-hover-grow
        "
      >
        <h1 class="">{{ Math.floor(totalAmount / 3600) }}</h1>
        <p class="">Month</p>
      </div>

      <div
        id="widget_box"
        data-color-mode="dark"
        data-light-theme="light"
        data-dark-theme="dark"
        class="
          Box
          p-3
          text-center
          mx-auto
          col-sm-12 col-md-3
          color-bg-tertiary color-shadow-extra-large
          anim-hover-grow
        "
      >
        <h1 ref="hours" class="color-text-primary">
          {{ hours[29].grand_total.digital }}
        </h1>
        <p ref="hours" class="">{{ hours[29].range.text }}</p>
      </div>
      <div
        id="widget_box"
        data-color-mode="dark"
        data-light-theme="light"
        data-dark-theme="dark_dimmed"
        class="
          Box
          p-3
          text-center
          mx-auto
          col-sm-12 col-md-3
          color-bg-tertiary color-shadow-extra-large
          anim-hover-grow
        "
      >
        <h1 class="color-text-secondary">
          {{ hours[28].grand_total.digital }}
        </h1>
        <p>{{ hours[28].range.text }}</p>
      </div>
    </div>

    <div class="Box">
      <div class="Box-header mb-0">
        <h3 class="Box-title clearfix text-center">
          <span class="col-4 float-left mx-auto">Day</span>
          <span class="col-4 float-left mx-auto border-x">Hours</span>
          <span class="col-4 float-left mx-auto">Total Seconds</span>
        </h3>
      </div>
      <div class="Box-body p-0 m-0 border-0">
        <div
          class="Box-row clearfix text-small text-center"
          v-for="hour in hours"
          :key="hour"
        >
          <span class="col-4 float-left">{{ hour.range.text }}</span>
          <span class="col-4 float-left border-x">{{
            hour.grand_total.text
          }}</span>
          <span class="col-4 float-left">{{
            hour.grand_total.total_seconds
          }}</span>
        </div>
      </div>
    </div>

    <div class="hide" v-for="hour in hours" :key="hour">
      <p>
        {{ hour.range.text
        }}<span class="color-text-link ml-3">{{
          hour.grand_total.total_seconds
        }}</span>
      </p>
    </div>
  </section>
</template>

<script>
const axios = require("axios");

export default {
  data() {
    return {
      hours: [],
      grand_total: {},
      range: {},
    };
  },
  computed: {
    totalAmount: function () {
      var sum = 0;
      this.$data.hours.forEach((e) => {
        sum += e.grand_total.total_seconds;
      });
      return sum;
    },
  },
  async beforeMount() {
    await axios
      .get(
        "https://wakatime.com/share/@HRSlab/a31fef80-e05f-4a44-ad97-bd1f95abfd08.json",
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((response) => {
        this.$data.hours = response.data.data;
        this.$data.grand_total = response.data.data;
        this.$data.range = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

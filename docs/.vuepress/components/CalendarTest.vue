<template>
<div class="container border p-3 text-small">
    <calendar-heatmap class="calendar text-small"
    :values="values"
    :max="10"
    :range-color="['#EBF6FE', '#D8EEFD', '#9ED5FA', '#77C4F8', '#77C4F8', '#08609B']"
    tooltip-unit="seconds"
    :end-date="today"
    no-data-text="nothing"
    />

<div
 v-for="(item, index) in data"
        :key="index"

class="box p-2">TEST {{ item.grand_total.text }} and {{ item.range.text }}</div>

</div>
</template>

<script>
  import { CalendarHeatmap } from 'vue-calendar-heatmap'
  import axios from "axios";

  export default {
    components: {
      CalendarHeatmap
    },
  data() {
    return {
      data: [],
      values: [
        { date: "2021-12-2",
        count: 7
        } // date values can be a date parseable string, a millisecond timestamp, or a Date object. Count value should be a number.
      ],
      today: new Date(),
      };
  },

  beforeMount() {
    var config = {
      method: "get",
      url: "https://wakatime.com/share/@HRSlab/a31fef80-e05f-4a44-ad97-bd1f95abfd08.json",
    };
axios(config)
      .then((response) => {
        this.$data.data = response.data;
      })
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style>




</style>
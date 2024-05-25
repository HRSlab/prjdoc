<template>
<button class="btn btn-outline" type="button" aria-selected="true"  @click="goToDashboard()">Vai alla dashboard</button>
</template>

<script>
export default {
  name: 'DashboardButton',
  props: {
    dashboard: {
      type: String,
      required: true
    }
  },
    methods: {
        goToDashboard() {
        this.$router.push('/dashboard/')
        }
    }
}
</script>
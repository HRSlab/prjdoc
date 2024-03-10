<template>
<div
    data-color-mode="auto"
    data-light-theme="light"
    data-dark-theme="dark_dimmed"
class="Box my-2 py-2 color-bg-secondary">
<div class="mx-auto d-flex flex-justify-center">
<div class="Box-row border-0 d-inline-flex flex-justify-between flex-items-center  mx-auto p-1"
style="width: 90%; max-width: 180px;"
><span class="scanbeat" v-for="n in 18" :key="n">{{ n }} </span>
</div>
</div>
</div>
</template>

<script>
export default {

};

</script>

<style>

.scanbeat {
    width: 8px;
    height: 16px;
    background-color: #BADA55;
    border-radius: 2px;
    margin: 0;
    color: transparent;
    opacity: 1;
	-webkit-animation: fade-in 2000ms cubic-bezier(0.390, 0.575, 0.565, 1.000) 250ms infinite forwards;
	        animation: fade-in 2000ms cubic-bezier(0.390, 0.575, 0.565, 1.000) 250ms infinite forwards;
}

.scanbeat:nth-child(1) {
  animation-delay: 200ms;
}

.scanbeat:nth-child(2) {
  animation-delay: 300ms;
}

.scanbeat:nth-child(3) {
  animation-delay: 400ms;
}

.scanbeat:nth-child(4) {
  animation-delay: 500ms;
}

.scanbeat:nth-child(5) {
  animation-delay: 600ms;
}

.scanbeat:nth-child(6) {
  animation-delay: 700ms;
}

.scanbeat:nth-child(7) {
  animation-delay: 800ms;
}

.scanbeat:nth-child(8) {
  animation-delay: 900ms;
}

.scanbeat:nth-child(9) {
  animation-delay: 1000ms;
}

.scanbeat:nth-child(10) {
  animation-delay: 1100ms;
}

.scanbeat:nth-child(11) {
  animation-delay: 1200ms;
}

.scanbeat:nth-child(12) {
  animation-delay: 1300ms;
}

.scanbeat:nth-child(13) {
  animation-delay: 1400ms;
}

.scanbeat:nth-child(14) {
  animation-delay: 1500ms;
}

.scanbeat:nth-child(15) {
  animation-delay: 1600ms;
}

.scanbeat:nth-child(16) {
  animation-delay: 1600ms;
}

.scanbeat:nth-child(17) {
  animation-delay: 1700ms;
}

.scanbeat:nth-child(18) {
  animation-delay: 1800ms;
}



@keyframes fade-in {
  to {
    opacity: 0;
  }
}

</style>
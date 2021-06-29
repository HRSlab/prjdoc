<template>
<div
data-color-mode="auto"
data-light-theme="light"
data-dark-theme="dark"
class="Box p-4 my-2 color-bg-secondary">
    <div class="Subhead p-2">
        <h1 class="Subhead-heading">Sicurezza</h1>

            <div class="Subhead-actions color-bg-success-inverse color-text-white p-2 CircleBadge">
                <svg
                class="octicon shield-lock"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"><path fill-rule="evenodd" d="M12.077 2.563a.25.25 0 00-.154 0L3.673 5.24a.249.249 0 00-.173.237V10.5c0 5.461 3.28 9.483 8.43 11.426a.2.2 0 00.14 0c5.15-1.943 8.43-5.965 8.43-11.426V5.476a.25.25 0 00-.173-.237l-8.25-2.676zm-.617-1.426a1.75 1.75 0 011.08 0l8.25 2.675A1.75 1.75 0 0122 5.476V10.5c0 6.19-3.77 10.705-9.401 12.83a1.699 1.699 0 01-1.198 0C5.771 21.204 2 16.69 2 10.5V5.476c0-.76.49-1.43 1.21-1.664l8.25-2.675zM13 12.232A2 2 0 0012 8.5a2 2 0 00-1 3.732V15a1 1 0 102 0v-2.768z"></path>
                </svg>
            </div>

            <p class="Subhead-description text-small">Ultima Scansione:
                <span class="color-text-link" > {{ Math.abs(new Date(new Date($frontmatter.Security.latest) - Date.now()).getHours().toLocaleString("it-IT", { hours: 'numeric' })) }} ore fa </span>
            </p>
    </div>

<ul class="Box Box--condensed">
    <li class="Box-row text-small" v-for="check in $frontmatter.Security.Checks" :key="check">
    <svg class="octicon check-circle-fill mr-2 color-text-success" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8 16A8 8 0 108 0a8 8 0 000 16zm3.78-9.72a.75.75 0 00-1.06-1.06L6.75 9.19 5.28 7.72a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l4.5-4.5z"></path></svg>
        {{  check }}

    </li>
</ul>
<div class="Box my-3 py-2 color-bg-secondary">
<span class="text-small pl-2">Scanning Status:</span>
<div class="Box-row border-0 d-inline-flex flex-justify-between flex-items-center  mx-2 p-1"
style="width: 90%"
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
    opacity: 0;
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
    opacity: 1;
  }
}

</style>
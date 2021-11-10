<template>
    <button class="btn btn-primary" type="button"  @click="login()">Login</button>
</template>

<script>
import auth from "../auth";
export default {
    props : ['client'],
    methods : {
        async login () {
            await auth.loginWithPopup(this.client);

            this.$emit('login-complete');
        }
    }
}
</script>
<template>
<div class="row">
    <div class="col">
        <h2>Logged Out successfully</h2>
        <router-link to="/login">Login</router-link>
    </div>
</div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LogoutSuccess',
    mounted() {
        
    }
});
</script>
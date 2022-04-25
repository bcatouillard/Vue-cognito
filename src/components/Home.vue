<template>
    <div class="row">
        <div class="col">
            <h3>Welcome, </h3>
            <div class="alert alert-info">
                {{userInfo}}
            </div>
            <router-link to="/logout">
                Logout
            </router-link>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
import UserInfoStore from '@/store/user-info-store';
export default defineComponent({
    name: 'HomeComponent',
    data: function() {
        return{
            userInfo: UserInfoStore.state.cognitoInfo
        }
    }
});
</script>
<style>
</style>
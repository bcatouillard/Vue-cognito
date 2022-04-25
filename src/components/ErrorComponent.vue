<template>
    <div class="alert alert-danger">
        {{message}}
    </div>
</template>
<script>
export default {
    name: 'ErrorComponent',
    data: function(){
        return {
            message: ""
        }
    },
    mounted(){
        this.message = this.$route.query.message;
    }
}
</script>
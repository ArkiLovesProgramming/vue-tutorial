<template>
    <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
        <div class="mb-2">
            <button @click="back" class="btn btn-primary" style="margin-right: 10px;">back</button>
            <button @click="forward" class="btn btn-primary">forward</button>
        </div>
    </div>
</template>
<script>
export default {
    name: "PageBanner",
    methods: {
        back(){
            this.$router.back();
        },
        forward(){
            this.$router.forward();
        }
    }
}
</script>
<style>
    
</style>
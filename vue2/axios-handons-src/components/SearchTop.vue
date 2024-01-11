<template>
    <div class="p-4 d-flex align-items-center">
        <div class="input-group">
			<span class="input-group-text">Username</span>
			<input ref="searchbox" @keyup.enter="search" type="text" class="form-control" placeholder="Username">
		</div>
    </div>
</template>
<script>
    export default {
        name: "SearchTop",
        data(){
            return {
                
            }
        },
        methods: {
            search(e){
                this.$bus.$emit("search", e.target.value);
                // cos input box was already rendered, so it works with direct invocation of focus,
                // here i just wanna help me strengthen my memory
                this.$nextTick(()=>{this.$refs.searchbox.focus();}); 
            }
        }
    }
</script>
<style lang="css">
    
</style>
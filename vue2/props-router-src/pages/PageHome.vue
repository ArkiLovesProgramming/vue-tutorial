<template>
    <div class="panel-body">
        <div>
            <h2>Home component content</h2>
            <div>
                <ul class="nav nav-tabs list-group d-fex flex-row">
                    <!-- first method to pass parameter by template string. remeber you can only put expression in interpolation -->
                    <router-link class="list-group-item" :to="`/home/news?id=${id}`" active-class="active">News</router-link>
                    <router-link class="list-group-item" :to="`/home/message/${id}`" active-class="active">Message</router-link>
                    <!-- <a class="list-group-item" href="./home-news.html">News</a> -->
                    <!-- <a class="list-group-item active" href="./home-message.html">Message</a> -->
                </ul>
            </div>
            <div>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "PageHome",
    data(){
        return {
            id: "001"
        }
    }
}
</script>
<style lang="css">
    
</style>
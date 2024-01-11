<template>
    <div class="panel-body">
        <div>
            <h2>Home组件内容</h2>
            <div>
                <ul class="nav nav-tabs list-group d-fex flex-row">
                    <router-link class="list-group-item" to="/home/news" active-class="active">News</router-link>
                    <router-link class="list-group-item" to="/home/Message" active-class="active">Message</router-link>
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
    name: "PageHome"
}
</script>
<style lang="css">
    
</style>
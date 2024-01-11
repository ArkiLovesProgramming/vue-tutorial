<template>
    <div class="panel-body">
        <div>
            <h2>Home component content</h2>
            <div>
                <ul class="nav nav-tabs list-group d-fex flex-row">
                    <router-link class="list-group-item" :to="`/home/news?id=${id}`" active-class="active">News</router-link>
                    <router-link class="list-group-item" :to="`/home/message/${id}`" active-class="active">Message</router-link>
                </ul>
            </div>
            <div>
                <!-- 这里也可以写字符串 -->
                <!-- 设置 include="component name"可以指定缓存哪个，如果组件有表单组件，就缓存 -->
                <keep-alive include="PageNews">
                    <router-view></router-view>
                </keep-alive>
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
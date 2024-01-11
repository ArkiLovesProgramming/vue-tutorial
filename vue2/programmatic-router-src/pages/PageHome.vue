<template>
    <div class="panel-body">
        <div>
            <h2>Home component content</h2>
            <div>
                <ul class="nav nav-tabs list-group d-fex flex-row">
                    <!-- first method to pass parameter by template string. remeber you can only put expression in interpolation -->
                    <!-- <router-link class="list-group-item" :to="`/home/news?id=${id}`" active-class="active">News</router-link> -->
                    <!-- <router-link class="list-group-item" :to="`/home/message/${id}`" active-class="active">Message</router-link> -->
                    <button @click="jump" class="list-group-item" active-class="active">News</button>
                    <button @click="jumpwithparams" class="list-group-item" active-class="active">Message</button>
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
    },
    methods: {
        jump(){
            // http://localhost:8083/#/home/news?id=001
            // http://localhost:8083/#/home/new?id=123
            this.$router.push({
                path: "/home/news",
                query: {
                    id: this.id
                }
            })
            // this.$router.push("/home/news?id=123")
        },
        jumpwithparams(){
            this.$router.push({
                name: "message",
                // path: "/home/message",  //这里是 props:true，只能用to 传对象只能用 name
                params: {
                    id: this.id
                }
            })
            // this.$router.push("/home/message/" + this.id)
        },
    }
}
</script>
<style lang="css">
    
</style>
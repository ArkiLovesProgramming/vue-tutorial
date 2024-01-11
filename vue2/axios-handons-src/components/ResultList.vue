<template>
    <div class="resultbox">
        <div class="resultitem" v-for="user in users" :key="user.id">
            <a :href="user.html_url">
                <img :src="user.avatar_url" :alt="user.login + avatar"/>
            </a>
            <div class="itemname">{{user.login}}</div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        name: "ResultList",
        data(){
            return {
                users: []
            }
        },
        methods: {
            search(keyword){
                axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
                    response=>{
                        this.users = response.data.items;
                        console.log(this.users);
                    },
                    error=>{
                        console.log(error);
                    }
                )
            }
        },
        mounted(){
            this.$bus.$on("search", this.search);
        }
    }
</script>
<style lang="css">
    .resultitem{
        /* background-color: grey; */
        display: block;
        width: 110px;
        height: 110px;
        text-align: center;
        float: left;
        margin-right: 20px;
        margin-top: 16px;
    }
    .resultitem img{
        width: 80px;
        height: 80px;
        background-color: white;
        border-radius: 50%;
        box-shadow: -1px 1px 10px 1px rgba(0, 0, 0, 0.2);
        overflow: hidden;
        margin-bottom: 6px;
    }
    .resultitem .itemname{
        font-weight: bold;
    }
</style>
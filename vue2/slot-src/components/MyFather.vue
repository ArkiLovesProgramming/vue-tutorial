<template>
    <div>
        <MyChildren>
            <h2>this is a anonymous slot</h2>
            <template v-slot:nameslot>
                <h3>this is named slot</h3>
            </template>
            <h2>this is also a anonymous slot</h2>
            <template scope="userslot">
                <ul>
                    <li v-for="user in userslot.users" :key="user.id">{{user.name + "/" + user.age}}</li>
                </ul>
            </template>
        </MyChildren>
    </div>
</template>
<script>
    import MyChildren from "./MyChildren.vue"
    export default {
        nmae: "Myfather",
        components: {
            MyChildren
        }
    }
</script>
<style lang="css">
    
</style>
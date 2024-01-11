<template>
    <div>
        <h1>here is a children modul</h1>   
        <slot></slot>
        <slot :users="users"></slot>
        <slot name="nameslot"></slot>
    </div>
</template>

<script>
    export default {
        name: "MyChildren",
        data(){
            return {
                users: [
                    {
                        id: "001",
                        name: "arki",
                        age: 18
                    },
                    {
                        id: "002",
                        name: "wang",
                        age: 19
                    }
                ]
            }
        }
    }
</script>

<style lang="css">
    
</style>
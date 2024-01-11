<template>
    <div>
        <h3>{{$route.query.id}}</h3>
        <ul>
            <li>
                <a href="/message1">news001</a>&nbsp;&nbsp;
            </li>
            <li>
                <a href="/message2">news002</a>&nbsp;&nbsp;
            </li>
            <li>
                <a href="/message/3">news003</a>&nbsp;&nbsp;
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "PageNews",
    mounted(){
        console.log(this)
    }
}
</script>
<style>
    
</style>
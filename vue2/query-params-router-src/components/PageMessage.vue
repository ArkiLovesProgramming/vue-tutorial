<template>
    <div>
        <h3>{{$route.params.id}}</h3>
        <ul>
            <li>
                <a href="/message1">message001</a>&nbsp;&nbsp;
            </li>
            <li>
                <a href="/message2">message002</a>&nbsp;&nbsp;
            </li>
            <li>
                <a href="/message/3">message003</a>&nbsp;&nbsp;
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "PageMessage",
    mounted(){
        console.log(this)
    }
}
</script>
<style>
    
</style>
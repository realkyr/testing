<template>
<div id="app">
    <h1>เข้าสู่ระบบ</h1>
    <h3>E-mail</h3>
    <h3>{{email}}</h3>
    <input type="text" v-model="email"/>
    <h3>Password</h3>
    <input type="text" v-model="password"/><br/><br/>
</div>  
</template>

<script>
    export default{
        data() {
            return{
                email: "",
                password: ""
            }
        }
    }
</script>
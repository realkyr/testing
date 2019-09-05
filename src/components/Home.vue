<template>
<div id="app">
    <h2>NUMBERS = {{counter}}</h2>
    <button v-on:click="counter += 1">+1</button><br/><br/>
    <button v-on:click="counter -= 1">-1</button><br/><br/>
    สวัสดีคุณ {{ name }} ขอต้อนรับสู่เว็บเทส<br/><br/>
    <input type="text" v-on:keydown="name = $event.target.value" ><br/><br/>
    เราคือ {{ name1 }} <br/><br/>
    <input type="text1" v-bind:value="name1">
    <h2>A B C D .... F</h2>
    <button v-on:click="correct = !correct">E</button>&nbsp;
    <button v-on:click="error = !error">e</button>
    <p v-if="correct">ถูกต้อง</p>
    <p v-else-if="error">ผิดแล้ว</p>
</div>    
</template>
<script>
    export default{
        data() {
            return{
                counter: 0,
                name: '..........',
                name1: 'Alien',
                correct: false,
                error: false,
            }
        }
    }
</script>
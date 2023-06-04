<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>


<template>
    <div class="main-container">
        <div class="left-panel">
            <div class="navigation">
                <router-link class="nav-item" to="/">Wszystkie przepisy</router-link>
                <router-link class="nav-item" to="/">Ulubione</router-link>
                <router-link class="nav-item" to="/addrecipe">Dodaj przepis</router-link>
            </div>
        </div>
        <div class="main-content">
            <router-view></router-view>
        </div>
    </div>
</template>


<style scoped>
.nav-item{
    text-decoration: none;
    color: black;
}
.nav-item:hover{
    text-decoration: underline dotted black 2px;
}
.main-container{
    display: flex;
    flex-direction: row;
    margin: 6vh 5vw auto 5vw;
}
.navigation{
    margin: 20px 10px auto 10px;
    width: fit-content;
    display: flex;
    flex-direction: column;
    text-align: left;
}
.left-panel{
    width: 200px;
    height: 300px;
    border: 3px dotted black;
    border-radius: 30px;
    margin-right: 50px;
    background-color: aliceblue;
}
.main-content{
    width: 100%;
    height: fit-content;
}
</style>
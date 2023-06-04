<script setup>
</script>





<template>
    <div class="top-bar">
        <img class="logo" src="../assets/logo.png" alt="Przykładowe logo">
        <div class="podpis">Dominik Dworak</div>
    </div>
</template>




<style scoped>
.logo{
    height: 70px;
    position: relative;
    top: -10px;
}
.podpis{
    margin: auto 0px auto auto;
    height: 27;
    width: 74;
}
.top-bar{
    width: 100%;
    height: 70px;
    padding: 10px 20px 10px 20px;
    background-color: lightblue;
    border-bottom: 3px black dotted;
    display: flex;
    flex-direction: row;
    align-content:space-around
}
</style>
<script setup>
    import Heart from '../components/Heart.vue'
    import { RouterLink, RouterView } from 'vue-router'
    const props = defineProps({
        index: Number,
        name: String,
        image: String,
        description: String
    })
</script>

<script>
    
</script>

<template>
    <div class="recipe-body">
        <router-link class="router-container" :to="'/details/' + index">
            <img :src=image alt="Obrazek">
            <div class="desc-container">
                <h3>{{ name }}</h3>
                <h5>{{ description }}</h5>
            </div>
        </router-link>
        
        <Heart class="heart-icon"></Heart>
    </div>
</template>




<style scoped>
.router-container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: black;
}
.heart-icon{
    position: absolute;
    bottom: 5px;
    right: 5px;
}
.desc-container{
    width: 160px;
    height: 126px;
    margin: auto auto 0px auto;
    border-top: 1px solid black;
}
img{
    max-width: 160px;
    width: auto;
    max-height: 150px;
    height: auto;
    margin: 5px auto 3px auto;
    border-radius: 3px;
}
.recipe-body{
    display: flex;
    background-color:lightskyblue;
    border: 3px black dotted;
    border-radius: 20px;
    padding: 3px;
    margin: 10px;
    flex-direction: column;
    height: 300px;
    width: 180px;
    text-align: center;
}
</style>
<script setup>
    const food_list = [
        {
            id: 1,
            name: 'Zupa',
            image: 'https://www.allrecipes.com/thmb/p4F_knUDCrUNusNOTyjY_dCp8d4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/13338-quick-and-easy-vegetable-soup-DDMFS-4x3-402702f59e7a41519515cecccaba1b80.jpg',
            description: 'Warzywna'
        },
        {
            id: 2,
            name: 'Pizza',
            image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
            description: 'Margharita'
        },
        {
            id: 3,
            name: 'Truskawki',
            image: 'https://www.cookingclassy.com/wp-content/uploads/2020/01/chocolate-covered-strawberries-15.jpg',
            description: 'Polewa czekoladowa'
        },
        {
            id: 4,
            name: 'Czipsy',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Potato-Chips.jpg/1200px-Potato-Chips.jpg',
            description: 'Ziemniaczane'
        },
        {
            id: 5,
            name: 'Awokado',
            image: 'https://cdn.britannica.com/72/170772-050-D52BF8C2/Avocado-fruits.jpg',
            description: 'Świeże'
        },
    ]

    import Recipe from '../components/Recipe.vue'
</script>

<template>
    <div class="home-container">
        <div class="search-bar">
            <div class="search-bar-container">
                <input type="text" name="" id="search-text">
                <button id="search-button">Szukaj</button>
            </div>
        </div>
        <div class="recipes">
            <Recipe
            v-for="(recipe, index) in food_list"
            :key="index"
            :index="index"
            :name="recipe.name"
            :image="recipe.image"
            :description="recipe.description"
            ></Recipe>
        </div>
    </div>
</template>

<style scoped>
.recipes{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 30px;
}
.search-bar-container{
    width: fit-content;
    margin: auto;
}
#search-button{
    background-color: lightgreen;
    color: black;
    border-radius: 5px;
    border: dotted black 2px;
}
#search-button:hover{
    background-color: greenyellow;
}
#search-text{
    border: dotted 2px black;
    margin-right: 5px;
    width: 30vw;
}
</style>
<script setup>
    import IngredientList from "../components/IngredientList.vue"
</script>





<template>
    <div class="add-recipe-container">
            <div class="add-top">
                <h1>Dodaj nowy przepis</h1>
                <label for="title">
                    Podaj nazwę przepisu: <br>
                    <input type="text" name="" id="title" class="recipe-format"> <br>
                </label>
                <label for="difficulty">
                    Wybierz poziom trudności: <br>
                    <select name="" id="difficulty" class="recipe-format">
                        <option value="easy">Łatwy</option>
                        <option value="middle">Średni</option>
                        <option value="difficult">Trudny</option>
                    </select> <br>
                </label>
                <label for="time">
                    Wybierz czas przygotowania przepisu: <br>
                    <select name="" id="time" class="recipe-format">
                        <option value="10m">10 minut</option>
                        <option value="20m">20 minut</option>
                        <option value="30m">30 minut</option>
                        <option value="40m">40 minut</option>
                        <option value="50m">50 minut</option>
                        <option value="1h">1 godzina</option>
                    </select> <br>
                </label>
                <label for="desc">
                    Opis: <br>
                    <textarea name="" id="desc" cols="30" rows="10" class="recipe-format"></textarea> <br>
                </label>
                <button class="recipe-format add-button">Dodaj przepis</button>
            </div>
    </div>
    <IngredientList></IngredientList>
</template>




<style scoped>
.add-button{
    cursor: pointer;
}
#difficulty{
    width: 100px;
}
#time{
    width: 100px;
}
.recipe-format{
    background-color: white;
    border: 1px solid grey;
    border-radius: 2px;
}
#title, #desc{
    width: 240px;
}
#title:focus, #desc:focus{
    outline: none;
}
.add-top{
    text-align: left;
    width: fit-content;
    min-width: 270px;
    margin: 0px auto 0px auto;
}
.add-recipe-container{
    background-color:lightskyblue;
    border: 3px black dotted;
    border-radius: 20px;
    flex-direction: column;
    min-height: 450px;
    height: fit-content;
    min-width: 500px;
    width: fit-content;
    padding: 10px;
    margin: 0px auto 0px auto;
}
</style>
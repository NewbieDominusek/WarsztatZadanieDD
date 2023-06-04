<script>
    export default{
        name: 'Details',
        data(){
            return {id:this.$route.params.id}
        }
    }
</script>
<script setup>
    const food_list = [
        {
            id: 1,
            name: 'Zupa',
            image: 'https://www.allrecipes.com/thmb/p4F_knUDCrUNusNOTyjY_dCp8d4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/13338-quick-and-easy-vegetable-soup-DDMFS-4x3-402702f59e7a41519515cecccaba1b80.jpg',
            description: 'Warzywna',
            difficulty: 'Łatwy',
            time: 30,
            ingredients: {
                Ziemniaki: 2,
                Marchewki: 2,
                Koperek: 4
            }
        },
        {
            id: 2,
            name: 'Pizza',
            image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
            description: 'Margharita',
            difficulty: 'Trudny',
            time: 45,
            ingredients: {
                Mąka: 10,
                Ser: 6,
                Szynka: 5,
                Bazylia: 2
            }
        },
        {
            id: 3,
            name: 'Truskawki',
            image: 'https://www.cookingclassy.com/wp-content/uploads/2020/01/chocolate-covered-strawberries-15.jpg',
            description: 'Polewa czekoladowa',
            difficulty: 'Łatwy',
            time: 5,
            ingredients: {
                Truskawki: 15,
                Czekolada: 5,
            }
        },
        {
            id: 4,
            name: 'Czipsy',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Potato-Chips.jpg/1200px-Potato-Chips.jpg',
            description: 'Ziemniaczane',
            difficulty: 'Średni',
            time: 30,
            ingredients: {
                Ziemniaki: 2,
                Przyprawa: 1
            }
        },
        {
            id: 5,
            name: 'Awokado',
            image: 'https://cdn.britannica.com/72/170772-050-D52BF8C2/Avocado-fruits.jpg',
            description: 'Świeże',
            difficulty: 'Łatwy',
            time: 5,
            ingredients: {
                Awokado: 1
            }
        },
    ]
</script>
    





<template>
    <div class="details-container">
        <img :src="food_list[this.id].image" alt="Obrazek jedzenia" class="image">
        <div class="bottom-container">
            <div class="left-container">
                <h1>{{ food_list[this.id].name }}</h1>
                <h2>Poziom trudności: {{ food_list[this.id].difficulty }}</h2>
                <h2>Czas przygotowania: {{ food_list[this.id].time }} min</h2>
                <h2>Opis:</h2>
                <h3>{{ food_list[this.id].description }}</h3>
            </div>
            <div class="right-container">
                <h2 class="ing-title">Składniki:</h2>
                <table class="ing-table">
                    <tr v-for="(ing, index) in food_list[this.id].ingredients" :key="index">
                        <td class="ing-name-td">
                            <h3>
                                {{ index }}:
                            </h3>
                        </td>
                        <td>
                            <h3>
                                {{ ing }}
                            </h3>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>




<style scoped>
.ing-title{
    text-align: left;
}
.ing-table{
    margin-left: 15px;
}
.ing-name-td{
    text-align: right;
    padding-right: 10px;
}
.right-container{
    min-width: 200px;
    width: fit-content;
    margin-left: 30px;
}
.left-container{
    max-width: 500px;
    text-align: left;
}
.bottom-container{
    justify-content: space-between;
    display: flex;
    flex-direction: row;
}
.image{
    max-width: 1000px;
    width: auto;
    max-height: 700px;
    height: auto;
    border-radius: 5px;
    margin: 0px auto 0px auto;
}
.details-container{
    background-color:lightskyblue;
    border: 3px black dotted;
    border-radius: 20px;
    text-align: center;
    flex-direction: column;
    min-height: 150px;
    height: fit-content;
    min-width: 100px;
    width: fit-content;
    padding: 10px;
    margin: 0px auto 0px auto;
}
</style>
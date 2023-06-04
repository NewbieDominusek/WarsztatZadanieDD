<template>
    <div class="add-container">
        <div class="input-container">
            <input class="name-input" type="text" v-model="nameInput" placeholder="Podaj nazwę składnika">
            <button @click="addIngr" class="add-btn">Dodaj</button>
        </div>
        <div class="list-container">
            <table class="list-table">
                <tr v-for="(ingr, index) in ingredients" :key="index" class="list-row">
                    <td class="name-cell">
                        {{ ingr.name }}
                    </td>
                    <td class="add-cell func-cell">
                        <button class="bttn-ingr" @click="addAmount(index)">+</button>
                    </td>
                    <td class="num-cell func-cell">
                        {{ ingr.amount }}
                    </td>
                    <td class="minus-cell func-cell">
                        <button class="bttn-ingr" @click="removeAmount(index)">-</button>
                    </td>
                    <td class="func-cell">
                        <button class="bttn-ingr" @click="removeIngr(index)">🗑</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                nameInput: '',
                ingredients: []
            }
        },


        methods: {
            addIngr(){
                if(this.nameInput.length === 0) return;

                this.ingredients.push({
                    name: this.nameInput,
                    amount: 0
                })
                this.nameInput = ""
            },

            removeIngr(index){
                this.ingredients.splice(index, 1)
            },

            removeAmount(index){
                if(this.ingredients[index].amount === 0) return;

                this.ingredients[index].amount -= 1
            },

            addAmount(index){
                this.ingredients[index].amount += 1
            }
        },
    }
</script>

<style>
.list-row{
    border-top: 3px solid gray;
}
.func-cell{
    width: 30px;
    height: 25px;
}
.bttn-ingr{
    background-color: lightsalmon;
    border: 1px solid gray;
    border-radius: 2px;
    width: 25px;
    height: 25px;
    font-size: 22px;
    text-align: center;
    line-height: 20px;
}
.bttn-ingr:hover{
    background-color: salmon;
}
.list-table{
    width: 100%;
}
.list-container{
    margin: 5px auto 0px 102px;
    width: 240px;
}
.add-btn{
    width: 60px;
    border: 1px solid gray;
    border-radius: 2px;
    background-color: greenyellow;
}
.add-btn:hover{
    cursor: pointer;
    background-color: lightgreen;
}
.name-input{
    width: 180px;
    background-color: white;
    border: 1px solid gray;
    border-radius: 2px;
    border-right: none;
}
.name-input:focus{
    outline: none;
}
.input-container{
    margin: 4px auto 0px 102px;
}
.add-container{
    width: 500px;
    margin: 15px auto 0px auto;
    background-color: lightskyblue;
    border: 3px black dotted;
    border-radius: 20px;
    padding: 10px;
}
</style>
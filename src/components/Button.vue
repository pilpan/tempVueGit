<template lang="">
    <div>
            <div>
                <button @click="addCount(-1,$event)">+1</button>
                <button @click.once="addCount(1,$event)">-1</button>
                <p>{{ count }}</p>
            </div>
            <div class='inline'>
                <div v-for='(el,index) in listButtons'>
                    <button 
                    @click='sayHi(index)'
                    >Тык</button>
                </div>
            </div>
            <div @click.right.prevent="test('C')">
                <div @click.ctrl="test('B')" class='redBox'>
                    <button @click.capture="test('A')">Тык</button>
                </div>
            </div>
    </div>
</template>
<script>
import { useRoute, useRouter } from 'vue-router';
export default {
    data() {
        return {
            count: 0,
            listButtons:[
                {text: 'Hi'},
                {text: 'Hola'},
                {text: 'Ciao'},
                {text: '안녕하세요'},
                {text: 'Bonjour'},
            ]
        }
    },
    methods: {
        addCount(number, event) {
            this.count = this.count - number;
        },
        sayHi(index){
            alert(this.listButtons[index].text)
        },
        test(text,event){console.log(text)}
    },
    mounted() {
        console.log(useRoute().path, useRouter())
    },

}
</script>
<style>
    .inline{
        display: inline-flex;
        gap: 5px;
    }
    .redBox{
        height: 25px;
        width: 50px;
        background-color: red;
    }
    
</style>
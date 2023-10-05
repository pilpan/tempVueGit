<template lang="">
    <div :style="styleObj">
        <div v-bind:class='classObj'  @click='classObj.activeCard = !classObj.activeCard' v-for='el in listNba'>
            <div>
                {{ el.first_name}} {{' '}} {{el.last_name}}
            </div>
            <div
            class='pos'
            >{{el.position}}</div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            listNba: [],
            isActive: false,
            classObj: {activeCard: this.isActive},
            styleObj: {
                height: '300px',
                backgroundColor: 'grey',
                overflow: 'auto',
                color: 'blue'

            }
        }
    },
    mounted() {
        const url = 'https://free-nba.p.rapidapi.com/players?page=0&per_page=25';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '488f437511msh2d3854838388c55p13692cjsn135921cfebdf',
                'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
            }
        };

        try {
            fetch(url, options)
                .then(res => res.json())
                .then(data => {
                    console.log(data.data)

                    this.listNba = data.data.map((el) => {return {...el, isActive:false}})
                    console.log(this.listNba)
                })
        } catch (error) {
            console.error(error);
        }
    },
}
</script>

<style scoped>
    .activeCard{
        border: 1px solid rosybrown;
        font-size: xx-large;
    }
    .card{
        border: 1px solid grey;
        text-align: center;
    }
    .pos{
        background-color: azure;
    }
</style>
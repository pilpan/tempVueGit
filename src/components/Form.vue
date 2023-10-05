<template lang="">
    <form @submit.prevent='fetchData'>
        <input @keyup.enter='show' type="text">
        <button>
            Отправить
        </button>
    </form>

    <p>{{answer}}</p>
</template>
<script>
export default {
    data() {
        return {
            answer: '',
        }
    },
    methods: {
        fetchData(event) {
            const url = 'https://robomatic-ai.p.rapidapi.com/api';
            const options = {
                method: 'POST',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    'X-RapidAPI-Key': '488f437511msh2d3854838388c55p13692cjsn135921cfebdf',
                    'X-RapidAPI-Host': 'robomatic-ai.p.rapidapi.com'
                },
                body: new URLSearchParams({
                    in: event.target[0].value,
                    op: 'in',
                    cbot: '1',
                    SessionID: 'RapidAPI1',
                    cbid: '1',
                    key: 'RHMN5hnQ4wTYZBGCF3dfxzypt68rVP',
                    ChatSource: 'RapidAPI',
                    duration: '1'
                })
            };

            try {
                fetch(url, options)
                    .then(res => res.json())
                    .then(data => this.answer = data.out)
            } catch (error) {
                console.error(error);
            }
        },
        show(test){
            console.log(test)
            alert('Enter')

        }
    },
}
</script>

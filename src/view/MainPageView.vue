<template lang="">
    <div class='activeCard'>
        Main Page 
        <div v-bind:style="{backgroundColor: redBox.backgroundColor}">123</div>
    </div>

</template>
<script>
export default {
    data() {
        return {
            redBox:{
                height: '40px',
                width: '40px',
                backgroundColor: 'Red',
            }
        }
    },

}
</script>
<style scoped>
.activeCard {
    background-color: bisque;
    color: yellow;
}

.redBox {
    width: 40px;
    height: 40px;
    background-color: red;
}
</style>
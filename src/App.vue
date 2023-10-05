<template>
  <div>
    NavBar
    <li>
      <router-link to="/">MainPage</router-link>
    </li>
    <li>
      <router-link :to="{name: 'FormPage'}">FormPage</router-link>
    </li>
    <li>
      <router-link to="/button">ButtonPage</router-link>
    </li>
    <li>
      <router-link to="/newPage">newPage</router-link>
    </li>
  </div>
  <RouterView />
  <!-- <div>
    <button @click="math(1)">+1</button>
    <button @click="math(-1)">-1</button>
  </div>
  <br />
  <button
  @click="countShow = !countShow"
  >Тык</button>
  <br />
  <div v-if="countShow">
    <button>{{ count }}</button>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      countShow: false,
    }
  },
  methods: {
    math(number){
      this.count = this.count + number

    }
  },
}
</script>
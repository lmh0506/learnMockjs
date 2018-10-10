<template>
  <div class="hello">
    <table v-if="data.length > 0">
      <tr v-for="item in data" :key="item.id">
        <td v-for="(val, key) in item" :key="key">
          <img v-if="key === 'image' || key === 'base64'" :src="val"/>

          <p v-else>{{key}}: {{val}}</p>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import {fetch, post} from '@/config/ajax'
export default {
  name: 'HelloWorld',
  data () {
    return {
      data: []
    }
  },
  methods: {
    async getData () {
      let data = await post('/test')
      this.data = data
    },
    async login () {
      let data = await fetch('/login', {
        params: {
          name: '111',
          password: '2222'
        }
      })
      console.log(data)
    }
  },
  mounted () {
    this.getData()
    this.login()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

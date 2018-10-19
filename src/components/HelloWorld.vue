<template>
  <div class="hello">
    <button @click="getData">getData</button>
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
import {get, post} from '@/config/ajax'
export default {
  name: 'HelloWorld',
  data () {
    return {
      data: []
    }
  },
  methods: {
    async getData () {
      try {
        let data = await post('/test')
        this.data = data
        console.log('post', data)
        console.log(1)
      } catch (e) {
        console.log('1', e)
      }
    },
    async login () {
      let data = await get('/login', {
        name: '111',
        password: '2222'
      })
      console.log(data)
    }
  },
  mounted () {
    this.getData()
    this.login()
    post('/test').then(data => {
      this.data = data
      console.log(2)
    }).catch(e => {
      console.log('2', e)
    })
    post('/test').then(data => {
      this.data = data
      console.log(3)
    }).catch(e => {
      console.log('3', e)
    })
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

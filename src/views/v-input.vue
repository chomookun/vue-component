<template>
  <h1>myObject</h1>
  <v-input type="text" v-model="myObject.name"/>
  <v-input type="number" v-model="myObject.age"/>
  <v-input type="checkbox" v-model="myObject.enabled"/>
  <v-select v-model="myObject.type"
    :options="types"
    option-value-property="code"
    option-text-property="name">
    <option value>type...</option>
  </v-select>
  <v-textarea v-model="myObject.memo"></v-textarea> 
  <ul>
    <li v-for="(item, index) in myObject.items">
      {{ item.name }}
      <v-input type="text" v-model="item.value"/>
    </li>
  </ul>
  <button @click="getMyObject()">getMyObject()</button>
  <h1>myArray</h1>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Enabled</th>
      </tr>
    </thead>
    <tbody v-for="(row, index) in myArray">
      <tr>
        <td><v-input v-model="row.name" type="text"/></td>
        <td><v-input v-model="row.age" type="number"/></td>
        <td><v-input v-model="row.enabled" type="checkbox"/></td>
      </tr>
    </tbody>
  </table>
  <button @click="getMyArray()">getMyArray()</button>
</template>

<script setup>
  import * as Vue from 'vue';
  import DataHandler from '../DataHandler.js';
  import VInput from '../components/VInput.vue';
  import VSelect from '../components/VSelect.vue';
  import VTextarea from '../components/VTextarea.vue';

  const myObject = Vue.reactive({
    name: 'Dog',
    age: 3,
    enabled: false,
    type: 'ANIMAL',
    memo: "I'm dog\n...",
    items: [
      {name: "itemName", value:"itemValue"}
    ] 
  });

  const myArray = Vue.reactive([
    { name: 'Apple', age: 12, enabled: true },
    { name: 'Orange', age: 18, enabled: false }
  ]);

  const types = Vue.reactive([
    { code: 'HUMAN', name: 'Human' },
    { code: 'ANIMAL', name: 'Animal' }
  ]);

  // for debug
  Vue.onMounted(() => {
    window.myObject = myObject;
    window.myArray = myArray;
  });

  function getMyObject() {
    DataHandler.assign(myObject, {name:'changed'});
    alert('ok');
  }

  function getMyArray() {
    DataHandler.assign(myArray, [
      { name: 'Apple1', age: 100 }
    ]);
  }
  
</script>

<style scoped>
</style>
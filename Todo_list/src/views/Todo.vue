<script setup>
</script>

<template>
  <title>To-Do List</title>
  <div id="app">
    <h1>To-Do List</h1>

    <input type="text" v-model="searchText" placeholder="Search" @input="filterTasks">

    <ul>
      <li v-for="(task, index) in filteredTasks" :key="index">
        {{ task }}
        <button @click="editTask(index)">Edit</button>
        <button @click="deleteTask(index)">Delete</button>
      </li>
    </ul>

    <input type="text" v-model="newTask" placeholder="Add New Task" />
    <button @click="addTask">Add</button>
  </div>
</template>

<style scoped>

#app {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
}

input[type="text"],
button {
  display: block;
  margin-bottom: 10px;
}
</style>

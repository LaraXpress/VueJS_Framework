<template>
    <div>
        <h1>{{logo}}</h1>
    </div>
</template>

<script>
export default {
   data() {
     return {
       title: 'This is Header Section',
     };
   },
   props:['logo']
}
</script>

<style scoped>
  div {
    color:red;
  }
</style>
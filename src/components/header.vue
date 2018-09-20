<template>
    <div class="header">
      <p>{{title}}</p>
    </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
    }
  },
  props: ['title']
}
</script>

<style scoped>
.header{
  height: 40px;
  width: 100%;
  vertical-align: center;
}
</style>

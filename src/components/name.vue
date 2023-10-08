<template>
<span class="nameT">
  {{val}}
  <span class="valT">
    {{num}}
  </span>
  ,
</span>
</template>

<script>
export default {
  name: "name",
  props:{
    val: String,
    num: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.valT{
  position: relative;
  top: -4px;
  left: 1px;
  font-weight: 500;
  font-size: 1rem;
}
.nameT{
  font-weight: 700;
  font-size: 1.1rem;
}
</style>

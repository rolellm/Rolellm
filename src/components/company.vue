<template>
<span class="nameT">
  <span class="valT">
    {{num}}
  </span>
  {{val}}
  ;
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
  left: 3px;
  /*font-weight: 500;*/
  /*font-size: 1rem;*/
}
.nameT{
  font-weight: 500;
  font-size: 0.9rem;
}
</style>

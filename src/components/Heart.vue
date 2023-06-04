<script>

</script>

<template>
    <label class="checkbox-container">
        <input type="checkbox">
        <span class="heart">❤</span>
    </label>
</template>

<style scoped>
.checkbox-container{
    display: block;
    height: 25px;
    width: 25px;
    position: relative;
    cursor: pointer;
    text-align: center;
    font-size: 25px;
}
.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  border: 0px;
  padding: 0;
  margin: 0;
}
.heart{
    position: absolute;
    left: 0px;
    top: -9px;
    color: #ABABAB;
    user-select: none;
}
.checkbox-container input:checked ~ .heart{
    color: #df470b;
}
</style>
<template>
  <div class="suveng" style="height: 100% ; width: 100%">
    <iframe src="https://suveng.github.io/blog/about.me.html" onload="changeFrameHeight()" frameborder="0" scrolling="no" style="height: 100%;width: 100%"/>
  </div>
</template>
<script>
export default {
  name: 'Home'
}
function changeFrameHeight() {
  var ifm = document.getElementById('iframepage')
  ifm.height = document.documentElement.clientHeight
}
window.onresize = function() {
  changeFrameHeight()
}
</script>

<style scoped>
.suveng{
  width: 100%;
  height: 100%;
}
</style>

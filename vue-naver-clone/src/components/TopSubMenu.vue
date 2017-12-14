<template>
  <div id="top-sub-menu-components">
    <div>네이버를 시작페이지로</div>
    <div>쥬니어네이버</div>
    <div>해피빈</div>
  </div>
</template>

<script>
export default {
  name: "top-sub-menu-components",
  data() {
    return {};
  }
};
</script>

<style>
#top-sub-menu-components {
  position: absolute;
  display: flex;
  top: 10px;
  right: 10px;
  background-color: red;
}

#top-sub-menu-components div {
  padding: 0 10px;
}
</style>

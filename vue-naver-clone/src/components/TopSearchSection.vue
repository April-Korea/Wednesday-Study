<template>
  <div id="top-search-components">
    <TopSubMenu />
  </div>
</template>

<script>
import TopSubMenu from "@/components/TopSubMenu";
export default {
  name: "top-search-components",
  data() {
    return {};
  },
  components: {
    TopSubMenu
  }
};
</script>

<style>
#top-search-components {
  position: relative;
  flex: 1;
  width: 1080px;
  margin: 0 auto;
  background-color: #fff;
}
</style>

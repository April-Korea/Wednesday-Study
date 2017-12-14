<template>
  <div id="top-components">
    <TopSearchSection />
    <TopMenu />
  </div>
</template>

<script>
import TopMenu from "@/components/TopMenu";
import TopSearchSection from "@/components/TopSearchSection";
export default {
  name: "top-components",
  data() {
    return {};
  },
  components: {
    TopMenu,
    TopSearchSection
  }
};
</script>

<style>
#top-components {
  display: flex;
  flex-direction: column;
  flex-basis: 218px;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #d1d8e4;
}
</style>

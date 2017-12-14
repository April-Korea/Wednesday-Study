<template>
  <div id="main-view">
    <TopComponents />
    <ContentComponents>
      <div>hahahaha</div>
    </ContentComponents>
    <FooterComponents />
  </div>
</template>

<script>
import TopComponents from "@/components/Top";
import ContentComponents from "@/components/Content";
import FooterComponents from "@/components/Footer";
export default {
  name: "main-view",
  data() {
    return {};
  },
  components: {
    TopComponents,
    ContentComponents,
    FooterComponents
  }
};
</script>

<style>
#main-view {
  display: flex;
  flex-direction: column;
  height: 100%;
}
#main-view div.test {
  flex: 1;
}
</style>

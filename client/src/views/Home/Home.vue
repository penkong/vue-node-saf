/* eslint-disable */
<template>
  <div class="home">
    <TopCardHome style="margin-top: 3rem;" />
    <div class="card-container">
      <Card>
        <img src alt />
      </Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TopCardHome from "./UI/TopCardHome";
import Card from "../../components/Card/Card";

export default {
  name: "Home",
  components: {
    TopCardHome,
    Card
  }
};
</script>

<style scoped lang="scss">
@import "../../sass/abstract/mixins";
@import "../../sass/pages/Home";
</style>
/* eslint-disable */
<template>
  <div class="home">
    <TopCardHome style="margin-top: 3rem;" />
    <div class="card-container">
      <Card>
        <img src="@/assets/safa-logo.gif" alt="safa-logo" />
      </Card>
      <Card>
        <img src="@/assets/safa-en-1.jpg" alt="safa-1" />
      </Card>
      <Card>
        <img src="@/assets/safa-en-2.jpg" alt="safa-2" />
      </Card>
      <Card>
        <img src="@/assets/safa-en-3.jpg" alt="safa-3" />
      </Card>
      <Card>
        <img src="@/assets/safa-archive-1.jpg" alt="safa-archive" />
      </Card>
      <Card>
        <img src="@/assets/safa-logo.gif" alt="safa-logo" />
      </Card>
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
.card-container {
  img {
    text-align: center;
    margin: 0.5rem auto 2rem;
    border-radius: 4px;
    overflow: hidden;
    min-height: 220px;
  }
}
</style>
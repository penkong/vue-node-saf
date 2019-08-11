<template>
  <section class="big-card">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "BigCard"
};
</script>


<style scoped lang="scss">
@import "../../sass/abstract/mixins";
@import "BigCard";
</style>
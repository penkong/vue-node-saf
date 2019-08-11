<template>
  <div class="top-card-home">
    <BigCard class="card">
      <h1>
        Welcome to
        <span>SAFA RAYANEH</span>
      </h1>
      <h3>Electronic Citizen Services</h3>
      <img src="@/assets/safa.jpg" alt="safa" />
    </BigCard>
  </div>
</template>

<script>
import BigCard from "@/components/BigCard/BigCard";
export default {
  name: "TopCardHome",
  components: {
    BigCard
  },
  filters: {
    uppercase: function(v) {
      return v.toUpperCase();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../sass/abstract/mixins";
.top-card-home {
  .card {
    h1 {
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        letter-spacing: 4px;
        margin-left: 2rem;
        font-size: 3rem;
        @include respond(tab-land) {
          display: block;
          letter-spacing: 2px;
          margin-left: 0;
        }
      }
      width: 70%;
      padding: 0 0.5rem;
      margin: 0.5rem auto 0.75rem;
      font-size: 2rem;
      font-weight: 200;
      text-align: center;
      color: #025555;
      transition: all 0.9s ease-in-out;

      &:hover {
        transform: t;
        background-color: #008585;
        color: white;
      }

      @include respond(tab-land) {
        display: block;
      }
      @include respond(phone) {
        width: 90%;
      }
    }
    h3 {
      display: inline-block;
      word-spacing: 5px;
      letter-spacing: 2px;
      width: 40%;
      font-size: 1.5rem;
      border: 1px solid #008585;
      border-radius: 3px;
      padding: 0.75rem;
      margin: 0 auto 1rem;
      @include respond(tab-land) {
        word-spacing: 1px;
        letter-spacing: 1px;
        display: block;
        width: 50%;
      }
      @include respond(phone) {
        width: 90%;
      }
    }

    img {
      margin: 0.5rem auto 2rem;
      border-radius: 4px;
      overflow: hidden;
    }
  }
}
</style>
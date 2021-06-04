<template lang='pug'>
.main
  .main__button(@click="openModal") Налоговый вычет
</template>

<script>
import Modal from "../Modal/Modal";
export default {
  methods: {
    openModal() {
      this.$modal.show(
        Modal,
        {},
        { width: "453", scrollable: true, adaptive: true, height: "auto" }
      );
    },
  },
};
</script>

<style lang='scss' src='./main.scss'></style>
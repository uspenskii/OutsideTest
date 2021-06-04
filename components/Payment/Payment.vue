<template lang='pug'>
label.payment
  input.payment__input(type="checkbox")
  span.payment__label {{ title }} рублей <i> в {{ index }}-ый год </i>
</template>

<script>
export default {
  props: ["title", "index"],
};
</script>

<style lang='scss' src='./payment.scss'></style>
<template lang='pug'>
.modal 
  .modal__area 
    .modal__form      
      .modal__content
        h2.modal__headline Налоговый вычет
        p.modal__description Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13% от своего официального годового дохода.
        .modal__container
          span.modal__title Размер вашего кредита
          input(
            v-model.trim="priceHome",
            placeholder="Введите данные",
            v-currency="options"
          )
        .modal__container
          span.modal__title Ваша зарплата в месяц
          input(
            v-model.trim="price",
            placeholder="Введите данные",
            v-currency="options"
          )
        p.modal__calculate Рассчитать
        transition(name="fade")
          .modal__result(v-if="result")
            span.modal__title Итого можете внести в качестве досрочных:
            .modal__price(v-for="(item, index) in deduction", :key="index")
              Payment(:title="item", :index="index + 1")
        .modal__variants
          span.modal__title Что уменьшаем?
          .modal__buttons
            button.modal__option.active Платеж
            button.modal__option Срок
        button.modal__button(@click="calculate") Добавить
    button.modal__close(@click="$emit('close')")
</template>

<script>
import { parse } from "vue-currency-input";
export default {
  data() {
    return {
      price: null,
      success: false,
      result: false,
      deduction: [],
      maxSum: 0,
      priceHome: null,
      sum: 0,
      percent: 0,
    };
  },
  methods: {
    calculate() {
      this.result = true;
      this.deduction = [];
      this.maxSum = 0;
      this.sum = 0;

      this.percent = this.formatPrice * 12 * 0.13;
      if (this.formatPriceHome > 2000000) {
        this.sum = 260000;
      } else {
        this.sum = this.formatPriceHome * 0.13;
      }

      for (let i = 0; this.maxSum != this.sum; i++) {
        if (this.percent + this.maxSum > this.sum) {
          this.percent = this.sum - this.maxSum;
        }
        this.maxSum += this.percent;
        if (this.percent != 0) {
          this.deduction.push(this.percent.toFixed(2));
        }
      }
    },
  },
  computed: {
    options() {
      return {
        distractionFree: false,
        valueAsInteger: true,
        autoDecimalMode: true,
        precision: 0,
        currency: null,
      };
    },
    formatPrice() {
      return parse(this.price, this.options);
    },
    formatPriceHome() {
      return parse(this.priceHome, this.options);
    },
  },
};
</script>

<style lang='scss' src='./modal.scss'>
</style>
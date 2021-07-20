<template>
  <div class="spli-tter">
    <div class="spli-tter__container">
      <div class="spli-tter__container__title">
        <span>spli</span>
        <span>tter</span>
      </div>

      <div class="spli-tter__container__check">
        <div class="bill">
          <div class="bill__title">
            <label class="title">Bill</label>
            <div>
              <img src="@/assets/tip-calculator-app/icon-dollar.svg" alt="" />
              <input
                type="number"
                name=""
                id=""
                placeholder="0"
                v-model="billTotal"
              />
            </div>
          </div>
          <div class="bill__select-tip">
            <label class="title">Select Tip %</label>
            <div>
              <button @click="fivePercent()">5%</button>
              <button @click="tenPercent()">10%</button>
              <button @click="fifteenPercent()">15%</button>
              <button @click="twentyfivePercent()">25%</button>
              <button @click="fifty()">50%</button>
              <button class="disable-button">custom</button>
            </div>
          </div>
          <div class="bill__number-people">
            <label class="title">Number of People</label>
            <div>
              <img src="@/assets/tip-calculator-app/icon-person.svg" alt="" />
              <input
                type="number"
                name=""
                id=""
                placeholder="0"
                v-model="totalPeople"
              />
            </div>
          </div>
        </div>

        <div class="tip">
          <div class="tip__amount">
            <span class="tip__amount__title">Tip Amount</span>
            <span class="tip__amount__person">/ person</span>
            <span class="tip__amount__price"> {{ percentTotal }} </span>
          </div>
          <div class="tip__total">
            <span class="tip__total__title">Total</span>
            <span class="tip__total__person">/ person</span>
            <span class="tip__total__price"
              >{{ calculateTotalPerPerson }}
            </span>
          </div>
          <button class="tip__reset">reset</button>
        </div>
      </div>
    </div>

    <px-attribution></px-attribution>
  </div>
</template>

<script>
import PxAttribution from "@/components/PxAttribution.vue";

export default {
  name: "tip-calculator-app",
  components: {
    PxAttribution,
  },
  data() {
    return {
      billTotal: null,
      totalPeople: null,
      percent: null,
    };
  },
  computed: {
    calculateTotalPerPerson() {
      let dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });
      if (
        this.billTotal != (null || "") &&
        this.totalPeople != (null || "") &&
        this.billTotal > 0 &&
        this.totalPeople > 0 &&
        this.percent != (null || "")
      ) {
        return dollarUS.format(
          this.billTotal / this.totalPeople + this.percent / this.totalPeople
        );
      } else {
        return "$0.00";
      }
    },
    percentTotal() {
      let dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });

      if (
        this.billTotal != (null || "") &&
        this.totalPeople != (null || "") &&
        this.billTotal > 0 &&
        this.totalPeople > 0
      ) {
        return dollarUS.format(this.percent / this.totalPeople);
      } else {
        return "$0.00";
      }
    },
  },
  methods: {
    fivePercent() {
      this.percent = this.billTotal * 0.05;
    },
    tenPercent() {
      this.percent = this.billTotal * 0.1;
    },
    fifteenPercent() {
      this.percent = this.billTotal * 0.15;
    },
    twentyfivePercent() {
      this.percent = this.billTotal * 0.2;
    },
    fifty() {
      this.percent = this.billTotal * 0.5;
    },
  },
};
</script>

<style lang="scss">
.spli-tter {
  background: hsl(185, 41%, 84%);
  height: 100vh;
  font-family: "Space Mono", monospace;

  &__container {
    text-align: center;
    padding: 2rem;
    box-sizing: border-box;

    &__title {
      display: grid;
      padding: 2rem;
      text-transform: uppercase;
      font-size: 1.2rem;
      color: hsl(186, 14%, 43%);
      letter-spacing: 0.4em;
      font-weight: bold;
    }

    &__check {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 2rem;
      background: hsl(0, 0%, 100%);
      padding: 2rem;
      border-radius: 1.5rem;

      .bill {
        display: grid;
        grid-row-gap: 2rem;

        &__title,
        &__select-tip,
        &__number-people {
          display: grid;
          grid-row-gap: 0.5rem;
          font-size: 1rem;

          label {
            text-align: left;
          }

          input {
            text-align: right;
            padding: 0.5rem 1rem;
            font-size: 1.3rem;
            font-weight: bold;
            color: hsl(183, 100%, 15%);
            border: none;
            background: no-repeat left hsl(189, 41%, 97%);
            border-radius: 0.5rem;
          }

          input[type="number"]::-webkit-inner-spin-button,
          input[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
          }
        }

        &__title,
        &__number-people {
          div {
            img {
              position: absolute;
              padding: 10px;
            }
            input {
              width: 95%;
            }
          }
        }

        &__select-tip {
          div {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-column-gap: 1rem;
            grid-row-gap: 1rem;
            font-size: 1.5rem;

            button {
              color: hsl(0, 0%, 100%);
              border-radius: 0.3rem;
              padding: 0.5rem;
              background: hsl(183, 100%, 15%);
              border: none;
              font-weight: 600;
              cursor: pointer;
            }
          }
        }

        &__number-people {
        }
      }

      .title {
        color: hsl(186, 14%, 43%);
        font-weight: bold;
      }

      .tip {
        background: hsl(183, 100%, 15%);
        border-radius: 1rem;
        padding: 2rem;

        &__amount,
        &__total {
          display: grid;
          text-align: left;
          grid-template-areas: "title title price" "person person price";
          font-weight: bold;
          padding-bottom: 10%;

          &__title {
            grid-area: title;
            color: hsl(0, 0%, 100%);
          }

          &__person {
            grid-area: person;
            color: hsl(184, 14%, 56%);
          }

          &__price {
            grid-area: price;
            font-size: 2.5rem;
            text-align: right;
            color: hsl(172, 67%, 45%);
          }
        }

        &__reset {
          width: 100%;
          border: none;
          padding: 0.5rem;
          text-transform: uppercase;
          font-weight: bold;
          border-radius: 0.3rem;
          opacity: 0.2;
          position: relative;
          top: 50px;
        }
      }
    }

    // @media (min-width:320px)  { /* smartphones, iPhone, portrait 480x320 phones */ }
    // @media (min-width:481px)  { /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ }
    // @media (min-width:641px)  { /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ }
    // @media (min-width:961px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
    // @media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
    // @media (min-width:1281px) { /* hi-res laptops and desktops */ }
  }

  // - Very dark cyan: hsl(183, 100%, 15%)
  // - Dark grayish cyan: hsl(186, 14%, 43%)
  // - Dark grayish cyan: hsl(184, 14%, 56%)
  // - Light grayish cyan: hsl(185, 41%, 84%)
  // - Light grayish cyan: hsl(189, 41%, 97%)
  // - White: hsl(0, 0%, 100%)

  // ### Body Copy

  // - Font size (form inputs): 24px

  // - Weights: 400, 500, 700
}

@media only screen and (max-width: 800px) and (min-width: 0px) {
  .spli-tter {
    &__container {
      padding: 0rem;
      &__title {
        padding-bottom: 5rem;
      }
      &__check {
        grid-template-columns: 1fr;
        grid-row-gap: 2rem;

        .tip {
          &__reset {
            top: 0px;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 35000px) and (min-width: 1010px) {
  .spli-tter {
    text-align: center;
    &__container {
      width: 1100px;
      margin: 0 auto;
      &__title {
      }
      &__check {
        .tip {
          &__reset {
            top: 0px;
          }
        }
      }
    }
  }
}
</style>

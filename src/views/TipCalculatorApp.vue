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
                    <div class="gg">
                        <img src="@/assets/tip-calculator-app/icon-dollar.svg" alt="">
                        <input type="number" name="" id="" placeholder="0">      
                    </div>             
                </div>
                <div class="bill__select-tip">
                    <label class="title">Select Tip %</label>
                    <div>
                        <button>5%</button>
                        <button>10%</button>
                        <button>15%</button>
                        <button>25%</button>
                        <button>50%</button>
                        <button>custom</button>
                    </div>
                </div>
                <div class="bill__number-people">
                    <label class="title">Number of People</label>
                    <input type="number" name="" id="" placeholder="0">
                </div>
            </div>

            <div class="tip">
                <div>
                    <span>Tip Amount</span>
                    <span>/ person</span>
                    <span>$0.00</span>
                </div>
                <div>
                    <span>Total</span>
                    <span>/ person</span>
                    <span>$0.00</span>
                </div>
                <button>reset</button>
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
    }
}
</script>

<style lang="scss">
.spli-tter {
    background: hsl(185, 41%, 84%);
    height: 100vh;
    font-family: 'Space Mono', monospace;

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

                &__title, &__select-tip, &__number-people {
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

                    

                    input[type=number]::-webkit-inner-spin-button, 
                    input[type=number]::-webkit-outer-spin-button { 
                        -webkit-appearance: none;
                    }


                }

                &__title {
                    div {
                        img {
                            position:absolute;
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
                        }
                    }

                }

                &__number-people{ 

                }
            }
            .title {
                color: hsl(186, 14%, 43%);
                font-weight: bold;
            }

            .tip {
                background: hsl(183, 100%, 15%);
                border-radius: 1rem;
            }
        }
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
</style>



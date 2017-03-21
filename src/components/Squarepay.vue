
<script>
export default {
    data: function() {
        return {
            name: "PAY ME"
        }
    },
    computed : {
        href() {
            return `intent:#Intent;action=com.squareup.register.action.CHARGE;package=com.squareup;S.browser_fallback_url=https://square.stage.ensemble.agency;S.com.squareup.register.WEB_CALLBACK_URI=https://square.stage.ensemble.agency;S.com.squareup.register.CLIENT_ID=${ this.client };S.com.squareup.register.API_VERSION=v1.3;i.com.squareup.register.TOTAL_AMOUNT=${ this.amount };S.com.squareup.register.CURRENCY_CODE=${ this.currency };S.com.squareup.register.TENDER_TYPES=com.squareup.register.TENDER_CARD,com.squareup.register.TENDER_CARD_ON_FILE,com.squareup.register.TENDER_CASH,com.squareup.register.TENDER_OTHER;end`
        }
    },
    props: {
        client: 1234567890,
        currency: "AUD",
        amount: 0 // amount for transaction
    },
    methods : {
        txnSent() {
            alert('the transaction was sent');
        }
    }
}
</script>

<template>
    <div class="button-wrapper">
        <a :client="client" :currency="currency" :amount="amount" :href="href"><button @click="txnSent()" type="button" name="button">{{ name }}</button></a>

        <!-- html for results -->
        <!-- <transition name="fade">
            <div v-if="amount > 0" class="results">
                 Paid {{ amount }} {{ currency }} to {{ client }}
            </div>
        </transition> -->
    </div>
</template>

<style lang="sass" scoped>
    .button-wrapper {
        position: relative;
        border: 2px solid black;
        min-height: 150px;
        width: 100%;
        button {
            padding: 8px 25px;
            color: #333;
            border: 2px solid #333;
            border-radius: 3px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        .fade-enter-active, .fade-leave-active {
            transition: opacity 0.8s;
        }
        .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
            opacity: 0
        }
    }
</style>

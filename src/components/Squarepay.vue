
<script>
export default {
    data: function() {
        return {
            name: "PAY ME"
        }
    },
    props: {
        client: 1234567890,
        currency: "AUD",
        amount: 0 // amount for transaction
    },
    methods: {
        startTxn(client, currency, amount) {
            this.client = client;
            this.currency = currency || "USD";
            this.amount = amount;
            alert("order placed successfully!");
        }
    }
}
</script>

<template>
    <div class="button-wrapper">
        <a :client="client" :currency="currency" :amount="amount" href="#"><button @click.once="startTxn(1234561111, currenci, 50)" type="button" name="button">{{ name }}</button></a>
        <transition name="fade">
            <div v-if="amount > 0" class="results">
                 Paid {{ amount }} {{ currency }} to {{ client }}
            </div>
        </transition>
    </div>
</template>

<style lang="sass" scoped>
    .button-wrapper {
        position: relative;
        padding: 10px;
        border: 3px solid black;
        height: 200px;
        width: 100%;
        button {
            margin: 10px;
            padding: 5px 20px;
            border: 1px solid red;
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

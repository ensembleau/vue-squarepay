<script>
export default {
    computed : {
        href() {
            const data = {
                'action': 'com.squareup.register.action.CHARGE',
                'package': 'com.squareup',
                'S.browser_fallback_url': this.callbackUrl,
                'S.com.squareup.register.WEB_CALLBACK_URI': this.callbackUrl,
                'S.com.squareup.register.CLIENT_ID': this.client,
                'S.com.squareup.register.API_VERSION': 'v1.3',
                'i.com.squareup.register.TOTAL_AMOUNT': this.amount,
                'S.com.squareup.register.CURRENCY_CODE': this.currency,
                'S.com.squareup.register.TENDER_TYPES': [
                    'com.squareup.register.TENDER_CARD',
                    'com.squareup.register.TENDER_CARD_ON_FILE',
                    'com.squareup.register.TENDER_CASH',
                    'com.squareup.register.TENDER_OTHER'
                ]
            };

            let href = '';

            for (let prop in data) {
            	href += prop + '=';

            	if (Array.isArray(data[prop])) href += data[prop].join(',');
              else href += data[prop];

              href += ';'
            }
            // test for correct concatenation
            // console.log("intent:#Intent;" + href + "end");
            return "intent:#Intent;" + href + "end";
        }
    },
    props: {
        client: {
            type: [String, Number],
            default: 1234567890 // CLIENT_ID.
        },
        currency: {
            type: String,
            default: 'AUD' // Currency to use in transaction.
        },
        amount: {
            type: Number,
            default:  0 // Amount in cents eg. 100 = $1.
        },
        callbackUrl: {
            type: String,
            default: 'https://square.stage.ensemble.agency' // Fallback URL
        },
    },
}
</script>

<template>
    <div class="button-wrapper">
        <a class="square-pay-button" :href="href"><slot></slot></a>
    </div>
</template>

<style lang="sass" scoped>
    .button-wrapper {
        position: relative;
        border: 1px solid #ccc;
        min-height: 150px;
        min-width: 250px;
        width: 100%;
        .square-pay-button {
            text-decoration: none;
            padding: 10px 25px;
            color: #333;
            border: 1px solid #444;
            border-radius: 3px;
            position: absolute;
            top: 50%;
            left: 50%;
            transition: all .2s ease-in-out;
            transform: translate(-50%, -50%);
            &:hover {
                background: #555;
                color: #f9f9f9;
                border: 1px solid transparent;
                filter: drop-shadow(0px 2px 1px rgba(0,0,0,.4));
            }
        }
        .fade-enter-active, .fade-leave-active {
            transition: opacity 0.8s;
        }
        .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
            opacity: 0
        }
    }
</style>

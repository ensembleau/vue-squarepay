# vue-squarepay

A Vue component that wraps the Web API functionality of Square to accept payments.

## Install:

```
$ npm install --save vue-squarepay
```
## Usage:

This component takes the query parameters to initiate a payment with the [Squarepay WebAPI](https://docs.connect.squareup.com/). The main settings are easily configurable with props : <code>client</code>, <code>currency</code>, <code>amount</code>, <code>callbackUrl</code> - see table below for full usage breakdown.

## Params/Props:

<table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Description</th>
			<th>Prop</th>
            <th>Type</th>
            <th>Required</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>action</code></td>
			<td>This must be <code>com.squareup.register.action.CHARGE</code>. This represents a Square transaction request.</td>
			<td>No</td>
            <td>N/A</td>
            <td>Yes</td>
		</tr>
		<tr>
            <td><code>S.com.squareup.register.WEB_CALLBACK_URI</code></td>
            <td>The callback URI that Square Register will use to send a response.</td>
            <td>Yes - <code>callbackUrl</code></td>
            <td>String</td>
            <td>Yes</td>
		</tr>
        <tr>
            <td><code>S.com.squareup.register.CLIENT_ID</code></td>
            <td>Your client ID</td>
            <td>Yes - <code>client</code></td>
            <td><code>String, Number</code></td>
            <td>Yes</td>
        </tr>
        <tr>
            <td><code>S.com.squareup.register.API_VERSION</code></td>
            <td>The targeted version of the Square Register API, e.g., v1.3</td>
            <td>No</td>
            <td>N/A</td>
            <td>Yes</td>
        </tr>
        <tr>
            <td><code>S.com.squareup.register.CURRENCY_CODE</code></td>
            <td>The currency code, e.g., USD</td>
            <td>Yes - <code>currency</code></td>
            <td><code>String</code></td>
            <td>Yes</td>
        </tr>
        <tr>
            <td><code>i.com.squareup.register.TOTAL_AMOUNT</code></td>
            <td>The total amount represented in the smallest unit of the supplied currency, e.g., a value of 100 corresponds to $1.00 USD</td>
            <td>Yes - <code>amount</code></td>
            <td><code>Number</code></td>
            <td>Yes</td>
        </tr>
        <tr>
            <td><code>S.com.squareup.register.TENDER_TYPES</code></td>
            <td>Provides the tender types that will be allowed and displayed by Square Register. Must be a non-empty comma-delimited set of the following 4 rows</td>
            <td>No</td>
            <td>N/A</td>
            <td>Yes</td>
        </tr>
        <tr>
            <td><code>com.squareup.register.TENDER_CARD</code></td>
            <td>See Above</td>
            <td>No</td>
            <td>N/A</td>
            <td>Yes</td>
        </tr>
        <tr>
            <td><code>com.squareup.register.TENDER_CARD_ON_FILE</code></td>
            <td>See Above</td>
            <td>No</td>
            <td>N/A</td>
            <td>Yes</td>
        </tr>
        <tr>
            <td><code>com.squareup.register.TENDER_CASH</code></td>
            <td>See Above</td>
            <td>No</td>
            <td>N/A</td>
            <td>Yes</td>
        </tr>
        <tr>
            <td><code>com.squareup.register.TENDER_OTHER</code></td>
            <td>See Above</td>
            <td>No</td>
            <td>N/A</td>
            <td>Yes</td>
        </tr>
        <tr>
            <td><code>package</code></td>
            <td>If set, this must be 'com.squareup'. Identifies the package name of the application responding to this intent.</td>
            <td>No</td>
            <td>N/A</td>
            <td>Recommended</td>
        </tr>
        <tr>
            <td><code>S.com.squareup.register.CURRENCY_CODE</code></td>
            <td>If Register is not installed, Android will route to this supplied url; If missing, Android will route to Play Store if package parameter is provided.</td>
            <td>Yes - <code>callbackUrl</code></td>
            <td><code>String</code></td>
            <td>No</td>
        </tr>
        <tr>
            <td><code>S.com.squareup.register.NOTE</code></td>
            <td>A note to add to your transaction if completed successfully.</td>
            <td>No</td>
            <td>N/A</td>
            <td>No</td>
        </tr>
        <tr>
            <td><code>S.com.squareup.register.REQUEST_METADATA</code></td>
            <td>The state parameter that is returned in the response for the developer's use.</td>
            <td>No</td>
            <td>N/A</td>
            <td>No</td>
        </tr>
	</tbody>
</table>


## Example:

Here is an example application containing the `squarepay` component:

JavaScript:

```
import Vue from 'vue';
import Squarepay from 'vue-squarepay';

new Vue({
	el: '#app',
	store,
	components: { Squarepay },
});

```

Markup:

```
<squarepay :callbackUrl="callbackUrl" :client="client" :currency="currency" :amount="amount"></squarepay>

```


###### more updates planned to come shortly..

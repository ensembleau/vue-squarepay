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
			<td>Provides the tender types that will be allowed and displayed by Square Register. Must be a non-empty comma-delimited set of the following:</td>
			<td>N/A - see below</td>
			<td>N/A</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td><code>com.squareup.register.TENDER_CARD</code></td>
			<td>see above</td>
			<td><code>card</code></td>
			<td>String</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td><code>com.squareup.register.TENDER_CARD_ON_FILE</code></td>
			<td>see above</td>
			<td><code>cardOnFile</code></td>
			<td>String</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td><code>com.squareup.register.TENDER_CASH</code></td>
			<td>see above</td>
			<td><code>cash</code></td>
			<td>String</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td><code>com.squareup.register.TENDER_OTHER</code></td>
			<td>see above</td>
			<td><code>other</code></td>
			<td>String</td>
			<td>Yes</td>
		</tr>
	</tbody>

</table>
<br>


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
<squarepay :callbackUrl="callbackUrl" :client="client" :currency="currency" :amount="amount" :tenderTypes="['card', 'cardOnFile', 'cash', 'other']"></squarepay>

```

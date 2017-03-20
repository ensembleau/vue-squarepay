<script>
	export default {
		computed: {
			message() {
				// Get message from global Vuex store.
				return this.$store.state.message;
			}
		}
	}
</script>

<template>
	<p>{{ message }}</p>
</template>

<style lang="sass" scoped>
	p {
		color: red;
		font-weight: bold;
		background: #EEE;
		border-radius: 2px;
		padding: 10px 12px;
	}
</style>

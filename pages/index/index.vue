<template>
	<view class="container">
		<view>Hello Uni</view>
		<text class="intro">详见：</text>
		<uni-link :href="href" :text="href"></uni-link>
	</view>
</template>

<script setup>
import { ref } from 'vue'
const href = ref('https://www.baidu.com')
</script>

<style>
.container {
	padding: 20px;
	font-size: 14px;
	line-height: 24px;
}
</style>

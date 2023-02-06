<template>
	<view class="search">
		<view class="search-box">
			<u-search placeholder="日照香炉生紫烟" v-model="searchValue"></u-search>
		</view>

		<!-- 搜索历史 -->
		<view v-if="historyList.length" class="history-box">
			<view class="history-title">
				<text>搜索历史</text>
				<u-icon name="trash" size="32"></u-icon>
			</view>
			<view class="history-list">
				<!-- <uni-tag text="标签"></uni-tag> -->
				<uni-tag :text="item" v-for="(item, i) in historyList" :key="i"></uni-tag>
			</view>
		</view>
		
		<view class="history-box">
			<view class="history-title">
				<text>热门推荐</text>
			</view>
			<view class="history-list">
				<uni-tag :text="item" v-for="(item, i) in hotList" :key="i"></uni-tag>
			</view>
		</view>
	</view>
</template>

<script>
import { HotRecommend } from './hot-recommend'
export default {
  data () {
    return {
      searchValue: '',
      historyList: ['前端', 'vue', 'node', 'nest', 'react'],
      hotList: []
    }
  },
  created () {
    this.hotList = HotRecommend
  }
}
</script>

<style lang="scss" scoped>
.search {
	padding: 24rpx;
}
.history-box {
	padding: 0 10rpx 50rpx;
	.history-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 40px;
		font-size: 16px;
		font-weight: bold;
	}
	.history-list {
		display: flex;
		flex-wrap: wrap;
		
		::v-deep uni-tag {
			margin-top: 5px;
			margin-right: 5px;
			border-radius: 25rpx;
			text {
				display: inline-block;
				border-radius: 25rpx;
				// background-color: #ccc;
				// border-color: #ccc;
			}
		}
	}
}
</style>

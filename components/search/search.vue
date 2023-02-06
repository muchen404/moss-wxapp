<template>
	<view class="search" :style="{'padding-top': barHeight + 'px'}"
		@click="$emit('click')"
	>
		<!-- <u-search placeholder="日照香炉生紫烟" v-model="keyword"></u-search> -->
		<view class="search-bxo" >
			<u-icon name="search" color="#ccc" size="28" class="icon"></u-icon>
			<text>搜索社区内容</text>
		</view>
	</view>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      barHeight: 0
    }
  },

  beforeMount () {
    this.getNativeBarHeight()
  },

  methods: {
    getNativeBarHeight () {
      uni.getSystemInfo({
        success: (result) => {
          const isiOS = result.system.indexOf('iOS') > -1
          const statusBarHeight = result.statusBarHeight
          this.barHeight = isiOS ? statusBarHeight + 5 : statusBarHeight + 7
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
	position: relative;
	width: 100vw;
	background-color: #ffffff;
	padding: 0 32rpx 12rpx;
	z-index: 999;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	color: #ccc;
	.search-bxo {
		@media screen and (max-width: 320px) {
			width: 50%;
		}
		position: relative;
		width: 70%;
		background: #f3f3f3;
		border-radius: 32rpx;
		height: 64rpx;
		line-height: 64rpx;
		columns: #ccc;
		font-size: 26rpx;
		padding-left: 74rpx;
	}
	.icon {
		position: absolute;
		left: 32rpx;
		top: 19rpx;
	}
}
</style>

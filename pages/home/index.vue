<template>
  <view class="home">
		<view class="fixed-top">
			<search @click="handle()"></search>
			<u-tabs name="value" :list="tabList" :is-scroll="true" :current="current" @change="change" gutter="50" height="88" active-color="#02D199"></u-tabs>
		</view>

		<view class="content" :style="{'padding-top': offsetTop + 'px'}">
			<view class="wrapper">

				<view class="list-item">
					<!-- 首页的列表 -->

					<view class="list-head">
						<!-- 标题部分 -->
						<text class="type">首页</text>
						<text class="title">我们是冠军</text>
					</view>

					<!-- 用户部分 -->
					<view class="author u-flex u-m-b-18">
						<u-image class="head" width="40" height="40" shape="circle" error-icon="/static/images/header.png"></u-image>
						<text class="name u-m-l-10">tomic用户</text>
					</view>

					<!-- 摘要部分 + 右侧图片 -->
					<view class="list-body u-m-b-30 u-flex u-col-top">
						<view class="info u-m-r-20">我是Arco，我在这里等你我是Arco，我在这里等你我是Arco，我在这里等你我是Arco，我在这里等你我是Arco，我在这里等你</view>
						<image
							class="fmt"
							src="https://ts1.cn.mm.bing.net/th/id/R-C.c12e31cf68a13ce3dcd2ea7688dd79a4?rik=NMAGNN9QCn7rJQ&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f95%2f4795.jpg&ehk=Ah%2f%2bgRzXGPl8bOxV5Uqe0zk2uRLYg4Ee%2bEZQSD1ak48%3d&risl=&pid=ImgRaw&r=0"
							mode="aspectFill"
							></image>
					</view>
					<!-- 回复 + 文章发表时间 -->
					<view class="list-footer u-flex">
						<view class="left">
							<text class="reply-num u-m-r-25">0 回复</text>
							<text class="timer">2023-02-06</text>
						</view>
					</view>
				</view>
				<view class="list-item">
					<!-- 首页的列表 -->

					<view class="list-head">
						<!-- 标题部分 -->
						<text class="type">首页</text>
						<text class="title">我们是冠军</text>
					</view>

					<!-- 用户部分 -->
					<view class="author u-flex u-m-b-18">
						<u-image class="head" width="40" height="40" shape="circle" error-icon="/static/images/header.png"></u-image>
						<text class="name u-m-l-10">tomic用户</text>
					</view>

					<!-- 摘要部分 + 右侧图片 -->
					<view class="list-body u-m-b-30 u-flex u-col-top">
						<view class="info u-m-r-20">我是Arco，我在这里等你我是Arco，我在这里等你我是Arco，我在这里等你我是Arco，我在这里等你我是Arco，我在这里等你</view>
						<image
							class="fmt"
							src="https://ts1.cn.mm.bing.net/th/id/R-C.c12e31cf68a13ce3dcd2ea7688dd79a4?rik=NMAGNN9QCn7rJQ&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f95%2f4795.jpg&ehk=Ah%2f%2bgRzXGPl8bOxV5Uqe0zk2uRLYg4Ee%2bEZQSD1ak48%3d&risl=&pid=ImgRaw&r=0"
							mode="aspectFill"
							></image>
					</view>
					<!-- 回复 + 文章发表时间 -->
					<view class="list-footer u-flex">
						<view class="left">
							<text class="reply-num u-m-r-25">0 回复</text>
							<text class="timer">2023-02-06</text>
						</view>
					</view>
				</view>
				<view class="list-item">
					<!-- 首页的列表 -->

					<view class="list-head">
						<!-- 标题部分 -->
						<text class="type">首页</text>
						<text class="title">我们是冠军</text>
					</view>

					<!-- 用户部分 -->
					<view class="author u-flex u-m-b-18">
						<u-image class="head" width="40" height="40" shape="circle" error-icon="/static/images/header.png"></u-image>
						<text class="name u-m-l-10">tomic用户</text>
					</view>

					<!-- 摘要部分 + 右侧图片 -->
					<view class="list-body u-m-b-30 u-flex u-col-top">
						<view class="info u-m-r-20">我是Arco，我在这里等你我是Arco，我在这里等你我是Arco，我在这里等你我是Arco，我在这里等你我是Arco，我在这里等你</view>
						<image
							class="fmt"
							src="https://ts1.cn.mm.bing.net/th/id/R-C.c12e31cf68a13ce3dcd2ea7688dd79a4?rik=NMAGNN9QCn7rJQ&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f95%2f4795.jpg&ehk=Ah%2f%2bgRzXGPl8bOxV5Uqe0zk2uRLYg4Ee%2bEZQSD1ak48%3d&risl=&pid=ImgRaw&r=0"
							mode="aspectFill"
							></image>
					</view>
					<!-- 回复 + 文章发表时间 -->
					<view class="list-footer u-flex">
						<view class="left">
							<text class="reply-num u-m-r-25">0 回复</text>
							<text class="timer">2023-02-06</text>
						</view>
					</view>
				</view>
				<view class="list-item">
					<!-- 首页的列表 -->

					<view class="list-head">
						<!-- 标题部分 -->
						<text class="type">首页</text>
						<text class="title">我们是冠军</text>
					</view>

					<!-- 用户部分 -->
					<view class="author u-flex u-m-b-18">
						<u-image class="head" width="40" height="40" shape="circle" error-icon="/static/images/header.png"></u-image>
						<text class="name u-m-l-10">tomic用户</text>
					</view>

					<!-- 摘要部分 + 右侧图片 -->
					<view class="list-body u-m-b-30 u-flex u-col-top">
						<view class="info u-m-r-20">我是Arco，我在这里等你我是Arco，我在这里等你我是Arco，我在这里等你我是Arco，我在这里等你我是Arco，我在这里等你</view>
						<image
							class="fmt"
							src="https://ts1.cn.mm.bing.net/th/id/R-C.c12e31cf68a13ce3dcd2ea7688dd79a4?rik=NMAGNN9QCn7rJQ&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f95%2f4795.jpg&ehk=Ah%2f%2bgRzXGPl8bOxV5Uqe0zk2uRLYg4Ee%2bEZQSD1ak48%3d&risl=&pid=ImgRaw&r=0"
							mode="aspectFill"
							></image>
					</view>
					<!-- 回复 + 文章发表时间 -->
					<view class="list-footer u-flex">
						<view class="left">
							<text class="reply-num u-m-r-25">0 回复</text>
							<text class="timer">2023-02-06</text>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="bottom-line"></view>
  </view>
</template>

<script setup>
import { ref, reactive, getCurrentInstance, onMounted } from 'vue'
import { onReady } from '@dcloudio/uni-app'
// import { request } from '@/common/http'

const current = ref(0)
function change (val) {
  current.value = val
}
const tabList = reactive([
  {
    key: 'home',
    value: '首页'
  },
  {
    key: 'ask',
    value: '提问'
  },
  {
    key: 'share',
    value: '分享'
  },
  {
    key: 'discuss',
    value: '讨论'
  },
  {
    key: 'advise',
    value: '建议'
  },
  {
    key: 'notice',
    value: '公告'
  },
  {
    key: 'logs',
    value: '动态'
  }
])

const offsetTop = ref(80)
onReady(() => {
  const instance = getCurrentInstance()
  console.log('当前实例', instance)
  setTimeout(() => {
    const query = uni.createSelectorQuery().in(instance)
    query.select('.fixed-top').boundingClientRect((data) => {
      offsetTop.value = data.height
    }).exec()
  }, 0)
})

function handle () {
  uni.navigateTo({
    url: '/subcom-pkg/search/search'
  })
}

async function test () {
  const result = await uni.$u.post('/app2', { foo: 'bar' })
  console.log('请求成功', result)
}

onMounted(() => {
  test()
})

</script>

<script>
export default {
  name: 'home'
}
</script>

<style lang="scss" scoped>

.fixed-top {
	position: fixed;
	left: 0;
	top: 0;
	width: 100vw;
	z-index: 999;
}

.content {
	background-color: #f5f6f7;
	.wrapper{
		padding: 24rpx 0;
	}
}

.list-item {
  background: #fff;
  margin-top: 20rpx;
  padding: 30rpx;
}

.list-head {
  margin-bottom: 18rpx;
  .type {
    display: inline-block;
    height: 36rpx;
    width: 72rpx;
    text-align: center;
    line-height: 36rpx;
    white-space: nowrap;
    margin-right: 10rpx;
    font-size: 24rpx;
    border-radius: 18rpx;
    border-bottom-left-radius: 0;
    color: #fff;
    background-color: red;
    position: relative;
    top: -4rpx;
    transform: scale(0.9);
  }
  .type-share {
    background-color: #feb21e;
  }
  .type-ask {
    background-color: #02d199;
  }
  .type-discuss {
    background-color: #fe1e1e;
  }
  .type-advise {
    background-color: #0166f8;
  }
  .type-notice {
    background-color: #00a3b8;
  }
  .type-logs {
    background-color: #33cb61;
  }
  .title {
    color: #333;
    font-size: 32rpx;
    line-height: 44rpx;
    font-weight: bold;
  }
}

.author {
  color: #666;
  font-size: 24rpx;
}

.list-body {
  .info {
    font-size: 28rpx;
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .fmt {
    width: 192rpx;
    height: 122rpx;
    border-radius: 8rpx;
    flex-shrink: 0;
  }
}

.list-footer {
  color: #999;
  font-size: 24rpx;
}
</style>

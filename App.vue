<script>
export default {
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  }
}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import './uni_modules/uni-scss/index.scss';
	@import "./uni_modules/vk-uview-ui/index.scss";
	.bottom-line{
		position: fixed;
		bottom: -5px;
		left: 0;
		width: 100vw;
		height: 5px;
		box-shadow: 0 -5px 5px rgba($color: #000000, $alpha: .05);
		z-index: 999;
	}
</style>

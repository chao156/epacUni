<template>
  <view class="work-container">
    

    <!-- 宫格组件 -->
    <uni-section title="系统管理" type="line"></uni-section>
    <view class="grid-body">
      <uni-grid :column="4" :showBorder="false" >
        <uni-grid-item>
          <view class="grid-item-box" @click="handleOut">
            <uni-icons type="person-filled" size="40"></uni-icons>
            <text class="text">外出报备</text>
          </view>
        </uni-grid-item>
        <uni-grid-item>
          <view class="grid-item-box">
            <uni-icons type="staff-filled" size="40" @click="handleOutApply"></uni-icons>
            <text class="text">外出申请进度</text>
          </view>
        </uni-grid-item>
        <uni-grid-item>
          <view class="grid-item-box">
            <uni-icons type="color" size="40" @click="handleStorageApply"></uni-icons>
            <text class="text">物资申请</text>
          </view>
        </uni-grid-item>
		<uni-grid-item>
		  <view class="grid-item-box">
		    <uni-icons type="staff-filled" size="40" @click="handleItemApply"></uni-icons>
		    <text class="text">物资申请进度</text>
		  </view>
		</uni-grid-item>
        <uni-grid-item>
          <view class="grid-item-box">
            <uni-icons type="color" size="40" @click="handleQueue"></uni-icons>
            <text class="text">查看检测点排队人数</text>
          </view>
        </uni-grid-item>
         
      </uni-grid>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        current: 0,
        swiperDotIndex: 0,
        data: [{
            image: '/static/images/banner/banner01.jpg'
          },
          {
            image: '/static/images/banner/banner02.jpg'
          },
          {
            image: '/static/images/banner/banner03.jpg'
          }
        ],
		userName:'',
      }
    },
	onShow(){
		//this.userName = this.$userName
		this.userName = uni.getStorageSync('userName');
		console.log("tarbar:"+this.userName);
	},
    methods: {
      clickBannerItem(item) {
        console.info(item)
      },
      changeSwiper(e) {
        this.current = e.detail.current
      },
      changeGrid(e) {
        this.$modal.showToast('模块建设中~')
      },
	  handleOut() {
	    this.$tab.navigateTo('/pages/work/outApproval/outApply')
	  },
	  handleStorageApply(){
		this.$tab.navigateTo('/pages/work/storageApproval/storageApply')
	  },
	  handleOutApply(){
		  this.$tab.navigateTo('/pages/work/applySchedule/index')
	  },
	  handleItemApply(){
		  this.$tab.navigateTo('/pages/work/applySchedule/outIndex')
	  },
	  handleQueue(){
		  this.$tab.navigateTo('/pages/work/queueNumber/index')
	  },
    }
  }
</script>

<style lang="scss">
  /* #ifndef APP-NVUE */
  page {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background-color: #fff;
    min-height: 100%;
    height: auto;
  }

  view {
    font-size: 14px;
    line-height: inherit;
  }

  /* #endif */

  .text {
    text-align: center;
    font-size: 26rpx;
    margin-top: 10rpx;
  }

  .grid-item-box {
    flex: 1;
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px 0;
  }

  .uni-margin-wrap {
    width: 690rpx;
    width: 100%;
    ;
  }

  .swiper {
    height: 300rpx;
  }

  .swiper-box {
    height: 150px;
  }

  .swiper-item {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    height: 300rpx;
    line-height: 300rpx;
  }

  @media screen and (min-width: 500px) {
    .uni-swiper-dot-box {
      width: 400px;
      /* #ifndef APP-NVUE */
      margin: 0 auto;
      /* #endif */
      margin-top: 8px;
    }

    .image {
      width: 100%;
    }
  }
</style>

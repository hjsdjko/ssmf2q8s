<template>
	<mescroll-uni @init="mescrollInit" :up="upOption" :down="downOption" @down="downCallback" @up="upCallback" :bottom="100">
		<view class="container">
                                                                        			<view><swiper class="swiper" :indicator-dots='".swiper-pagination"==null?false:true' :autoplay='autoplaySwiper' :circular='true' indicator-active-color='rgba(255, 0, 0, 1)' indicator-color='rgba(0, 0, 0, 0.3)' :duration='1000' :interval='intervalSwiper' :vertical='"vertical"=="horizontal"?false:true'>
				<swiper-item v-for="(swiper,index) in swiperList" :key="index">
					<image mode="aspectFill" :src="swiper"></image>
				</swiper-item>
			</swiper></view>
			                                                                                                                                                                                                                                                                                                                                                <view class="detail-content">

																																													<view class="price detail-list-item priceFavor" :style='{"boxShadow":"0 0 10rpx rgba(0,0,0,.3)","margin":"0 0 10rpx 0","borderColor":"rgba(51, 153, 153, 1)","backgroundColor":"#fff","borderRadius":"10rpx","borderWidth":"2rpx","borderStyle":"solid","height":"68rpx"}'>
                                <view class="text" :style='{"color":"#333","textAlign":"left","fontSize":"28rpx"}'>¥{{detail.price}}</view>
				<view class="text icon" :style='{"color":"rgba(255, 0, 0, 1)","textAlign":"right","fontSize":"40rpx"}'><view class="cuIcon-favorfill" @click="shoucang"></view></view>				
                        </view>
										
                                                <view class="name shop-title" :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"rgba(51, 153, 153, 1)","backgroundColor":"rgba(102, 204, 204, 1)","color":"#000","borderRadius":"20rpx","borderWidth":"2rpx","fontSize":"32rpx","borderStyle":"solid"}'>
					电影名称：{{detail.dianyingmingcheng}}
				</view>
				                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                				
                                						                				<view class="detail-list-item" :style='{"boxShadow":"0 0 10rpx rgba(0,0,0,.3)","margin":"0 0 10rpx 0","borderColor":"rgba(51, 153, 153, 1)","backgroundColor":"#fff","borderRadius":"10rpx","borderWidth":"2rpx","borderStyle":"solid","height":"68rpx"}'>
					<view class="lable" :style='{"width":"auto","fontSize":"28rpx","color":"rgba(51, 153, 153, 1)","textAlign":"left"}'>类型：</view>
					<view class="text" :style='{"color":"#333","textAlign":"left","fontSize":"28rpx"}'>{{detail.leixing}}</view>
				</view>
                				                						                				<view class="detail-list-item" :style='{"boxShadow":"0 0 10rpx rgba(0,0,0,.3)","margin":"0 0 10rpx 0","borderColor":"rgba(51, 153, 153, 1)","backgroundColor":"#fff","borderRadius":"10rpx","borderWidth":"2rpx","borderStyle":"solid","height":"68rpx"}'>
					<view class="lable" :style='{"width":"auto","fontSize":"28rpx","color":"rgba(51, 153, 153, 1)","textAlign":"left"}'>导演：</view>
					<view class="text" :style='{"color":"#333","textAlign":"left","fontSize":"28rpx"}'>{{detail.daoyan}}</view>
				</view>
                				                				<view class="detail-list-item" :style='{"boxShadow":"0 0 10rpx rgba(0,0,0,.3)","margin":"0 0 10rpx 0","borderColor":"rgba(51, 153, 153, 1)","backgroundColor":"#fff","borderRadius":"10rpx","borderWidth":"2rpx","borderStyle":"solid","height":"68rpx"}'>
					<view class="lable" :style='{"width":"auto","fontSize":"28rpx","color":"rgba(51, 153, 153, 1)","textAlign":"left"}'>主演：</view>
					<view class="text" :style='{"color":"#333","textAlign":"left","fontSize":"28rpx"}'>{{detail.zhuyan}}</view>
				</view>
                				                				<view class="detail-list-item" :style='{"boxShadow":"0 0 10rpx rgba(0,0,0,.3)","margin":"0 0 10rpx 0","borderColor":"rgba(51, 153, 153, 1)","backgroundColor":"#fff","borderRadius":"10rpx","borderWidth":"2rpx","borderStyle":"solid","height":"68rpx"}'>
					<view class="lable" :style='{"width":"auto","fontSize":"28rpx","color":"rgba(51, 153, 153, 1)","textAlign":"left"}'>上映日期：</view>
					<view class="text" :style='{"color":"#333","textAlign":"left","fontSize":"28rpx"}'>{{detail.shangyingriqi}}</view>
				</view>
                				                				<view class="detail-list-item" :style='{"boxShadow":"0 0 10rpx rgba(0,0,0,.3)","margin":"0 0 10rpx 0","borderColor":"rgba(51, 153, 153, 1)","backgroundColor":"#fff","borderRadius":"10rpx","borderWidth":"2rpx","borderStyle":"solid","height":"68rpx"}'>
					<view class="lable" :style='{"width":"auto","fontSize":"28rpx","color":"rgba(51, 153, 153, 1)","textAlign":"left"}'>片长：</view>
					<view class="text" :style='{"color":"#333","textAlign":"left","fontSize":"28rpx"}'>{{detail.pianzhang}}</view>
				</view>
                				                								                								                				<view class="detail-list-item" :style='{"boxShadow":"0 0 10rpx rgba(0,0,0,.3)","margin":"0 0 10rpx 0","borderColor":"rgba(51, 153, 153, 1)","backgroundColor":"#fff","borderRadius":"10rpx","borderWidth":"2rpx","borderStyle":"solid","height":"68rpx"}'>
					<view class="lable" :style='{"width":"auto","fontSize":"28rpx","color":"rgba(51, 153, 153, 1)","textAlign":"left"}'>放映厅：</view>
					<view class="text" :style='{"color":"#333","textAlign":"left","fontSize":"28rpx"}'>{{detail.fangyingting}}</view>
				</view>
                				                				<view class="detail-list-item" :style='{"boxShadow":"0 0 10rpx rgba(0,0,0,.3)","margin":"0 0 10rpx 0","borderColor":"rgba(51, 153, 153, 1)","backgroundColor":"#fff","borderRadius":"10rpx","borderWidth":"2rpx","borderStyle":"solid","height":"68rpx"}'>
					<view class="lable" :style='{"width":"auto","fontSize":"28rpx","color":"rgba(51, 153, 153, 1)","textAlign":"left"}'>场次：</view>
					<view class="text" :style='{"color":"#333","textAlign":"left","fontSize":"28rpx"}'>{{detail.changci}}</view>
				</view>
                				                								                				<view class="detail-list-item" :style='{"boxShadow":"0 0 10rpx rgba(0,0,0,.3)","margin":"0 0 10rpx 0","borderColor":"rgba(51, 153, 153, 1)","backgroundColor":"#fff","borderRadius":"10rpx","borderWidth":"2rpx","borderStyle":"solid","height":"68rpx"}'>
					<view class="lable" :style='{"width":"auto","fontSize":"28rpx","color":"rgba(51, 153, 153, 1)","textAlign":"left"}'>点击次数：</view>
					<view class="text" :style='{"color":"#333","textAlign":"left","fontSize":"28rpx"}'>{{detail.clicknum}}</view>
				</view>
                				                						                				<view class="detail-list-item" :style='{"boxShadow":"0 0 10rpx rgba(0,0,0,.3)","margin":"0 0 10rpx 0","borderColor":"rgba(51, 153, 153, 1)","backgroundColor":"#fff","borderRadius":"10rpx","borderWidth":"2rpx","borderStyle":"solid","height":"68rpx"}'>
					<view class="lable" :style='{"width":"auto","fontSize":"28rpx","color":"rgba(51, 153, 153, 1)","textAlign":"left"}'>座位总数：</view>
					<view class="text" :style='{"color":"#333","textAlign":"left","fontSize":"28rpx"}'>{{detail.number}}</view>
				</view>
                				                								                
				                        			            			            			            			            			            			            			                        <view style="text-align: center;padding: 20upx;box-sizing: border-box;background: #FFFFFF;" :style="{margin:'0 0 10rpx 0',boxShadow:'0 0 10rpx rgba(0,0,0,.3)'}">
				<view class="uni-padding-wrap uni-common-mt">
					<view>
						<video id="myVideo" :src="detail.dianyingyugao" controls></video>
					</view>
				</view>
			</view>
            			            			            			            			            			            			            			            			            									
			            			            			            			            			            			            			            			            			            			            			            			            			            			            			            			            									
			            			            			            			            			            			            			            			            			                        <view class="time-content" :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","margin":"0 0 10rpx 0","borderColor":"rgba(51, 153, 153, 1)","backgroundColor":"#fff","borderRadius":"0","borderWidth":"2rpx","borderStyle":"solid","height":"100%"}'>
				<view class="header" :style='{"color":"rgba(51, 153, 153, 1)","fontSize":"28rpx"}'>
					电影简介
				</view>
				<view class="content" style="line-height: 50upx;letter-spacing: 5upx;" :style='{"color":"#333","fontSize":"28rpx"}'>
					<rich-text :nodes="detail.dianyingjianjie"></rich-text>
				</view>
			</view>
            			            			            			            			            			            			            			            									
			<view class="seat-list">
				<view v-for="(item,index) in numberList " v-bind:key="index" class="seat-item">
					<image @tap="$utils.msg('该座位已被预定')" v-if="selectStr.indexOf(item)>=0" class="seat-icon"
						src="../../static/restaurant-detail/select.png" mode=""></image>
						<image @tap="unselectSeat(index+1)" v-else-if="activeSeat.indexOf('#'+item.replace('号','')+'#')>=0" class="seat-icon"
						src="../../static/restaurant-detail/select.png" mode=""></image>
					<image @tap="selectSeat(index+1)" v-else class="seat-icon" src="../../static/restaurant-detail/unselect.png" mode=""></image>
					<text>{{item}}</text>
				</view>
			</view>

            			<view class="time-content" :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"rgba(102, 204, 204, 1)","backgroundColor":"#fff","borderRadius":"10rpx","borderWidth":"2rpx","borderStyle":"solid"}'>
				<view class="comoment-header" :style='{"borderColor":"rgba(255, 4, 4, 1)","backgroundColor":"#fff","borderRadius":"0px","borderStyle":"solid","borderWidth":"0 0 2rpx 0"}'>
					<view :style='{"color":"rgba(255, 0, 0, 1)","fontSize":"28rpx"}'>
						评论
					</view>
					<view :style='{"borderColor":"red","backgroundColor":"#fff","color":"rgba(255, 0, 0, 1)","borderRadius":"0","borderWidth":"0","width":"auto","fontSize":"28rpx","borderStyle":"solid","isBtn":true,"height":"60rpx"}' @click="onCommentTap" class="btn-comment-content" style="display: flex;align-items: center;">
						<view class="cuIcon-add"></view>添加评论
					</view>
				</view>

				<view class="cu-list comment" style="margin-top: 20upx;">
					<view :style='{"borderColor":"rgba(255, 0, 0, 0.2)","backgroundColor":"#fff","borderRadius":"0","borderStyle":"dashed","borderWidth":"0 0 2rpx 0"}' v-for="(item,index) in commentList" v-bind:key="index" class="cu-item comment-item">
						<view class="content">
							<view :style='{"color":"rgba(102, 204, 204, 1)","textAlign":"left","fontSize":"28rpx"}' class="text-grey">{{item.nickname}}</view>
							<view :style='{"color":"#666","textAlign":"left","fontSize":"24rpx"}' class="text-gray text-content text-df content">
								{{item.content}}
							</view>
							<view :style='{"color":"rgba(0, 29, 251, 1)","textAlign":"right","fontSize":"24rpx"}' class="margin-top-sm text-gray text-df">{{item.addtime}}</view>
							<view v-if="item.reply" :style='{"color":"#666","textAlign":"left","fontSize":"24rpx"}' class="text-gray text-content text-df content">
								回复:{{item.reply}}
							</view>
						</view>
					</view>

				</view>

			</view>
            
		
			<view class="bottom-content cu-bar bg-white tabbar border shop">
				<view style="text-align: left;display: flex;">
									</view>
				<view style="text-align: right;">
																				<button @tap="onSubmitTap" style="margin-right: 10upx;min-width: 180upx;" class="btn-submit cu-btn round bg-red" :style="{width:'auto',borderRadius:'8rpx',height:'80rpx',fontSize:'28rpx',color:'#fff',backgroundColor:btnColor[2],borderColor:btnColor[2]}">预定</button>
				</view>
			</view>
		</view>
</view>
	</mescroll-uni>
</template>

<script>
	export default {
		data() {
			return {
				autoplaySwiper: {"delay":5000,"disableOnInteraction":false} ? true : false,
				intervalSwiper: {"delay":5000,"disableOnInteraction":false} ? 5000 : 5000,
				btnColor: ['#409eff','#67c23a','#909399','#e6a23c','#f56c6c','#356c6c','#351c6c','#f093a9','#a7c23a','#104eff','#10441f','#a21233','#503319'],
				id: '',
				detail: {},
				swiperList: [],
				commentList: [],
				mescroll: null, //mescroll实例对象
				downOption: {
					auto: false //是否在初始化后,自动执行下拉回调callback; 默认true
				},
				upOption: {
					noMoreSize: 3, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
					textNoMore: '~ 没有更多了 ~',
				},
				hasNext: true,
				user: {},
				numberList: [],
				selectStr: '',
				activeSeat: '',
				sfshIndex: -1,
				sfshOptions: ['通过','不通过'],
				count: 0
			}
		},
		computed: {
			SecondToDate: function() {
				var time = this.count;
				if (null != time && "" != time) {
					if (time > 60 && time < 60 * 60) {
						time =
							parseInt(time / 60.0) +
							"分钟" +
							parseInt((parseFloat(time / 60.0) - parseInt(time / 60.0)) * 60) +
							"秒";
					} else if (time >= 60 * 60 && time < 60 * 60 * 24) {
						time =
							parseInt(time / 3600.0) +
							"小时" +
							parseInt(
								(parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
							) +
							"分钟" +
							parseInt(
								(parseFloat(
										(parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
									) -
									parseInt(
										(parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
									)) *
								60
							) +
							"秒";
					} else if (time >= 60 * 60 * 24) {
						time =
							parseInt(time / 3600.0 / 24) +
							"天" +
							parseInt(
								(parseFloat(time / 3600.0 / 24) - parseInt(time / 3600.0 / 24)) *
								24
							) +
							"小时" +
							parseInt(
								(parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
							) +
							"分钟" +
							parseInt(
								(parseFloat(
										(parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
									) -
									parseInt(
										(parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
									)) *
								60
							) +
							"秒";
					} else {
						time = parseInt(time) + "秒";
					}
				}
				return time;
			}
		},
		async onLoad(options) {
			this.id = options.id;
			// 渲染数据
			this.init();
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			            this.hasNext = true
			// 重新加载数据
			if (this.mescroll) this.mescroll.resetUpScroll()
            			this.btnColor = this.btnColor.sort(()=> {
				return (0.5-Math.random());
			});
		},
		async onShow() {
			//更新座位
			if(Object.keys(this.detail).length!=0) {
				this.$api.update('dianyingxinxi', this.detail);
			}
		},
		methods: {
			// 支付
			onPayTap(){
				uni.setStorageSync('paytable','dianyingxinxi');
				uni.setStorageSync('payObject',this.detail);
				this.$utils.jump('../pay-confirm/pay-confirm?type=1')
			},
			selectSeat(idx) {
				if(this.activeSeat=="") {
					this.activeSeat = "#" + `${idx}` + "#"
				} else {
					this.activeSeat = this.activeSeat + "," + "#" + `${idx}` + "#"
				}
			},
			unselectSeat(idx){
				let array = this.activeSeat.split(",");
				let newarray = [];
				for(let i=0;i<array.length;i++){
					if(array[i]!=("#"+idx+"#")){
						newarray.push(array[i]);
					}
				}
				this.activeSeat = newarray.join(",");
			},
			onSubmitTap() {
				let _this = this;
				if (!this.activeSeat) {
					this.$utils.msg('请选择要预定的座位');
					return
				}
				uni.showModal({
					title: '提示',
					content: '是否确认预定',
					success: async function(res) {
						if (res.confirm) {
							let activeSeatReplace=_this.activeSeat.replace(/#/g,"")
							if (_this.detail.selected) {
								_this.detail.selected = _this.detail.selected + "," + activeSeatReplace
							} else {
								_this.detail.selected = _this.detail.selected + activeSeatReplace
							}
							let data = {
								orderid: _this.$utils.genTradeNo(),
								tablename: 'dianyingxinxi',
								userid: _this.user.id,
								goodid: _this.detail.id,
																								goodname: _this.detail.dianyingmingcheng,
																																																																																																																																																																																																																																																																								picture: _this.swiperList ? _this.swiperList[0] : "",
								buynumber: 1,
								discountprice: 0,
								total: 0,
								discounttotal: 0,
								type: 1,
								address: activeSeatReplace,
								activeSeat: activeSeatReplace,
								status: '已支付',
								tablename: 'dianyingxinxi',
								discountprice: _this.detail.vipprice
							}
							if (_this.detail.price) {
								data['status'] = '未支付'
								data['price'] = _this.detail.price
								data['total'] = _this.detail.price * activeSeatReplace.split(",").length
								uni.setStorageSync('orderGoods', [data]);
								_this.$utils.jump('../shop-order-confirm/shop-order-confirm?seat=1&type=1');
							} else {
								data['price'] = 0
								await _this.$api.add('orders', data);
								await _this.$api.update('dianyingxinxi', _this.detail);
								_this.$utils.msgBack('预定成功');
							}
						}
					}
				});
			},
			// 收藏
						async shoucang(){
				let _this = this;
				uni.showModal({
					title: '提示',
					content: '是否收藏',
					success: async function(res) {
						if (res.confirm) {
							await _this.$api.add('storeup', {
								userid: _this.user.id,
								                												name: _this.detail.dianyingmingcheng,
																                												                												                												                												                												                												                												                												                												                												                												                												                												                												                																				picture: _this.swiperList[0],
								refid: _this.detail.id,
								tablename: 'dianyingxinxi'
							});
							_this.$utils.msg('收藏成功');
						}
					}
				});
			},
						// 跨表
			onAcrossTap(tableName){
     			uni.setStorageSync('crossTable','dianyingxinxi');
				uni.setStorageSync(`crossObj`, this.detail);
				this.$utils.jump(`../${tableName}/add-or-update?cross=true`);
			},
			// 获取详情
			async init(){
				let res = await this.$api.info('dianyingxinxi', this.id);
				this.detail = res.data;
																												// 轮播图片
				this.swiperList = this.detail.haibao ? this.detail.haibao.split(",") : [];
																																																																																																																				for (let i = 1; i <= this.detail.number; i++) {
					this.numberList.push(`${i}号`);
				}
				if (this.detail.selected) {
					let selected = this.detail.selected.split(",");
					let selectList = []
					for (let i = 0; i < selected.length; i++) {
						selectList.push(`${selected[i]}号`);
					}
					this.selectStr = selectList.join(",")
				}
			},
			
			// mescroll组件初始化的回调,可获取到mescroll对象
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
			},

			/*下拉刷新的回调 */
			downCallback(mescroll) {
				this.hasNext = true
				mescroll.resetUpScroll()
			},

			/*上拉加载的回调: mescroll携带page的参数, 其中num:当前页 从1开始, size:每页数据条数,默认10 */
			async upCallback(mescroll) {
				                let res = await this.$api.list('discussdianyingxinxi', {
					page: mescroll.num,
					limit: mescroll.size,
					refid: this.id
				});
				// 如果是第一页数据置空
				if (mescroll.num == 1) this.commentList = [];
				this.commentList = this.commentList.concat(res.data.list);
				if (res.data.list.length == 0) this.hasNext = false;
								mescroll.endSuccess(mescroll.size, this.hasNext);
                
            },

			onChatTap() {
				this.$utils.jump('../chat/chat')
			},
			// 下载
			download(url){
				let _this = this;
				uni.downloadFile({
					url: _this.$base.url + 'file/dowmload?fileName=' + url.replace(_this.$base.url + 'upload/',''),
					success: (res) => {
						if (res.statusCode === 200) {
							_this.$utils.msg('下载成功');
							 window.open(url);
						}
					}
				});
			},
			// 添加评论
			onCommentTap() {
				this.$utils.jump(`../discussdianyingxinxi/add-or-update?refid=${this.id}`)
			},
			// 点赞
			async zan() {
				let _this = this;
				uni.showModal({
					title: '提示',
					content: '是否点赞',
					success: async function(res) {
						if (res.confirm) {
							_this.detail.thumbsupnum += 1;
							await _this.$api.update('dianyingxinxi', _this.detail);
							_this.$utils.msg('点赞成功');
						}
					}
				});
			},
			// 踩
			async cai() {
				let _this = this;
				uni.showModal({
					title: '提示',
					content: '是否点踩',
					success: async function(res) {
						if (res.confirm) {
							_this.detail.crazilynum += 1;
							await _this.$api.update('dianyingxinxi', _this.detail);
							_this.$utils.msg('点踩成功');
						}
					}
				});
			},
					}
	}
</script>

<style lang="scss">
	.container {
		// padding-bottom: 80upx;
	}
	
	.container:after {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		content: '';
				background-attachment: fixed;
		background-size: cover;
		background-position: center;
	}
	
	.swiper {
		width: 100%;
		height: 450upx;
		image {
			width: 100%;
		}
	}
	.detail-content {
		font-size: 28upx;
		color: #888888;
		// padding: 10upx 20upx;
		background: #FFFFFF;
		line-height: 45upx;
		.name {
			font-size: 38rpx;
			font-weight: blod;
			// margin-bottom: 20upx;
			padding-top: 20upx;
		}
		.price {
			font-size: 33rpx;
			color: red;
			// margin-top: 20upx;
		}
	}
	.time-content {
		background: #FFFFFF;
		padding: 30upx;
		font-size: 30upx;
		border-radius: 20upx;
		margin-top: 20upx;
		.header {
			font-size: 33upx;
			margin-bottom: 20upx;
		}
	}
	.bottom-content {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
	}
	.comoment-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 12upx;
		
		.btn-comment-content {
			color: #DD514C;
			font-weight: bold;
			padding: 0 12upx;
		}
	}
	.comment-item {
		margin-bottom: 10upx;
		border-bottom: 1px solid #EEEEEE;
		padding-bottom: 20upx;
		.content {
			margin-left: 20upx;
			margin-top: 20upx;
		}
	}
	.icon {
		width: 50upx;
		height: 50upx;
	}
	.seat-list {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		background: #FFFFFF;
		margin: 20upx;
		border-radius: 20upx;
		padding: 20upx;
		font-size: 30upx;
		.seat-item {
			width: 33.33%;
			display: flex;
			align-items: center;
			flex-direction: column;
			margin-bottom: 20upx;

			.seat-icon {
				width: 50upx;
				height: 50upx;
				margin-bottom: 10upx;
			}
		}
	}
	
	.detail-list-item {
	  padding: 0 24upx;
	  box-sizing: border-box;
	  display: flex;
	  align-items: center;
	  height: 68upx;
	  border-bottom: 2upx solid #efefef;
	  background-color: #fff;
	
	  .lable {
	    font-size: 28upx;
	    color: #000;
	  }
	
	  .text {
	    flex: 1;
	    font-size: 24upx;
	    color: #FF00FF;
	    text-align: left;
	  }
	
	  &.favor {
	    .el-icon-star-on {
	      color: inherit;
	      font-size: inherit;
	    }
	  }
	}
	
	.detail-content .shop-title {
		padding: 20upx 24upx;
		box-sizing: border-box;
		line-height: 1.4;
	}
	
	.priceFavor {
		height: 96upx !important;
	}
	
	.priceFavor .text {
		font-size: 64upx !important;
		color: red !important;
	}
	
	.priceFavor .icon {
		font-size: 56upx !important;
		text-align: right !important;
		color: red !important;
	}
</style>

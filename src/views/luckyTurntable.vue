<template>
  <div class="luckyTurntable">
    <div class="container">
      <div class="title">
        <img src="../assets/img/luckTurntable/page1/幸运大转盘.png" alt="">
      </div>
      <!-- 开始结束时间 -->
      <div class="activityTime">
        <p>活动时间：yyyy.mm.dd-yyyy.mm.dd</p>
      </div>
      <div class="activityRule">
        <img src="../assets/img/luckTurntable/page1/活动规则.png" alt="">
      </div>
      <!-- 主体部分 -->
      <div class="main">
        <div class="userInfo">
          <img src="../assets/img/luckTurntable/page1/uImg.png" alt="">
          <p>用户昵称</p>
        </div>
        <div class="mainInfo">
          <!-- 签到打卡 -->
          <div class="signInBox">
            <div class="signIn">
              <p>已累计签到<span>1</span>天</p>
            </div>
            <div class="clock">点击打卡</div>
          </div>
          <p class="taskProgress">连续/累计打卡任务（3）</p>
          <div class="taskBox">
            <div class="taskBoxTop">

              <div class="taskBox">
                <p class="continuousClockIn">连续/累计打卡</p>
                <p class="clockDay">1天</p>
                <div class="describe" @click="isShow1 =true">
                  <p>点击抽奖</p>
                </div>
              </div>
              <!-- 遮罩层1 -->
              <van-overlay :show=isShow1>
                <div class="wrapper1" @click.stop>
                  <div class="mask1">
                    <!-- 背景图片 -->
                    <div class="bg1">
                      <div class="close1" @click="close1">
                        <img src="../assets/img/rankingList/closeX2.png" alt="">
                      </div>
                      <!-- 奖品内容 -->
                      <div class="prize1">
                        <img src="../assets/img/rankingList/组 4.png" alt="">
                      </div>
                      <p class="num1">您现在还有 <span>5</span> 次抽奖机会</p>
                      <van-button round type="danger">点击抽奖</van-button>
                    </div>
                    <!-- 背景图片结束 -->
                  </div>
                </div>
              </van-overlay>
              <div class="taskBox">
                <p class="continuousClockIn">连续/累计打卡</p>
                <p class="clockDay">1天</p>
                <div class="describe" @click="isShow">
                  <p>点击抽奖</p>
                </div>
              </div>
              <!-- 遮罩层2 -->
              <van-overlay :show=isShow2>
                <div class="wrapper2" @click.stop>
                  <div class="mask2">
                    <!-- 背景图片 -->
                    <div class="bg2">
                      <div class="close2" @click="close2">
                        <img src="../assets/img/rankingList/closeX2.png" alt="">
                      </div>
                      <!-- 奖品内容 -->
                      <div class="prize2">
                        <img src="../assets/img/rankingList/九宫格抽奖.png" alt="">
                      </div>
                      <p class="num2">您现在还有 <span>5</span> 次抽奖机会</p>
                      <van-button round type="danger">点击抽奖</van-button>
                    </div>
                    <!-- 背景图片结束 -->
                  </div>
                </div>
              </van-overlay>
              <div class="taskBox">
                <p class="continuousClockIn">连续/累计打卡</p>
                <p class="clockDay">1天</p>
                <div class="describe" @click="isShow33">
                  <p>点击抽奖</p>
                </div>
              </div>
              <!-- 遮罩层3 -->
              <van-overlay :show=isShow3>
                <div class="wrapper3" @click.stop>
                  <div class="mask3">
                    <!-- 背景图片 -->
                    <div class="bg3">
                      <div class="close3" @click="close3">
                        <img src="../assets/img/rankingList/closeX2.png" alt="">
                      </div>
                      <!-- 奖品内容 -->
                      <div class="prize3">
                        <img src="../assets/img/rankingList/宝箱.png" alt="">
                      </div>
                      <p class="num3">您现在还有 <span>5</span> 次抽奖机会</p>
                      <van-button round type="danger">点击抽奖</van-button>
                    </div>
                    <!-- 背景图片结束 -->
                  </div>
                </div>
              </van-overlay>
            </div>
            <div class="taskBoxCenter">
              <van-progress pivot-text="" color="#D9243F" :percentage="33.33" track-color="#FFD2D9" />
              <div class="progressDescribe">
                <p>距离完成下个任务还需打卡1天</p>
              </div>
            </div>
            <div class="taskBoxBottom">
              <div class="row1">
                <div class="row1Left">
                  <p>连续打卡<span>1</span>天</p>
                </div>
                <div class="row1Right">
                  <el-switch style="display: block" v-model="value2" active-color="#d8233e" inactive-color="#ffd2d9" inactive-text="打卡提醒">
                  </el-switch>
                </div>
              </div>
              <div class="row2">
                <div class="dayOne">
                  <img src="../assets/img/rankingList/已打卡.png" alt="">
                  <p class="day">1天</p>
                </div>
                <div class="dayTwo">
                  <img src="../assets/img/rankingList/未打卡.png" alt="">
                  <p class="day">2天</p>
                </div>
                <div class="dayTwo">
                  <img src="../assets/img/rankingList/未打卡.png" alt="">
                  <p class="day">3天</p>
                </div>
                <div class="dayTwo">
                  <img src="../assets/img/rankingList/未打卡.png" alt="">
                  <p class="day">4天</p>
                </div>
                <div class="dayTwo">
                  <img src="../assets/img/rankingList/未打卡.png" alt="">
                  <p class="day">5天</p>
                </div>
                <div class="dayTwo">
                  <img src="../assets/img/rankingList/未打卡.png" alt="">
                  <p class="day">6天</p>
                </div>
                <div class="dayTwo">
                  <img src="../assets/img/rankingList/未打卡.png" alt="">
                  <p class="day">7天</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 中奖详情 -->
        <div class="winningDetails">
          <van-tabs @click="onSwitch">

            <van-tab title="中奖记录" name="a">
              <el-table :data="tableData" style="width: 100%" height="200">
                <el-table-column prop="nickname1" label="昵称">
                </el-table-column>
                <el-table-column prop="prize1" label="奖品">
                </el-table-column>
              </el-table>
            </van-tab>
            <van-tab title="我的记录" name="b">
              <el-table :data="tableData2" style="width: 100%" hight="200">
                <el-table-column prop="nickname2" label="昵称">
                </el-table-column>
                <el-table-column prop="date2" label="获奖时间">
                </el-table-column>
                <el-table-column prop="prize2" label="奖品">
                </el-table-column>
                <el-table-column prop="state2" label="操作">
                </el-table-column>
              </el-table>
            </van-tab>
          </van-tabs>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'luckyTurntable',
  data () {
    return {
      value1: true,
      value2: false,
      tableData: [{
        nickname1: '王燕子',
        prize1: '奖品一'
      }, {
        nickname1: '王燕子',
        prize1: '奖品一'
      }, {
        nickname1: '王燕子',
        prize1: '奖品一'
      }, {
        nickname1: '王燕子',
        prize1: '奖品一'
      }, {
        nickname1: '王燕子',
        prize1: '奖品一'
      }, {
        nickname1: '王燕子',
        prize1: '奖品一'
      }, {
        nickname1: '王燕子',
        prize1: '奖品一'
      }],
      tableData2: [{
        nickname2: '王燕子',
        date2: '2022/3/4 22:10:29',
        prize2: '奖品一',
        state2: '领取奖品'
      }, {
        nickname2: '王燕子',
        date2: '2022/3/4 22:10:29',
        prize2: '奖品一',
        state2: '领取奖品'
      }],
      isShow1: false,
      isShow2: false,
      isShow3: false,
    }
  },
  methods: {
    onSwitch (title) {
      // Toast(title);
    },
    close1 () {
      this.isShow1 = false
    },
    close2 () {
      this.isShow2 = false
      console.log(111, this.isShow2);
    },
    close3 () {
      this.isShow3 = false
    },
    isShow () {
      this.isShow2 = true
      console.log(111, this.isShow2);
    },
    isShow33 () {
      this.isShow3 = true
      console.log(111, this.isShow3);
    }
  }
}
</script>

<style lang="less">
.luckyTurntable .container {
  width: 100%;
  height: 800px;
  padding: 45px 15px 27px 15px;
  box-sizing: border-box;
  // background-color: rgb(203, 244, 248);
}
.luckyTurntable .container .title {
  width: 206px;
  margin-left: 50%;
  transform: translateX(-50%);
}
.luckyTurntable .container .title img {
  width: 100%;
}
.activityTime {
  text-align: center;
}
.activityTime p {
  font-size: 13px;
  font-family: SourceHanSansCN;
  font-weight: 500;
  margin: 0 0;
  margin-top: 9px;
}
.activityRule {
  width: 81px;
  height: 25px;
  margin-left: -15px;
}
.activityRule img {
  width: 100%;
  height: 100%;
}
// 主体部分
.main {
  padding-bottom: 20px;
}
.main .userInfo {
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  text-align: center;
}
.main .userInfo img {
  width: 86px;
  height: 86px;
  border-radius: 50%;
  border: 3px solid #ffafbb;
}
.main .userInfo p {
  margin: 0 0;
  font-size: 13px;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: #000000;
}
.main .mainInfo {
  width: 100%;
  height: 600px;
  background-color: #fff0f3;
  border-radius: 12px;
  margin-top: -50px;
  padding: 0 12px;
  padding-top: 91px;
  box-sizing: border-box;
}
.signInBox {
  width: 100%;
  height: 121px;
  position: relative;
  border-bottom: 1px solid #cccccc;
}
.signInBox .signIn {
  width: 145px;
  height: 40px;
  border: 1px solid #d9243f;
  border-radius: 4px;
  text-align: center;
  line-height: 40px;
  margin-left: 50%;
  transform: translateX(-50%);
}
.signInBox .signIn p {
  margin: 0 0;
  font-size: 13px;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: #000000;
}
.signInBox .signIn p span {
  font-size: 17px;
  color: #d9243f;
}
.signInBox .clock {
  text-align: center;
  width: 115px;
  height: 26px;
  background: #d9243f;
  border-radius: 13px;
  font-size: 13px;
  font-family: SourceHanSansCN;
  font-weight: 500;
  color: #ffffff;
  line-height: 26px;
  margin-left: 50%;
  transform: translateX(-50%);
  position: absolute;
  top: 69px;
}
.taskProgress {
  margin: 0 0;
  font-size: 10px;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: #000000;
  line-height: 32px;
}
.taskBox {
  width: 100%;
}
.taskBox .taskBoxTop {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.taskBox .taskBoxTop .taskBox {
  width: 99px;
  height: 99px;
  background: #ffd2d9;
  border-radius: 9px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.taskBoxTop .taskBox .continuousClockIn {
  margin: 0 0;
  font-size: 9px;
  font-family: SourceHanSansCN;
  font-weight: 500;
  color: #000000;
  line-height: 32px;
}
.taskBoxTop .taskBox .clockDay {
  margin: 0 0;
  font-size: 15px;
  font-family: SourceHanSansCN;
  font-weight: 500;
  color: #000000;
  line-height: 12px;
}
.taskBoxTop .taskBox .describe {
  width: 70px;
  height: 20px;
  background: #d9243f;
  border-radius: 10px;
  text-align: center;
  margin-top: 20px;
}
.taskBoxTop .taskBox .describe p {
  margin: 0 0;
  font-size: 9px;
  font-family: SourceHanSansCN;
  font-weight: 500;
  color: #ffffff;
  line-height: 20px;
}
.van-progress {
  margin-top: 25px;
}
.progressDescribe {
  position: relative;
  width: 70%;
  height: 34px;
  border: 2px solid #ffdae0;
  border-radius: 5px;
  margin: 0 auto;
  background-color: #fff;
  margin-top: 19px;
}
.progressDescribe::before {
  content: "";
  display: block;
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #ffdae0;
}
.progressDescribe::after {
  content: "";
  display: block;
  position: absolute;
  top: -9px;
  left: 50%;
  transform: translateX(-50%);
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #fff;
}
.progressDescribe p {
  font-size: 10px;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: #000000;
  text-align: center;
}
.taskBoxBottom {
  width: 100%;
  // height: 180px;
  background-color: #fffbfc;
  margin-top: 26px;
  border-radius: 9px;
  padding: 10px;
  padding-bottom: 30px;
  box-sizing: border-box;
}
.row1 {
  display: flex;
  justify-content: space-between;
}
.row1 .row1Left p {
  margin: 0 0;
  font-size: 14px;
  font-weight: bold;
}
.row1 .row1Left p span {
  margin: 0 0;
  font-size: 14px;
  color: #db4f64;
  font-weight: bold;
}
.el-switch__label {
  color: #000000;
}
.el-switch__label.is-active {
  color: #cccaca;
}
.row2 {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
}
.row2 .dayOne {
  width: 30px;
  height: 30px;
  margin-top: 10px;
}
.row2 .dayOne img {
  width: 100%;
  height: 100%;
}
.row2 .dayOne p {
  margin: 0 0;
  font-size: 14px;
  text-align: center;
}
.row2 .dayTwo {
  width: 30px;
  height: 30px;
  margin-top: 10px;
}
.row2 .dayTwo img {
  width: 100%;
  height: 100%;
}
.row2 .dayTwo p {
  margin: 0 0;
  font-size: 14px;
  text-align: center;
}

// 中奖记录部分
.winningDetails {
  width: 100%;
  height: 250px;
  border-radius: 9px;
  background: #ffffff;
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: 20px;
  border: 3px solid pink;
  margin-bottom: 20px;
}

.van-tab__text--ellipsis {
  font-size: 15px;
  font-family: SourceHanSansCN;
  font-weight: bold;
  color: #3a3a3a;
}

.van-tabs__line {
  background: #bfbfbf;
}

// .el-table .warning-row {
//   background: #fff1f3;
// }
.el-table--border::after,
.el-table--group::after,
.el-table::before {
  background-color: #fff;
}
.van-tabs--line .van-tabs__wrap {
  width: 100%;
  border-radius: 9px;
}
// .el-table .success-row {
//   background: #f0f9eb;
// }

.el-table th.el-table__cell > .cell {
  // padding: 0 34px 0 34px;
  font-size: 15px;
  font-family: SourceHanSansCN;
  font-weight: 500;
  color: #d11f39;
  width: 100%;
  text-align: center;
}
.el-table td.el-table__cell,
.el-table th.el-table__cell.is-leaf {
  // border: unset;
}
.el-table_1_column_1 .cell {
  padding: 0 0 0 34px;
}
.el-table_1_column_2 .cell {
  padding: 0 34px 0 0;
  text-align: right;
}
.el-table .cell {
  text-align: center;
}

// 遮罩1
.wrapper1 {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 20px;
}
.wrapper1 .mask1 {
  width: 100%;
  height: 212px;
}
.wrapper1 .mask1 .bg1 {
  width: 335px;
  position: relative;
  background-color: #fff;
  background-size: 100% 100%;
  padding-top: 20px;
  margin-left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
  padding-bottom: 31px;
  margin-top: -60px;
}
.bg1 .close1 {
  position: absolute;
  top: 0px;
  right: 16px;
  width: 12px;
  height: 12px;
}
.bg1 .close1 img {
  width: 100%;
}
.prize1 {
  width: 265px;
  height: 265px;
  margin-left: 50%;
  transform: translateX(-50%);
}

.prize1 img {
  width: 100%;
  height: 100%;
}

.num1 {
  height: 20px;
  font-size: 14px;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: #383838;
  line-height: 32px;
  text-align: center;
}
.num1 span {
  font-size: 22px;
  font-weight: bold;
}
.van-button--round {
  width: 171px;
  height: 30px;
  background: #d9243f;
  border-radius: 15px;
  margin-left: 50%;
  transform: translateX(-50%);
}

// 遮罩2
.wrapper2 {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 20px;
}
.wrapper2 .mask2 {
  width: 100%;
  height: 212px;
}
.wrapper2 .mask2 .bg2 {
  width: 335px;
  position: relative;
  background-color: #fff;
  background-size: 100% 100%;
  margin-left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
  top: -120px;
  padding-bottom: 30px;
}
.bg2 .close2 {
  position: absolute;
  right: 10px;
  top: -10px;
  width: 12px;
  height: 12px;
  z-index: 2;
}
.bg2 .close2 img {
  width: 100%;
}
.prize2 {
  width: 315px;
  margin-left: 50%;
  transform: translateX(-50%);
}

.prize2 img {
  width: 100%;
  margin-top: 30px;
}

.num2 {
  height: 20px;
  font-size: 14px;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: #383838;
  line-height: 32px;
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 100px;
}
.num2 span {
  font-size: 22px;
  font-weight: bold;
}
.van-button--round {
  width: 171px;
  height: 30px;
  background: #d9243f;
  border-radius: 15px;
  margin-left: 50%;
  transform: translateX(-50%);
}

// 遮罩
.wrapper3 {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 20px;
}
.wrapper3 .mask3 {
  width: 100%;
  height: 212px;
}
.wrapper3 .mask3 .bg3 {
  width: 335px;
  position: relative;
  background-color: #fff;
  background-size: 100% 100%;
  margin-left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
  top: -60px;
  padding-bottom: 30px;
}
.bg3 .close3 {
  position: absolute;
  right: 10px;
  top: -10px;
  width: 12px;
  height: 12px;
  z-index: 2;
}
.bg3 .close3 img {
  width: 100%;
}
.prize3 {
  width: 261px;
  height: 223px;
  margin-left: 50%;
  transform: translateX(-50%);
}

.prize3 img {
  width: 100%;
  margin-top: 30px;
}

.num3 {
  height: 20px;
  font-size: 14px;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: #383838;
  line-height: 32px;
  text-align: center;
  margin-top: 50px;
}
.num3 span {
  font-size: 22px;
  font-weight: bold;
}
.van-button--round {
  width: 171px;
  height: 30px;
  background: #d9243f;
  border-radius: 15px;
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>
<template>
  <div class="luckDraw">
    <div class="bgImg">
      <div class="luckDrawTitle">
        <img src="../assets/img/luckDraw/page1/幸运大转盘.png" alt="">
      </div>
      <!-- 开始结束时间 -->
      <div class="activityTime">
        <p>活动时间：yyyy.mm.dd-yyyy.mm.dd</p>
      </div>
      <div class="activityRule">
        <img src="../assets/img/luckDraw/page1/activeRule.png" alt="">
      </div>
      <!-- 大转盘 -->
      <div class="roulette">

        <div class="rouletteBox">

          <img ref="turntable" class="turntable" src="../assets/img/luckDraw/page1/组 4.png" alt="turntable">

          <img @click="go" class="pointer" src="../assets/img/luckDraw/page1/指针.png" alt="pointer">
          <p class="num">您现在还有 <span>{{goTimes}}</span> 次抽奖机会</p>
        </div>

      </div>

      <!-- 任务列表 -->
      <div class="taskList">
        <div class="listMain">
          <div class="listItem">
            <div class="task task1">
              <p>1.今日拉新1人获得1次抽奖</p>
              <span> 1/1 (已完成)</span>
            </div>
            <div class="task task2">
              <p>2.今日拉新10人获得1次抽奖</p>
              <span> 1/10 (未完成)</span>
            </div>
            <div class="task task3">
              <p>3.今日拉新10人获得1次抽奖</p>
              <span> 1/10 (未完成)</span>
            </div>
            <div class="task task4">
              <p>4.今日拉新10人获得1次抽奖</p>
              <span> 1/10 (未完成)</span>
            </div>
            <div class="task task5">
              <p>5.今日拉新10人获得1次抽奖</p>
              <span> 1/10 (未完成)</span>
            </div>
          </div>
        </div>
        <!-- 点击出现遮罩层 -->
        <img @click="toPrize" class="listImg" src="../assets/img/luckDraw/page1/taskList.png" alt="">

        <!-- 遮罩层 -->
        <van-overlay :show=isShow @click="isShow = false">
          <div class="wrapper2" @click.stop>
            <div class="mask2">
              <!-- 背景图片 -->
              <div class="bg2">
                <div class="infoTitle2">恭喜您获得 奖品一</div>
                <div class="close" @click="close">
                  <img src="../assets/img/luckDraw/page1/closeX2.png" alt="">
                </div>

                <div class="code">
                  <img src="" alt="">
                </div>

                <div class="describe">
                  <p>长按二维码添加客服领取奖励</p>
                </div>
              </div>
              <!-- 背景图片结束 -->
            </div>
          </div>
        </van-overlay>
      </div>
      <!-- 中奖详情 -->
      <div class="winningDetails">
        <van-tabs @click="onSwitch" v-model="activeName">

          <van-tab title="中奖记录" name="a">
            <el-table :data="tableData" style="width: 326px" height="200">
              <el-table-column prop="nickname1" label="昵称">
              </el-table-column>
              <el-table-column prop="prize1" label="奖品">
              </el-table-column>
            </el-table>
          </van-tab>

          <van-tab title="我的记录" name="b">
            <el-table :data="tableData2" style="width: 326px" hight="200">
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
</template>

<script>
export default {
  name: 'luckDraw',
  data () {
    return {
      activeName: 'b',
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
      isGo: false,              //是否正在执行动画
      oTurntable: '',            //执行动画的对象
      randomDeg: 0,             //即将旋转的度数   
      lastDeg: 0,                //上一次旋转的度数
      goTimes: 5,					//抽奖次数

      isShow: false,
      num: '',
      unBorder: false,
      value1: '',
      value2: ''
    }
  },
  methods: {
    onSwitch (title) {
      // Toast(title);
    },

    close () {
      this.isShow = false
    },

    toPrize () {
      this.isShow = true
    },
    // tableRowClassName ({ row, rowIndex }) {
    //   if (rowIndex === 1) {
    //     return 'warning-row';
    //   } else if (rowIndex === 3) {
    //     return 'success-row';
    //   }
    //   return '';
    // }
    go () {
      if (!this.isGo && this.goTimes > 0) { this.getNumber() }
      else if (!this.isGo && this.goTimes <= 0) { alert('抱歉您的抽奖次数用完了') }
      else return    			//表明正在抽奖，未结束扔点击无效
    },
    getRandom (n, m) {             //该方法能产生[n,m]之间随机数
      let result = Math.floor(Math.floor(Math.random() * (m - n + 1) + n))
      return result;
    },
    getNumber () {
      /*  
        调整中奖概率(让每次旋转前指针都在初始位置，这样才准确)
        想转到第一项，需要转：360/7*0 + 360/7/2;   --->该项为超级大奖奖项
        想转到第二项，需要转：360/7*1 + 360/7/2;
        想转到第三项，需要转：360/7*2 + 360/7/2;
        想转到第四项，需要转：360/7*3 + 360/7/2;
        想转到第五项，需要转：360/7*4 + 360/7/2;
        想转到第六项，需要转：360/7*5 + 360/7/2;
        想转到第七项，需要转：360/7*6 + 360/7/2;   --->该项为未中奖项
      */
      let number = this.getRandom(0, 100)
      let caseNum = ''
      if (number === 0) {
        caseNum = 0             //粗略概率为1%
      } else if (number > 0 && number < 5) {
        caseNum = 1             //粗略概率为5%
      } else if (number >= 5 && number < 10) {
        caseNum = 2             //粗略概率为5%
      } else if (number >= 10 && number < 15) {
        caseNum = 3             //粗略概率为5%
      } else if (number >= 15 && number < 20) {
        caseNum = 4             //粗略概率为5%
      } else if (number >= 20 && number < 25) {
        caseNum = 5             //粗略概率为5%
      } else {
        caseNum = 6             //粗略概率为75%
      }
      switch (caseNum) {
        case 0:
          this.ratating(360 / 7 * 0 + 360 / 7 / 2, "免单4999元");
          break;
        case 1:
          this.ratating(360 / 7 * 1 + 360 / 7 / 2, "免单50元");
          break;
        case 2:
          this.ratating(360 / 7 * 2 + 360 / 7 / 2, "免单10元");
          break;
        case 3:
          this.ratating(360 / 7 * 3 + 360 / 7 / 2, "免单5元");
          break;
        case 4:
          this.ratating(360 / 7 * 4 + 360 / 7 / 2, "免分期服务费");
          break;
        case 5:
          this.ratating(360 / 7 * 5 + 360 / 7 / 2, "提高白条额度");
          break;
        default:
          this.ratating(360 / 7 * 6 + 360 / 7 / 2, "未中奖");
          break;
      }
    },
    ratating (deg, text) {
      this.goTimes--
      this.isGo = true
      let times = this.getRandom(3, 6)//圈数(从用户体验角度考虑，设计随机转3-6圈。最少3圈，最多6圈)

      this.randomDeg = deg + 360 * times      //记录这次要旋转的度数(传来的度数+圈数)
      let realDeg = (360 - this.lastDeg % 360) + this.lastDeg + this.randomDeg
      /*上次指针离初始状态的度数 + 上次的度数 + 这次要旋转的度数
      (这样的目的是为了每次旋转都从原点开始，保证数据准确)*/
      this.oTurntable.style.transform = `rotate(${realDeg}deg)`;
      setTimeout(() => {
        this.isGo = false
        console.log(`以原点为基准共旋转了${this.randomDeg}度,
        			以一圈为基准相对旋转了${this.randomDeg % 360}度,最终结果为${text}`)
        this.lastDeg = realDeg    //把这次度数存储起来，方便下一次获取
      }, 4000)                     //4000ms为css里面写的执行动画的时间
    },
  },
  mounted () {
    this.oTurntable = this.$refs.turntable
  }
}
</script>

<style lang="less">
.luckDraw {
  box-sizing: border-box;
}
.bgImg {
  width: 100vw;
  // height: 100vh;
  position: relative;
  background: url("../assets/img/luckDraw/page1/背景.png") no-repeat;
  background-size: 100% 100%;
  padding-bottom: 40px;
}
.luckDrawTitle {
  width: 248px;
  height: 38px;
  margin-left: 50%;
  transform: translateX(-50%);
}
.luckDrawTitle img {
  width: 100%;
  height: 100%;
  margin-top: 40px;
}
.activityTime {
  text-align: center;
}
.activityTime p {
  font-size: 13px;
  font-family: SourceHanSansCN;
  font-weight: 500;
  color: #ffffff;
  margin-top: 53px;
}
.activityRule {
  width: 81px;
  height: 25px;
}
.activityRule img {
  width: 100%;
}

.rouletteBox {
  // width: 100%;
  // height: 265px;
  // position: relative;
  width: 100%;
  height: 340px;
  position: relative;
  // background-color: pink;
}

.pointer {
  // display: block;
  // width: 60px;
  // position: absolute;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  width: 60px;
  height: 72px;
  // margin-top: -36px;
  // margin-left: -30px;
  display: block;
}

.turntable {
  // display: block;
  // width: 265px;
  // margin-left: 50%;
  // transform: translateX(-50%);
  width: 266px;
  height: 266px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -133px;
  margin-top: -133px;
  transition: all 4s; /*动画执行时间为4s */
}

.roulette .num {
  // width: 161px;
  // height: 20px;
  font-size: 14px;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: #ffffff;
  line-height: 32px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
}

.roulette .num span {
  font-size: 16px;
  font-weight: bold;
}
// 任务列表
.taskList {
  width: 100%;
  height: 158px;
  position: relative;
  margin-top: 30px;
}
.listMain {
  width: 327px;
  height: 141px;
  border: 3px solid #fe9308;
  border-radius: 9px;
  background: #ffffff;
  margin-left: 50%;
  transform: translateX(-50%);
}

.taskList .listImg {
  width: 138px;
  height: 33px;
  margin-left: 50%;
  transform: translateX(-50%);
  position: absolute;
  top: -16px;
  left: 0;
}
.listItem {
  width: 293px;
  height: 100px;
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: 28px;
}

.task {
  width: 100%;
  height: 20px;
  font-size: 12px;
  font-family: SourceHanSansCN;
  color: #8d8d8d;
  display: flex;
  justify-content: space-between;
}
.task1 {
  font-weight: 500;
  color: #303030;
}
.listItem .task p {
  width: 180px;
  margin: 0;
}
.listItem .task span {
  width: 100px;
  text-align: right;
}
// 中奖记录部分
.winningDetails {
  width: 327px;
  height: 250px;
  border-radius: 9px;
  background: #ffffff;
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: 8px;
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
  width: 326px;
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
// .el-table th.el-table__cell {
//   background-color: #ff92a2;
// }
// .el-table_2_column_3 .cell {
//   padding: 0 0 0 34px;
// }
// .el-table_2_column_4 .cell {
//   padding: 0 34px 0 0;
//   text-align: right;
// }

// .el-table th.el-table__cell > .cell {
//   padding: 0;
// }

// 遮罩
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
  box-sizing: border-box;
  position: relative;
  margin-left: 50%;
  transform: translateX(-50%);
  width: 325px;
  height: 381px;
  background: #ffffff;
  border-radius: 10px;
  padding-top: 48px;
}
.bg2 .infoTitle2 {
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-family: SourceHanSansCN;
  font-weight: bold;
  color: #484848;
}

.bg2 .close {
  position: absolute;
  top: -5px;
  right: 16px;
  width: 12px;
  height: 12px;
}
.bg2 .close img {
  width: 100%;
}

.code {
  width: 226px;
  height: 226px;
  background: #f0f0f0;
  margin: 0 auto;
  margin-top: 27px;
}
.describe {
  width: 100%;
  text-align: center;
  font-size: 17px;
  font-family: SourceHanSansCN;
  font-weight: 500;
  color: #484848;
  line-height: 19px;
}
.el-table .el-table__cell {
  text-align: center;
}
</style>
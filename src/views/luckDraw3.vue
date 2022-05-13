<template>
  <div class="luckDraw3">
    <div class="bgImg">

      <div class="luckDrawTitle">
        <img src="../assets/img/luckDraw/page3/幸运开箱.png" alt="">
      </div>

      <div class="activityTime">
        <p>活动时间：yyyy.mm.dd-yyyy.mm.dd</p>
      </div>

      <!-- 活动规则 -->
      <div class="activityRule">
        <img src="../assets/img/luckDraw/page1/activeRule.png" alt="">
      </div>
      <!-- 宝箱部分 -->
      <div class="treasureChest">
        <!-- 宝箱 -->
        <div class="box"></div>
        <p class="num">您现在还有 <span>0</span> 次抽奖机会</p>

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
          <img class="listImg" src="../assets/img/luckDraw/page1/taskList.png" alt="">
        </div>
        <!-- 中奖详情 -->
        <div class="winningDetails">
          <van-tabs @click="onSwitch">
            <van-tab title="中奖记录">

              <el-table :data="tableData" style="width: 326px" height="200">
                <el-table-column prop="nickname1" label="昵称">
                </el-table-column>
                <el-table-column prop="prize1" label="奖品">
                </el-table-column>
              </el-table>
            </van-tab>

            <van-tab title="我的记录">
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
  </div>
</template>

<script>
export default {
  name: 'luckDraw3',
  data () {
    return {
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
    }
  },
  methods: {
    onSwitch (title) {
      // Toast(title);
    },
  }
}
</script>

<style lang="less">
.bgImg {
  width: 100vw;
  height: 100vh;
  position: relative;
  background: url("../assets/img/luckDraw/page3/背景.png") no-repeat;
  background-size: 100% 100%;
  padding-bottom: 160px;
}
.luckDrawTitle {
  width: 245px;
  height: 61px;
  margin-left: 50%;
  transform: translateX(-50%);
}
.luckDrawTitle img {
  width: 100%;
  height: 100%;
  margin-top: 33px;
}
.activityTime p {
  width: 250px;
  font-size: 12px;
  font-family: SourceHanSansCN;
  font-weight: 500;
  margin: 0;
  position: absolute;
  top: 104px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: #fff;
}
// 活动规则
.activityRule {
  width: 81px;
  height: 25px;
  margin-top: 70px;
}
.activityRule img {
  width: 100%;
}
// 宝箱部分
.treasureChest {
  width: 100%;
  // height: 100vh;
  height: 100%;
  position: relative;
  background: url("../assets/img/luckDraw/page3/宝箱背景.png") no-repeat;
  background-size: 100%;
}
.treasureChest .box {
  width: 200px;
  height: 200px;
  background: url("../assets/img/luckDraw/page3/宝箱.png") no-repeat;
  background-size: 100%;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
}
.treasureChest .num {
  font-size: 14px;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: #ffffff;
  line-height: 32px;
  position: absolute;
  top: 220px;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
}
.treasureChest .num span {
  font-size: 24px;
  font-weight: bold;
}
// 任务列表
.taskList {
  width: 100%;
  height: 158px;
  position: relative;
  top: 306px;
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
  margin-top: 314px;
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
.el-table .el-table__cell {
  text-align: center;
}
</style>
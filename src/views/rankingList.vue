<template>
  <div class="rankingList">
    <div class="rankingExplain">
      排行榜须知
    </div>
    <div class="container">
      <p class="myRanking">我的排名</p>

      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="ranking" label="我的排名">
        </el-table-column>
        <el-table-column prop="nickname" label="我的昵称">
        </el-table-column>
        <el-table-column prop="pullNew" label="我的拉新人数">
        </el-table-column>
      </el-table>

      <div class="allRanking">
        <p class="ranking">全部排名</p>

        <el-table :data="tableData2" stripe style="width: 100%">
          <el-table-column prop="ranking" label="排名">
          </el-table-column>
          <el-table-column prop="nickname" label="昵称">
          </el-table-column>
          <el-table-column prop="pullNew" label="拉新人数">
          </el-table-column>
        </el-table>
      </div>

    </div>
  </div>
</template>

<script>
import { getUser } from "../api/index.js";

export default {
  name: 'rankingList',
  data () {
    return {
      tableData: [{
        ranking: '99',
        nickname: '张三石',
        pullNew: '34'
      }],


      tableData2: [{
        ranking: '01',
        nickname: '王燕子',
        pullNew: '100'
      }, {
        ranking: '02',
        nickname: '王燕子',
        pullNew: '99'
      }, {
        ranking: '03',
        nickname: '王燕子',
        pullNew: '98'
      }
        , {
        ranking: '04',
        nickname: '王燕子',
        pullNew: '97'
      }
        , {
        ranking: '05',
        nickname: '王燕子',
        pullNew: '96'
      }
        , {
        ranking: '06',
        nickname: '王燕子',
        pullNew: '96'
      }
        , {
        ranking: '07',
        nickname: '王燕子',
        pullNew: '94'
      }
        , {
        ranking: '08',
        nickname: '王燕子',
        pullNew: '93'
      }
        , {
        ranking: '09',
        nickname: '王燕子',
        pullNew: '92'
      }
        , {
        ranking: '10',
        nickname: '王燕子',
        pullNew: '90'
      }]
    }
  },
  created () {
    this.getUser()
  },
  methods: {
    getUser () {
      let params = {
        startDate: 1650521000000,
        endDate: 1651039400271
      }
      getUser(params).then(res => {
        console.log(res);
      })
    }
  },
}
</script>

<style lang="less">
.rankingExplain {
  width: 68px;
  height: 20px;
  background: #e4e4e4;
  border-radius: 0px 10px 10px 0px;
  font-size: 9px;
  font-family: SourceHanSansCN;
  font-weight: 500;
  color: #424242;
  line-height: 20px;
  text-align: center;
  margin-top: 20px;
}
.container {
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
}
.container .myRanking {
  margin: 19px 0 0 0;
  font-size: 14px;
  font-family: SourceHanSansCN;
  font-weight: bold;
  color: #424242;
  text-align: center;
  margin-bottom: 17px;
}

.allRanking .ranking {
  font-size: 14px;
  font-family: SourceHanSansCN;
  font-weight: bold;
  color: #333333;
  text-align: center;
  margin-top: 38px;
}

.el-table td.el-table__cell,
.el-table th.el-table__cell.is-leaf {
  border-bottom: unset;
}
.el-table th.el-table__cell {
  background-color: #ffd2d9;
  font-size: 13px;
  font-family: SourceHanSansCN;
  font-weight: bold;
  color: #555555;
}
.el-table .el-table__cell {
  padding: 0 0;
}
.el-table th.el-table__cell > .cell {
  text-align: center;
}
.el-table .cell {
  text-align: center;
  height: 31px;
  line-height: 31px;
}
.el-table--striped .el-table__body tr.el-table__row--striped td.el-table__cell {
  background-color: #fff1f3;
}
</style>
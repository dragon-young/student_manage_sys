<template>
    <el-tabs type="border-card">
        <el-tab-pane label="学生基本信息">
            <div class="student_base_info">
              <div id="studentOnSchool" style="width: 600px;height:400px;"></div>
            </div>
        </el-tab-pane>
        <el-tab-pane label="薪资信息">
            <div class="salary_info">
              <div id="employSarlaryTotal" style="width: 600px;height:400px;"></div>
            </div>
        </el-tab-pane>
        <el-tab-pane label="就业信息">就业信息</el-tab-pane>
        <el-tab-pane label="工作省份">
          <div class="map-container" ref="myEchart"></div>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
import echarts from 'echarts'
export default {
  data () {
    return {
    }
  },
  mounted () {
    var totalOnSchoolAndLeaveSchool = echarts.init(document.getElementById('studentOnSchool'))
    var employSarlaryTotal = echarts.init(document.getElementById('employSarlaryTotal'))
    // 指定图表的配置项和数据
    var student = {
      grid: {
        left: 130
      },
      title: {
        text: '学生在校离校统计表',
        left: 'center'
      },
      tooltip: {},
      legend: {
        data: ['在校人数', '留校人数'],
        orient: 'vertical',
        left: 0,
        top: 50
      },
      series: [{
        name: '学生在校离校统计表',
        radius: ['50%', '70%'],
        type: 'pie',
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '20',
            fontWeight: 'bold'
          }
        },
        data: [
          { value: 23, name: '在校：23 (18.7%)' },
          { value: 100, name: '留校 87 (81.3%)' }
        ]
      }]
    }
    // 薪资情况
    var salary = {
      title: {
        text: '就业薪资工资统计表'
      },
      xAxis: {
        type: 'category',
        data: ['2-3', '3-4', '4-5', '6-7', '7-8', '8-9', '9-10']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [1, 2, 5, 3, 7, 8, 9],
        type: 'bar'
      }]
    }
    // 使用刚指定的配置项和数据显示图表。
    totalOnSchoolAndLeaveSchool.setOption(student)
    employSarlaryTotal.setOption(salary)
  }
}
</script>

<style lang="less" scoped>
.student_base_info {
  width: 600px;
  margin: 60px auto;
}
.salary_info {
  width: 600px;
  margin: 60px auto;
}
</style>

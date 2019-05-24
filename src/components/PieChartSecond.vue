<template>
    <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
</template>

<script>
    export default{
        name: 'PieChartSecond',
        data () {
      this.chartSettings = {
        dataType: 'percent'
      }
      return {
        chartData: {
          columns: ['date', 'profit'],
          rows: [
            { 'date': '01/01', 'cost': 123, 'profit': 0.01 },
            { 'date': '01/02', 'cost': 1223, 'profit': 0.02 },
            { 'date': '01/03', 'cost': 2123, 'profit': 0.03 },
            { 'date': '01/04', 'cost': 4123, 'profit': 0.04 },
            { 'date': '01/05', 'cost': 3123, 'profit': 0.05 },
            { 'date': '01/06', 'cost': 7123, 'profit': 0.06 }
          ]
        }
      }
    }
    }
</script>

<style>
</style>
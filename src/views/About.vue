<template>
  <div class="grid-list-md text-xs-center">
    <v-layout row wrap>

      <v-flex  xs12>    
          <PyramidChart class="test"></PyramidChart>
      </v-flex>

         <v-flex  xs12>    
          <ColumnChart></ColumnChart>
        </v-flex>

      <v-flex xs6>
          <PieChart></PieChart>
      </v-flex>

        <v-flex xs6>
         <PieChartSecond></PieChartSecond> 
      </v-flex>

      <v-flex xs6>
         <LineChart></LineChart> 
      </v-flex>

      <v-flex xs6>
        <LineChart></LineChart>
       </v-flex>

        <v-flex xs6>
        <HealthCard></HealthCard>
       </v-flex>

    </v-layout>
  </div>
</template>

<script>
// import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import LineChart from '../components/LineChart';
import PyramidChart from '../components/PyramidChart';
import ColumnChart from '../components/ColumnChart';
import PieChartSecond from '../components/PieChartSecond';
import HealthCard from '../components/HealthCard';
export default {
  components: {
    // BarChart,
    PieChart,
    LineChart,
    PyramidChart,
    // ColumnChart
    PieChartSecond,
    HealthCard
    
  }
}
</script>

<style>
 .test {
   height: 600px;
 }
</style>

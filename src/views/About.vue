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

        <v-flex xs3>
        <HealthCard></HealthCard>
       </v-flex>

        <v-flex xs3>
        <EducationCard></EducationCard>
       </v-flex>

        <v-flex xs3>
        <ReligionCard></ReligionCard>
       </v-flex>

        <v-flex xs3>
        <BudgetCard></BudgetCard>
       </v-flex>

    </v-layout>
  </div>
</template>

<script>
// import BarChart from '../components/BarChart';
import PieChart from '../components/Population/PieChart';
import LineChart from '../components/LineChart';
import PyramidChart from '../components/HomePage/PyramidChart';
import PieChartSecond from '../components/Population/PieChartSecond';
import HealthCard from '../components/HealthCard';
import EducationCard from '../components/EducatiionCard';
import ReligionCard from '../components/ReligionCard';
import BudgetCard from '../components/BudgetCard';
export default {
  components: {
    // BarChart,
    PieChart,
    LineChart,
    PyramidChart,
    PieChartSecond,
    HealthCard,
    EducationCard,
    ReligionCard,
    BudgetCard
    
  }
}
</script>

<style>
 .test {
   height: 600px;
 }
</style>

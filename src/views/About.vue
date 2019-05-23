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
         <LineChart></LineChart> 
      </v-flex>

           <v-flex xs6>
        <v-card >
          <LineChart></LineChart>
        </v-card>
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
export default {
  components: {
    // BarChart,
    PieChart,
    LineChart,
    PyramidChart
    
  }
}
</script>

<style>
 .test {
   height: 600px;
 }
</style>

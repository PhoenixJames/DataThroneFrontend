<template>
  <div class="grid-list-md text-xs-center">
    <v-layout row wrap>

      <v-flex xs12>
        <v-card >
          <BarChart></BarChart>
        </v-card>
      </v-flex>

      <v-flex xs6>
        <v-card  >
          <PieChart></PieChart>
        </v-card>
      </v-flex>

         <v-flex xs6>
        <v-card >
         <!--<LineChart></LineChart>-->
         <PyramidChart></PyramidChart>
        </v-card>
      </v-flex>

           <v-flex xs6>
        <v-card >
         <!--<PyramidChart></PyramidChart>-->
          <LineChart></LineChart>
        </v-card>
      </v-flex>

    </v-layout>
  </div>
</template>

<script>
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import LineChart from '../components/LineChart';
import PyramidChart from '../components/PyramidChart';
export default {
  components: {
    BarChart,
    PieChart,
    LineChart,
    PyramidChart
  }
}
</script>

<style>
</style>

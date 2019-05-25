<template>
  <div>
  <div class="container">
    <v-select
      item-text="name"
      item-value="code"
      :items="items"
      label="Standard"
      v-on:change="changeFilter($event)"
    >
    
    </v-select>
    </div>
    <GChart
          class= 'column-chart'
          :settings="{ packages: ['corechart','bar', 'table', 'map'] }"
          type="ColumnChart"
          :data="chartData"
          :options="chartOptions"
    />
  </div>

</template>

<script>
import axios from 'axios' 
export default{
    name: 'ColumnChart',
    data () {
      return {
        // Array will be automatically processed with visualization.arrayToDataTable function
        items: [
          {
            'name':'Primary School',
            'code':'P'
          },
          {
            'name':'Post Primary School',
            'code':'PP'
          },
          {
            'name':'Middle School',
            'code':'M'
          },
          {
            'name':'High School',
            'code':'H'
          },
          {
            'name':'University',
            'code':'U'
          },
        ],
        chartData: [],
        chartOptions: {
          hAxis: {
            title: 'State/Region',
            format: 'text',
            // viewWindow: {
            //   min: [7, 30, 0],
            //   max: [17, 30, 0]
            // }
          },
          vAxis: {
            title: 'Rating (scale of 1-10)'
          }
        }
      }
    },
    watch: {
    },
    mounted () {
    axios
      .get(`http://localhost:3000/api/education/total/P`)
      .then(response => (this.chartData = response.data))
      .catch(error => console.log(error));
  },
  methods: {
    changeFilter: function(filter) {
      axios
        .get(`http://localhost:3000/api/education/total/${filter}`)
        .then(response => (this.chartData = response.data))
        .catch(error => console.log(error));
    }
    // changeFilter(e) {
    //    console.log(e.target.value) 
    // }
  },
  
}
</script>

<style>
.column-chart{
  height:500px;
}
</style>
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
    name: 'MultiFilterColumn',
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
        chartData: [
          
    [
        "State/Region",
        "Total Student",
        "Total Teacher",
        "Total School"
    ],
    [
        "Kachin",
        34003,
        1036,
        17
    ],
    [
        "Kayah",
        18660,
        611,
        15
    ],
    [
        "Kayin",
        38111,
        1568,
        48
    ],
    [
        "Chin",
        5371,
        292,
        14
    ],
    [
        "Sagaing",
        17121,
        676,
        19
    ],
    [
        "Tanintharyi",
        14200,
        535,
        13
    ],
    [
        "Bago",
        44665,
        1371,
        32
    ],
    [
        "Magway",
        15782,
        600,
        16
    ],
    [
        "Mandalay",
        25535,
        989,
        19
    ],
    [
        "Mon",
        11777,
        322,
        6
    ],
    [
        "Rakhine",
        11797,
        699,
        14
    ],
    [
        "Yangon",
        18254,
        578,
        8
    ],
    [
        "Shan",
        7967,
        225,
        9
    ],
    [
        "Ayeyarwady",
        18900,
        734,
        16
    ],
    [
        "Naypyitaw  Council",
        11726,
        389,
        8
    ]



        ],
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
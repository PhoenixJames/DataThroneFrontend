<template>
<div id="app">
  <v-app id="inspire">
      <v-form>
        <v-container>
          <v-layout wrap>    
            <v-flex xs4>
              <v-select
                v-model="values"
                item-text="name"
                item-value="code"
                :items="items"
                attach
                chips
                label="Chips"
                multiple
                v-on:change="changeFilter($event)"
              ></v-select>
            </v-flex>

            <v-flex xs4>
              <v-select
                v-model="srvalue"
                item-text="SR_NAME"
                item-value="SR_PCODE"
                :items="regions"
                attach
                chips
                label="Chips"
                v-on:change="changeSRFilter($event)"                
              ></v-select>
            </v-flex>

            <v-flex xs4>
              <v-select
                v-model="srvalue"
                item-text="TS_NAME"
                item-value="TS_PCODE"
                :items="townships"
                attach
                chips
                label="Chips"
                multiple
                v-on:change="changeTSFilter($event)" 
              ></v-select>
              
            </v-flex>
            <v-flex xs2 offset-xs10>
              <v-btn v-on:click="Search()" color="info">Search</v-btn>
            </v-flex>

  
    <v-flex xs12>
    <GChart
          class= 'column-chart'
          :settings="{ packages: ['corechart','bar', 'table', 'map'] }"
          type="ColumnChart"
          :data="chartData"
          :options="chartOptions"
    />
    </v-flex>
          </v-layout>
        </v-container>
      </v-form>
      <v-divider></v-divider>
  </v-app>
</div>
</template>

<script>
import axios from 'axios' 
    export default {
        name: 'MultiSelect',
            data () {
      return {
        // Array will be automatically processed with visualization.arrayToDataTable function
        items: [
          {
            'name':'Student and Vehicle',
            'code':'V'
          },
          {
            'name':'Student and Teacher',
            'code':'T'
          },
          {
            'name':'High school student and teacher',
            'code':'HST'
          },
          {
            'name':'Middle school student and teacher',
            'code':'MST'
          },
          {
            'name':'Pre school student and teacher',
            'code':'PST'
          },

        ],
        values:[],
        srvalue:[],
        tsvalue:[],

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
              388,
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
        },
        regions:[],
        townships:[],
      }
    },


  watch: {
    isUpdating (val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000)
      }
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    Search: function() {
      this.values.push("TS_PCODE")
      console.log(this.values)
      axios.post('http://localhost:3000/api/education/criteria/', {
        "topics" :this.values ,
        "townships" : {
            "TS_PCODE":this.tsvalue
          }
        })
        .then(response => (this.chartData = response.data))
        .catch(function(error) {
          console.log(error);
        });

    },
    changeFilter: function(filter) {
      this.values=filter;
      console.log(this.values);
    },

    changeSRFilter: function(filter) {
      this.srvalue=filter;
      this.townships=this.townships.filter(x=>x.SR_PCODE == filter)
      console.log(this.values);
    },
    changeTSFilter: function(filter) {
      this.tsvalue=filter;
      console.log(this.tsvalue);
    },
    remove (item) {
      const index = this.friends.indexOf(item.name)
      if (index >= 0) this.friends.splice(index, 1)
    },
    removeRgTs (item) {
      const index = this.friends.indexOf(item.name)
      if (index >= 0) this.friends.splice(index, 1)
    },
    init(){
      axios
      .get(`http://localhost:3000/api/township/allregion`)
      .then(response => (this.regions = response.data))
      .catch(error => console.log(error));

      axios
      .get(`http://localhost:3000/api/township/alltownship/`)
      .then(response => (this.townships = response.data))
      .catch(error => console.log(error));
    },

  }
}
</script>

<style>
</style>
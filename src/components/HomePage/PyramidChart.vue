<template>
  
    <GChart 
            :settings="{ packages: ['corechart', 'table', 'map'] }"
            type="BarChart"
            :data="chartData"
            :options="chartOptions"
    />
  
</template>

<script>
import axios from 'axios' 
export default{
    name: 'PyramidChart',

    data () {
      return {
        // Array will be automatically processed with visualization.arrayToDataTable function
        chartData: [
          ['Age', 'Male', 'Female'],
          ['0-4 years',   106, -104],
          ['5-9 years',   91,  -86 ],
          ['10-14 years', 79,  -77 ],
          ['15-19 years', 68,  -64 ],
          ['20-24 years', 62,  -58 ],
          ['25-29 years', 56,  -53 ],
          ['30-34 years', 51,  -46 ],
          ['35-39 years', 48,  -41 ],
          ['40-44 years', 43,  -35 ],
          ['45-49 years', 39,  -30 ],
          ['50-54 years', 33,  -27 ],
          ['55-59 years', 32,  -25 ],
          ['60-64 years', 27,  -20 ],
          ['64-69 years', 19,  -16 ],
          ['70-74 years', 13,  -12 ],
          ['75-79 years', 8,   -7  ],
          ['80-84 years', 3,   -3  ],
          ['85-89 years', 1,   -1  ],
          ['90-94 years', 0,   0   ],
          ['95+ years',   0,   0   ]
        ],
        chartOptions: {
          isStacked: true,
          hAxis: {
            format: ';'
          },
          vAxis: {
            direction: -1
          }
        }
      }
    },

    mounted () {
      axios
        .get(`http://localhost:3000/api/population/age`)
        .then(response => (this.chartData = response.data))
        .catch(error => console.log(error));
    }, 
  
}
</script>

<style>
</style>
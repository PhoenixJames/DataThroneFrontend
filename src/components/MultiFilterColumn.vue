<template>
<div id="app">
  <v-app id="inspire">
      <v-form>
        <v-container>
          <v-layout wrap>    
            <v-flex xs4>
              <v-autocomplete
                v-model="friends"
                :disabled="isUpdating"
                :items="people"
                box
                chips
                color="blue-grey lighten-2"
                label="Select"
                item-text="name"
                item-value="name"
                multiple
              >
                <template v-slot:selection="data">
                  <v-chip
                    :selected="data.selected"
                    close
                    class="chip--select-multi"
                    @input="remove(data.item)"
                  >
                    {{ data.item.name }}
                  </v-chip>
                </template>
              </v-autocomplete>
            </v-flex>

            <v-flex xs4>
              <v-autocomplete
                v-model="friends"
                :disabled="isUpdating"
                :items="people"
                box
                chips
                color="blue-grey lighten-2"
                label="Select"
                item-text="name"
                item-value="name"
                multiple
              >
                <template v-slot:selection="data">
                  <v-chip
                    :selected="data.selected"
                    close
                    class="chip--select-multi"
                    @input="remove(data.item)"
                  >
                    {{ data.item.name }}
                  </v-chip>
                </template>
              </v-autocomplete>
            </v-flex>

            <v-flex xs4>
              <v-autocomplete
                v-model="friends"
                :disabled="isUpdating"
                :items="people"
                box
                chips
                color="blue-grey lighten-2"
                label="Select"
                item-text="name"
                item-value="name"
                multiple
              >
                <template v-slot:selection="data">
                  <v-chip
                    :selected="data.selected"
                    close
                    class="chip--select-multi"
                    @input="remove(data.item)"
                  >
                    {{ data.item.name }}
                  </v-chip>
                </template>
              </v-autocomplete>
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
    export default {
        name: 'MultiSelect',
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
        }
      }
    },
  //         data () {
  //   const srcs = {
  //     1: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
  //     2: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
  //     3: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
  //     4: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
  //     5: 'https://cdn.vuetifyjs.com/images/lists/5.jpg'
  //   }

  //   return {
  //     autoUpdate: true,
  //     friends: ['Sandra Adams', 'Britta Holt'],
  //     isUpdating: false,
  //     name: 'Midnight Crew',
  //     people: [
  //       { header: 'Group 1' },
  //       { name: 'Sandra Adams', group: 'Group 1' },
  //       { name: 'Ali Connors', group: 'Group 1' },
  //       { name: 'Trevor Hansen', group: 'Group 1' },
  //       { name: 'Tucker Smith', group: 'Group 1' },
  //       { divider: true },
  //       { header: 'Group 2' },
  //       { name: 'Britta Holt', group: 'Group 2' },
  //       { name: 'Jane Smith ', group: 'Group 2' },
  //       { name: 'John Smith', group: 'Group 2' },
  //       { name: 'Sandra Williams', group: 'Group 2' }
  //     ],
  //     title: 'The summer breeze'
  //   }
  // },

  watch: {
    isUpdating (val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000)
      }
    }
  },

  methods: {
    remove (item) {
      const index = this.friends.indexOf(item.name)
      if (index >= 0) this.friends.splice(index, 1)
    }
  }
}
</script>

<style>
</style>
<template>
    <!--<h1>this page is education</h1>-->
    <div class="grid-list-md text-xs-center"> 
        <v-layout row wrap >
            <v-flex xs5>
                <h1>the grid 5</h1>
            </v-flex>
            <v-flex xs2>
                <h1>the grid 2</h1>
            </v-flex>
            <v-flex xs5>
                <h1>the grid 5</h1>
            </v-flex>  
            <v-flex xs6>
                <PieChart></PieChart>
            </v-flex> 

            <v-flex xs6>
                <LineChart></LineChart>
            </v-flex>

            <v-flex xs6>
                <BarChart></BarChart>
            </v-flex>

            <v-flex xs12>
                <MultiSelect></MultiSelect>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import PieChart from '../components/Population/PieChart';
import LineChart from '../components/OtherChart/LineChart';
import BarChart from '../components/OtherChart/BarChart';
import MultiSelect from '../components/MultiSelect';

    export default {
        name: 'Education',
        components :{
            PieChart,
            LineChart,
            BarChart,
            MultiSelect
        }
    }
</script>

<style>
</style>
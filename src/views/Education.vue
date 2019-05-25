<template>
    <!--<h1>this page is education</h1>-->
    <div class="grid-list-md text-xs-center"> 
        <v-layout row wrap > 
            <v-flex xs12>
            
                <ColumnChart></ColumnChart>
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
import ColumnChart from '../components/Education/ColumnChart';
import MultiSelect from '../components/MultiSelect';

    export default {
        name: 'Education',
        components :{
            PieChart,
            LineChart,
            BarChart,
            MultiSelect,
            ColumnChart
        }
    }
</script>

<style>
</style>
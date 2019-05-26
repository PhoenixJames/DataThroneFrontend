<template>
    <div>
        <v-flex>
        <PieChart></PieChart>
        </v-flex>
        <v-flex>
            <PieChartSecond></PieChartSecond>
        </v-flex>
        <v-flex>
        <DemoPage></DemoPage>
        </v-flex>
    </div>
</template>

<script>
      import DemoPage from '../components/DemoPage'; 
      import PieChart from '../components/Population/PieChart';
       import PieChartSecond from '../components/Population/PieChartSecond';
    export default {
        name: 'iAndD',
        components:{
            DemoPage,
            PieChart,
            PieChartSecond
        }
    }
</script>

<style>
</style>
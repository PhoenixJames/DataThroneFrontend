<template>
  <div>
  <MainBody class="BodyMain" />
  <div>
  <h1 class="population">Population of Myanmar</h1>
  </div>
   <PyramidChart class="test"></PyramidChart>
        <v-layout row wrap>
        <v-flex xs6>
            <img class="image" src="../assets/Male.png">
        </v-flex>
        <v-flex xs6>
            <img class="image2" src="../assets/Female.png">
        </v-flex>
        </v-layout>
  
    <div class=" text-xs-center">
      <v-card></v-card>
      <v-layout row wrap>

          <v-flex  xs2>    
              <v-btn outline large fab color="indigo" to="/Education">EDU</v-btn>
          </v-flex> 
          <v-flex  xs2>    
              <v-btn outline large fab color="indigo" to="/Education">Health</v-btn>
          </v-flex>
          <v-flex  xs2>    
              <v-btn outline large fab color="indigo" to="/Education">Budget</v-btn>
          </v-flex>
          <v-flex  xs2>    
              <v-btn outline large fab color="indigo" to="/IAndD">I&D</v-btn>
          </v-flex>
          <v-flex  xs2>    
              <v-btn outline large fab color="indigo" to="/Education">EDU</v-btn>
          </v-flex>
          <v-flex  xs2>    
              <v-btn outline large fab color="indigo" to="/Education">EDU</v-btn>
          </v-flex>
          <v-flex  xs2>    
              <v-btn outline large fab color="indigo" class="a" to="/Education">EDU</v-btn>
          </v-flex>
          <v-flex  xs2>    
              <v-btn outline large fab color="indigo" class="a" to="/Education">EDU</v-btn>
          </v-flex>
          <v-flex  xs2>    
              <v-btn outline large fab color="indigo" class="a" to="/Education">EDU</v-btn>
          </v-flex>
          <v-flex  xs2>    
              <v-btn outline large fab color="indigo" class="a" to="/Education">EDU</v-btn>
          </v-flex>
          <v-flex  xs2>    
              <v-btn outline large fab color="indigo" class="a" to="/Education">EDU</v-btn>
          </v-flex>
         
      </v-layout> 
      </v-card>   
    </div>
  </div>
</template>

<script>
  import MainBody from '../components/MainBody';
  import PyramidChart from '../components/HomePage/PyramidChart';
  import EducationCard from '../components/EducatiionCard';  
  // import Footer from '../components/Footer';

  export default {
    components: {
      MainBody,
      PyramidChart,
      EducationCard
      // Footer
    }
  }
</script>

<style>
.test{
   height: 600px;
}

.a{
  margin-left: 200px;
}

.image{
    margin-left:300px;
}
.image2{
    margin-left:180px;
}

.population{
    margin-left:520px;
}

/*.diamond{
   width: 0; height: 0; border: 50px solid transparent; border-bottom-color: red; position: relative; top: -50px;
}
.diamond:after{
   content: ''; position: absolute; left: -50px; top: 50px; width: 0; height: 0; border: 50px solid transparent; border-top-color: red;
}*/

</style>



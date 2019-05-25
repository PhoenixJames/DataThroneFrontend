<template>
  <div>
  <MainBody class="BodyMain" />
  <PyramidChart class="test"></PyramidChart>
  <!--<Footer/>-->
    <div class="grid-list-md text-xs-center">
      <v-layout>
      
          <v-flex  xs3>    
            <v-btn color="success" to="/Education">Education</v-btn>
          </v-flex>

           <v-flex  xs3>    
            <v-btn color="success">success</v-btn>
          </v-flex>

           <v-flex  xs3>    
            <v-btn color="success">success</v-btn>
          </v-flex>

           <v-flex  xs3>    
            <v-btn color="success">success</v-btn>
          </v-flex>
          <v-router></v-router>
      
      </v-layout>

      
    </div>
      <div class="grid-list-md text-xs-center">
      <v-layout>
      
          <v-flex  xs4>    
            <v-btn color="success">success</v-btn>
          </v-flex>

           <v-flex  xs4>    
            <v-btn color="success">success</v-btn>
          </v-flex>

           <v-flex  xs4>    
            <v-btn color="success">success</v-btn>
          </v-flex>      
      </v-layout>    
    </div>

        <div class="grid-list-md text-xs-center">
      <v-layout>
      
          <v-flex  xs3>    
            <v-btn color="success">success</v-btn>
          </v-flex>

           <v-flex  xs3>    
            <v-btn color="success">success</v-btn>
          </v-flex>

           <v-flex  xs3>    
            <v-btn color="success">success</v-btn>
          </v-flex>  

            <v-flex  xs3>    
            <v-btn color="success">success</v-btn>
          </v-flex>    
      </v-layout>    
    </div>
  </div>
</template>

<script>
  import MainBody from '../components/MainBody';
  import PyramidChart from '../components/HomePage/PyramidChart';
  // import Footer from '../components/Footer';

  export default {
    components: {
      MainBody,
      PyramidChart
      // Footer
    }
  }
</script>

<style>
.test{
   height: 600px;
}

/*.diamond{
   width: 0; height: 0; border: 50px solid transparent; border-bottom-color: red; position: relative; top: -50px;
}
.diamond:after{
   content: ''; position: absolute; left: -50px; top: 50px; width: 0; height: 0; border: 50px solid transparent; border-top-color: red;
}*/

</style>



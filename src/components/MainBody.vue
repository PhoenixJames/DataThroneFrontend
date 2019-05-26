<template>
<!--<div id="app">
  <v-app id="inspire">
    <v-container
      fluid
      grid-list-lg
      fill-height
      style="min-height: 434px"
    >
      <v-fade-transition mode="out-in">
        <v-layout v-if="show" key="0" wrap>-->
          <!--<v-flex xs6>
            <v-card>
              <v-img
                src="https://picsum.photos/350/165?random"
                height="125"
                class="grey darken-4"
              ></v-img>
              <v-card-title class="title">height</v-card-title>
            </v-card>
          </v-flex>-->
          <!--<EducationCard></EducationCard>
          <v-flex xs6>
            <v-card>
              <v-img
                src="https://picsum.photos/350/165?random"
                height="125"
                contain
                class="grey darken-4"
              ></v-img>
              <v-card-title class="title">height with contain</v-card-title>
            </v-card>
          </v-flex>
  
          <v-flex xs6>
            <v-card>
              <v-img
                src="https://picsum.photos/350/165?random"
                max-height="125"
                class="grey darken-4"
              ></v-img>
              <v-card-title class="title">max-height</v-card-title>
            </v-card>
          </v-flex>
  
          <v-flex xs6>
            <v-card>
              <v-img
                src="https://picsum.photos/350/165?random"
                max-height="125"
                contain
                class="grey darken-4"
              ></v-img>
              <v-card-title class="title">max-height with contain</v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
  
        <v-layout v-else key="1" justify-center>
          <v-btn flat @click="show = true">Load images</v-btn>
        </v-layout>
      </v-fade-transition>
    </v-container>
  </v-app>
</div>-->
<!--<div id="app">
  <v-app id="inspire">
    <v-parallax 
      dark 
      src ="http://yesofcorsa.com/wp-content/uploads/2016/10/Bagan-Myanmar-Desktop-Wallpaper.jpg"
    >
      <v-layout
        align-center
        column
        justify-center
      >
        <h1 class="display-2 font-weight-thin mb-3">Vuetify.js</h1>
        <h4 class="subheading">Build your application today!</h4>
      </v-layout>
    </v-parallax>
  </v-app>
</div>-->
</template>

<script>
//  import EducationCard from '../components/EducatiionCard';
    export default {

        name: 'MainBody',
        components:{
          //  EducationCard
        },
          data: () => ({
      show: false
  })
    }
</script>

    <style>
    </style>
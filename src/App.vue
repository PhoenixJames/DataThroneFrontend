<template>
<div id="app">
  <v-app id="inspire">
    <v-toolbar transparent>
      <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->
      <v-toolbar-title>DataThrone</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
         <v-btn to="/">Home</v-btn>
        <v-btn to="/about">Population</v-btn>
        <v-btn flat to="/Health">Health</v-btn>
        <v-btn flat to="/Education">Education</v-btn>
        <v-btn flat to="/Religion">Religion</v-btn>
         <v-btn flat to="/Budget">Budget</v-btn>
       
        
      </v-toolbar-items>
    </v-toolbar>
      <router-view></router-view>

  </v-app>

</div>

 

</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>

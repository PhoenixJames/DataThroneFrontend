<template>
<div id="app">
  <v-app id="inspire">
    <v-toolbar dark>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Link One</v-btn>
        <v-btn flat>Link Two</v-btn>
        <v-btn flat>Link Three</v-btn>
        <v-btn to="/about">Go to Bar</v-btn>
        
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

<template>
    <div class="container">
       <v-layout>
            <v-flex xs6>
              <v-card color="blue-grey darken-2" class="white--text">
                <v-card-actions>
                  <v-btn flat dark to="/Education">Education Detail</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
       </v-layout>
       <router-view></router-view>
    </div>
</template>

<script>
export default{
    name: 'EducationCard'
}
</script>

<style>
.white--text {
  height:300px;
  width: 300px;
}
</style>
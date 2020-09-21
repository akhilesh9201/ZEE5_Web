<template>
<v-container>
    <v-row>
      <v-col
      v-for="i in 3"
      :key=i
      cols="4"
      xs="4"
      >
        <v-card
        heigth="400px">
          <v-btn
          class="pa-md-4 pa-sm-4 ma-sm-4 mx-lg-auto mx-sm-2 ma-xs-4"
          color="white"
          width="250px"
        >
          <v-card-text class="blue--text">
           click me
          </v-card-text>
          </v-btn>
        </v-card>
        </v-col>
    </v-row>
</v-container>    
</template>
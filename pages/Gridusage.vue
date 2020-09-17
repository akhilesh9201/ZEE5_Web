<template>
  <v-container>
    <v-row >
      <v-col justify=center
        v-for="n in 12"
        :key="n"
        cols="12"
        sm="6"
     
        
      >        
        <v-card
          class="pa-2"
          
        >
          same thing for all boxes
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
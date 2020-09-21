<template>
  <v-container>
    
  <v-row
    no-gutters
    >
    <v-col
    v-for="i in 3"
    :key=i
    cols="12"
    md="4"
    >

 <img
 src="among.png"
 width="350px"
 class="ma-3" 
 >


    </v-col>
    </v-row>

  <v-row 
    no-gutters
    >
    <v-col 
    
    cols="12"
    md="6"
    >
    <img
    src="among.png"
     width="350px"
     class="mx-a"
    >

      <v-card
        class="purple lighten-3 pa-3"
      >
        <v-card-text >
         One impostor is remaining
        </v-card-text>
      </v-card>

    </v-col>
    </v-row>

  </v-container>
</template>
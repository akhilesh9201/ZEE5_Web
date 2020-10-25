<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog" persistent
      width="600"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="text-center rounded-circle align-center justify-center ma-3"
          height="65px"
          width="65px"
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
        
        </v-btn>
      </template>

      <v-card
      light
      >
        
        <v-row class="pt-md-6 pl-md-8 ma-md-2">
       <h3 class="pt-md-6"> Email ID</h3>
        <v-col cols="10">
          <v-text-field  outlined required></v-text-field> 
        </v-col>  
      </v-row>

      <v-row class="pl-md-6 ma-md-2">
        <h3 class="pt-md-6"> Password </h3>
          <v-col cols="10">
            <v-text-field  outlined required></v-text-field> 
          </v-col>  
      </v-row>
      
        <v-card-actions>
          <v-spacer></v-spacer>
          
          
           <AlertGreen/>
          
      
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>


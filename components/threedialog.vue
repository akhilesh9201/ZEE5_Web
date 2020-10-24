<template>
     <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">

<v-row>
  
<v-btn
class=" rounded-circle ma-md-12 pa-md-12"
height="80px"
width="100 px"
v-for="dialog in items"
:key="dialog.btn"
 v-bind="attrs"
          v-on="on">
{{ dialog.btn }}
</v-btn>

 
</v-row>
      </template>
      <v-card
      light
      >
              <v-card-title class="headline blue">
          <!-- <img class="mr-4 md-sm-xs-5" src="facebook.jpg" height="25" px /> -->
          Facebook
        </v-card-title>
        
        <v-row class="pt-md-6 pl-md-8 ma-md-2">
       <h3 class="pt-md-6"
       >
        Email ID</h3>
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
          
          
           <Snackbar/>
          
      
        </v-card-actions>
      </v-card>
</v-dialog>
  </v-row>
</template>

<script>
export default {
  data () {
    return  {
      btn: null
      ,
      items: [
      {button: ''},
     
     {btn: '' },

      {btn: '' },
      
      ],
    }
  },
}
</script>
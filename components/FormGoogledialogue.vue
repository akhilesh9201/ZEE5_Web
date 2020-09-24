<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="text-center rounded-circle align-center justify-center ma-3"
      height="65px"
      width="65px"
          color="primary"
          dark
                
          v-bind="attrs"
          v-on="on"
        >
         <GoogleCircle/>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline blue">
         <img class="mr-4 md-sm-xs-5"
          src=google-hangouts.png
          height=25 px
          >  
         Google 
        </v-card-title>
        
        <v-card-text>
          <v-container>
            <v-row>

              <v-col cols="12">
                <v-text-field label="Email*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-col>
            
            </v-row>
          </v-container>
         
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          
          <v-btn color="blue darken-1" outlined text @click="dialog = false"><h3>Login</h3></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
    }),
  }
</script>
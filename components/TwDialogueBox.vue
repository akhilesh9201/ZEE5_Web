<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <!-- persistent command should have been added as the privacy 
      policy should be compulsory for the users -->

     
     
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="blue"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Twitter
        </v-btn>
      </template>

      <v-card >
          <v-card-title class="headline blue">
          Twitter
        </v-card-title>
      
              
              <v-col cols="12" sm="12" md="4">
                <v-text-field label="Enter you Email ID or Phone Number*" required></v-text-field>
              </v-col>
             
              <v-col cols="12">
                <v-text-field label="Password*" required></v-text-field>
              </v-col>
             
        

        
        <v-card-actions>
          
          <v-spacer>
            <v-row justify="center">
          <v-btn 
            color="primary"
            text
            @click="dialog = false"
          >
            <!-- if the value is changed to true then 
            clicking on i accept wont have any chnages in this form -->

            I accept
          </v-btn>
          </v-row>
          </v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dialog:false,
        // if the command is changed to true then the privacy 
        // policy appears directly when the page is reloaded
      }
    },
  }
</script>
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
          color=" blue"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Twitter
        </v-btn>
      </template>

      <v-card >
        <v-card-title class="headline sky blue">
          <img
          src=twitter.png
          height=25 px
          >
            Twitter
        </v-card-title>
           
          <v-col cols="12 col-md=4">
           <v-text-field label="Enter you Email ID or Phone Number*" required></v-text-field>
          </v-col>
             
          <v-col cols="12">
            <v-text-field label="Password*" required></v-text-field>
          </v-col>
             
            <v-card-actions>
         
             <v-btn 
              color="smoke grey"
              text
              outlined
              @click="dialog = false"
             >
               <!-- component called Alertgreen has not been used in here  -->
               <!-- AlertGreen is not used in this code because the task carried out follows a social media login only through facebook  -->
            
              Login
             </v-btn>
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
        // when this condition is set to be true the popup for Google login directly appears without clicking or selecting anything
      }
    },
  }
</script>
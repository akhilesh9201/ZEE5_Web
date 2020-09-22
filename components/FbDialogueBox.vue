<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
     <!-- The width speicified above is for the popup box which is going to apper for the social media login process -->

      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary" dark
          v-bind="attrs"
          v-on="on"
        >
          Facebook
        </v-btn>
      </template>


      <v-card >
          <v-card-title class="headline blue">
             <img
             src=facebook.jpg
             height=25 px
             >
              <!-- the "headline blue" command is used so that the popup appearing would be having a blue titlebar  
              scr is the source file for the icon of facebook -->
          Facebook
        </v-card-title>
          
          <v-col cols="12" sm="12" md="12">
            <v-text-field 
              v-model="email"
              :rules="emailRules"
              label="Enter you Email ID or Phone Number*" required>
            </v-text-field>
          </v-col>
             
        <v-col cols="12">
          <v-text-field label="Password*" required></v-text-field>
        </v-col>
          
        <v-card-actions>  
          <v-btn 
            color="primary"
            text
            outlined
            @click="dialog = false"
          >
          
           <AlertGreen/>
          <!-- component called Alertgreen has been used in here  -->
          <!-- Only AlertGreenis used in this code because the task carried out follows a social media login only through facebook  -->
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
        // when this condition is set to be true the popup for Facebook login directly appears without clicking or selecting anything
      }
  
    },
  }
</script>
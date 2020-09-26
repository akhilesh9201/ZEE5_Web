<template>
  <v-form v-model="valid">
    <v-container>
      
    <AdvertCard/>
      <v-card
      max width="600"
      class="pa-10">
       
       
        <!-- the alignment and the distribution of content is controlled by the commands stated above -->
       
        <v-row justify="center">
         <h2> Enter Email ID or Phone Number </h2> 
        </v-row>
        

          <v-text-field class="mx-md-sm-10"
            required
          ></v-text-field>
          
       
        <!-- Incorporated rounded button in this form iteself  -->
         <RoundedButton/>
        
        <!-- Rounded button ends here -->


       
        <v-spacer></v-spacer> 
        <v-row class="mt-10" justify="center">  
        <h2> OR </h2>

        </v-row>
        
        <v-col class="md-sm-xs-4"
        cols="12"
        md-sm-cols="4">
          <v-row>
          
            <FormGoogledialogue/>
            <!-- The google button component for login is the used here -->
              
            <FormFbdialogue/>
            <!-- The facebook button component has been used here
            user can only procees with this button as it has an AlertGreen component -->
              
            <FormTwitterdialogue/>
            <!-- The twitter button has been placed here  -->
          </v-row>
        </v-col>
     </v-card>
     
    </v-container>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
     
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
  }
</script>
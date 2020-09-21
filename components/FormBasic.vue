<template>
  <v-form v-model="valid">
    <v-container>
      
      <v-card 
      max width="800"
      class="pa-10">
       <v-row>
       
        <!-- the alignment and the distribution of content is controlled by the commands stated above -->
        <v-col
          cols="12"
          md="12"
        >
        <v-row justify="center">
         <h2> Enter Email ID or Phone Number </h2> 
        </v-row>
        

          <v-text-field
            required
          ></v-text-field>
      
       
        <!-- Incorporated rounded button in this form iteself  -->
          <v-row justify = "center">
            <div class="text-center">
              <v-btn rectangle color="primary" dark>Proceed</v-btn>
            </div>
          </v-row>
        </v-col>
        <!-- Rounded button ends here -->
        <v-col
          cols="12"
          md="4"
        >
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
        <v-spacer></v-spacer> 
        <v-row justify="center">  
        <h2> OR </h2> 
        </v-row>
        
           <v-row  
            cols="12"
            md="4"
           >
            <GoogleDialogueBox/>
            <!-- The google button component for login is the used here -->
              <v-spacer>
            <FbDialogueBox/>
            <!-- The facebook button component has been used here
            user can only procees with this button as it has an AlertGreen component -->
              </v-spacer>
            <TwDialogueBox/>
            <!-- The twitter button has been placed here  -->
          </v-row>
        </v-col>
        </v-row>
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
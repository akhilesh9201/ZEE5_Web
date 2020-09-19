<template>
  <v-form v-model="valid">
    <v-container>

      <v-card max width="800"
      class="pa-10">
       <v-row>
        <v-col
          cols="12"
          md="4"
        >

        <v-row justify="center">
        <h2> Enter Email ID or Phone Number </h2> 
        </v-row>

          <v-text-field
           
            required
          ></v-text-field>
        </v-col >

        <!-- Incorporated rounded button in this form iteself  -->
          <v-row justify = "center">
          <div class="text-center">
            <v-btn rectangle color="primary" dark>Proceed</v-btn>
          </div>
          </v-row>
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
        
        <v-row>
               <v-col
        sm="5"
        offset-sm="2"
        md="6"
        offset-md="0"
      ></v-col>
        <GoogleDialogueBox/>
       
        <DialogueBox/>
        <v-spacer></v-spacer>
         <TwDialogueBox/>
        </v-row>
        
        <!-- <TwittDialogueButton/> -->
          

        </v-col>
      </v-row>
     </v-card> 
    </v-container>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
  }
</script>
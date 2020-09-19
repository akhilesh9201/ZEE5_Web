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
          <v-text-field
 
            label="Email ID or Phone number"
            required
          ></v-text-field>
        </v-col >

          <v-row justify = "center">
          <div class="text-center">
            <v-btn rectangle color="primary" dark>Rounded Button</v-btn>
          </div>
          </v-row>
        
        <v-col
          cols="12"
          md="4"
        >
         
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
         
        <v-row justify="center">
        <h2> OR </h2> 
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
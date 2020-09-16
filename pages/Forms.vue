<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <!-- persistent command used in this code gave it modal feature  -->
      <template v-slot:activator="{ on, attrs }">
        <!-- <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn> -->
      </template>
      <v-card>
        <v-card-title>
          <v-row justify="center">
            <span class="headline">User Details</span>
          </v-row>
          <!-- by adding justify the header of user details was 
          aligned to the center -->
          
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="4">
                <v-text-field label="Enter you Email ID or Phone Number*" required></v-text-field>
              </v-col>
             
              <v-col cols="12">
                <v-text-field label="Email*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="2">
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  single
                ></v-select>
              </v-col>
              <v-col cols="12" sm="10">
                <v-autocomplete
                  :items="['Binge Watching', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  single

                ></v-autocomplete>
                <!-- By changing the multiple to single the user can only select one 
                option out of multiple checkboxes -->

              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <!-- <v-btn color="blue darken-1" text @click="dialog = false">cancel</v-btn> -->
          <v-btn color="blue darken-1" text @click="dialog = true">Continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      dialog: true,
      // intitially the comment was false but clicked on it , 
      // it changed to true making the form appear directly
    }),
  }
</script>
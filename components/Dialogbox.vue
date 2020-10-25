<template>
  <div class="text-center">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="text-center rounded-circle align-center justify-center ma-3"
          height="65px"
          width="65px"
          v-bind="attrs"
          v-on="on"
        >
          <!-- the v-bind helps to tie up javascript and html -->
          <Circles />
        </v-btn>
      </template>
      <!-- light command gives the card a white color -->
      <v-card light>
        <v-card-title class="headline blue">
          <img class="mr-4 md-sm-xs-5" src="facebook.jpg" height="25" px />
          Facebook
        </v-card-title>
        <!-- card-title gives a basic padding andmargins for the titles cards -->

        <v-col cols="12">
          <h3 class="pt-md-6 ma-md-2 pl">Email ID</h3>
          <!-- Outline gives the text field a box and thus acts a a textbox -->
          <v-text-field
            :rules="rules"
            hide-details="auto"
            outlined
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <h3 class="pt-md-6">Password</h3>

          <v-text-field
            :rules="rules"
            hide-details="auto"
            outlined
            required
          ></v-text-field>
        </v-col>
        <!-- v-action special margin to buttons so that they properly line up with other card content areas -->
        <v-card-actions>
          <v-spacer></v-spacer>

          <!-- the align command aligns the toastnotif component to the center -->
          <v-row align="center">
            <ToastNotif />
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>


<script>
// The required in the script give an error in the text field if the text is not inputted
export default {
  data: () => ({
    rules: [
      (value) => !!value || "Required.",
      // gives the error if the the text field is kept empty
      (value) => (value && value.length >= 3) || "Min 3 characters",
    ],
  }),
};
</script>
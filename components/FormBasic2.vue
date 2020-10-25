<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" sm="4" md="4" lg="4">
          <AdvertCard />
        </v-col>

        <v-col cols="12" sm="5">
          <v-card class="pa-8">
            <!-- the alignment and the distribution of content is controlled by the commands stated above -->

            <v-row justify="center">
              <h2>Enter Email ID or Phone Number</h2>
            </v-row>

            <v-text-field class="mx-md-sm-10" required></v-text-field>

            <!-- Incorporated rounded button in this form iteself  -->
            <RoundedButton />

            <!-- Rounded button ends here -->

            <v-row class="pt-10" justify="center">
              <h2>OR</h2>
            </v-row>

            <!-- <v-col class="md-sm-xs-4" cols="12"> -->

            <v-row>
              <v-col sm="3" md="4" cols="4" class="mr-sm-4 hidden-md-and-up">
                <Dialogbox2 />
                <!-- The google button component for login is the used here -->
              </v-col>

              <v-col sm="3" md="4" cols="4" class="hidden-sm-and-down">
                <Dialogbox2 />
                <!-- The google button component for login is the used here -->
              </v-col>

              <v-col sm="4" md="4" cols="4">
                <Dialogbox />
                <!-- The facebook button component has been used here
            user can only procees with this button as it has an AlertGreen component -->
              </v-col>
              <v-col sm="4" md="4" cols="4">
                <Dialogbox3 />
                <!-- The twitter button has been placed here  -->
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="12" md="3" lg="3" sm="3">
          <CardPrmPacks />
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
  }),
};
</script>
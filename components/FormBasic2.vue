<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <!-- The compontents have been hidden in some devices so that they can be rearranged in the resposive mobile phone -->
                <v-col cols="12" sm="4" md="4" lg="4" class="hidden-md-and-down">
          <AdvertCard />
        </v-col>

        <v-col cols="12" sm="5" class="hidden-md-and-down">
          <LoginCard />
        </v-col>

        <v-col cols="12" md="3" lg="3" sm="3" class="hidden-md-and-down">
          <CardPrmPacks />
        </v-col>

        <!-- The new order of the page will be as follows -->
        <!-- The components have been unhidded in the outputs, the result output follows the desired order  -->
        <v-col cols="12" md="3" lg="3" sm="3" class="hidden-sm-and-up">
          <CardPrmPacks />
        </v-col>

        <v-col cols="12" sm="5" class="hidden-sm-and-up">
          <LoginCard />
        </v-col>

        <v-col cols="12" sm="4" md="4" lg="4" class="hidden-sm-and-up">
          <AdvertCard />
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
<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="text-center rounded-circle align-center justify-center ma-3"
          height="55px"
          width="55px"
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          <Circles />
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline blue">
          <img class="mr-4 md-sm-xs-5" src="facebook.jpg" height="25" px />
          Facebook
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                  <v-text-field label="Email*" outlined required></v-text-field>
      
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  outlined
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn>
            <AlertGreen/>
            <!-- <h3>Login</h3> -->
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),
};
</script>
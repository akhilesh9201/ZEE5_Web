<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <!-- Allots the width to the alert which is going to appear saying that the account has been linked successfully 
    if reduced the width the content inside it would be not visible to the user -->

      
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="blue" dark v-bind="attrs" v-on="on"> Login </v-btn>
      </template>
      <div>
        <v-alert type="success"> Account linked successfully </v-alert>
        <!-- When clicked on login the alert appears as a popup to the user -->
      </div>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
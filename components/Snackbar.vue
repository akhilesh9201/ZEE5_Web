<template>
  <div class="text-center">
    <v-btn
      dark
      color="blue"
      @click="snackbar = true"
    >
     Login
    </v-btn>

    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
     Account Linked Successfully

       </v-snackbar>
  </div>
</template>
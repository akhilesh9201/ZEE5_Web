<template>
  <div class="text-center">
    <v-btn
      dark
      color="blue dark"
      @click="snackbar = true"
    >
     Login
    </v-btn>

    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar = true"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
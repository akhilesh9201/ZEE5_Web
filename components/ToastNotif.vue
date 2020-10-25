<template>
  <div class="text-center">
    <v-btn color="blue" @click="snackbar = true"> Login </v-btn>

    <v-snackbar color="green" v-model="snackbar" :timeout="timeout">
      {{ text }}
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    snackbar: false,
    // if the condition is set as true the popup will appear directly on the screen
    text: "Account Linked successfully.",
    timeout: 2000,
    // The popup will appear for 2 sec and will disappear and act as a toast notification
  }),
};
</script>
<template>
  <v-footer
    dark
  >
    <v-card   
      class="rgb(29, 0, 30)"
    >
     
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      

    <v-card-text>
    <v-col cols="10"> 
      About Us
      Hello
    </v-col>
    </v-card-text>

      <v-divider></v-divider>

     
    </v-card>
  </v-footer>
</template>
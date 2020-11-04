<template>
  <v-row>
    <v-col class="pl-sm-8"
      v-for="value in ['-xl']"
      :key="value"
      cols="6"
      md="3"
    >
      <div
        :class="`rounded${value}`"
        class="white pa-4 text-center text-no-wrap"
      
        
      >  <v-icon medium color="black">mdi-magnify</v-icon></div>
    </v-col>
  </v-row>
</template>
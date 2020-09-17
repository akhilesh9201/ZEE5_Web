<template>
  <v-container class="grey lighten-5">
    <v-row
      v-for="n in 11"
      :key="n"
      :class="n === 1 ? 'mb' : ''"
      no-gutters
    >
      <v-col
        v-for="k in n + 1"
        :key="k"
      >
        <v-card
          class="pa-1"
          outlined
          tile
        
        >
          {{ k }} of {{ n + 1 }}
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
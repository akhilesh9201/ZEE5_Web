<template>
  <v-breadcrumbs :items="items">
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item
        :href="item.href"
        :disabled="item.disabled"
      >
        {{ item.text.toUpperCase() }}
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          text: 'Homepage',
          disabled: false,
          href: 'breadcrumbs_Homepage',
        },
        {
          text: 'Packages',
          disabled: false,
          href: 'breadcrumbs_Packages',
        },
        {
          text: 'User Details',
          disabled: false,
          href: 'breadcrumbs_User_Details',
          
        },
      ],
    }),
  }
</script>
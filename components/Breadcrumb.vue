<template>
  <div>
    <!-- <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-forward</v-icon>
      </template>
    </v-breadcrumbs> -->

    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
  </div>
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
          href: 'breadcrumbs_User_details',
        },
      ],
    }),
  }
</script>
<template>
  <div>

    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <!-- mdi chevron right is the icon for angle bracket used  -->
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
          disabled: true,
          // If the condition is true then the homepage button does not have a hyperlink along with it, making it disabled
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

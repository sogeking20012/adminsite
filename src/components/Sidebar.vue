<template>
    <v-navigation-drawer v-if="drawer" app>
      <v-img
        height="140"
        class="pa-4"
        src="../assets/blue.jpg"
      >
        <div class="text-center">
          <v-avatar class="mb-4" color="grey darken-1" size="64">
            <v-img
              aspect-ratio="30"
            />
          </v-avatar>
          <h2 class="white--text">ScanSaver</h2>
        </div>
      </v-img>
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="[icon, text] in links" :key="icon" link>
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
  
          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </template>
  
  <script>
  export default {
    name: "Sidebar",
    props: ["drawer"],
    data() {
      return {
        links: [
          ["mdi-microsoft-windows", "Dashboard"],
          ["mdi-account", "Profile"],
          ["mdi-clipboard-list-outline", "Products"],
          ["mdi-cog", "System Setting"],
        ],
      };
    },
  };
  </script>
  
  <style scoped></style>
  
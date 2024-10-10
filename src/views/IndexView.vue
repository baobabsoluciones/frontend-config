<template>
  <v-app>
    <core-app-drawer
      style="position: fixed !important; z-index: 900 !important"
    />
    <core-app-view />
  </v-app>
</template>

<script setup>
import { useGeneralStore } from '@/stores/general'
import AuthService from '@/services/AuthService'
import CoreAppView from '@/components/AppView.vue'
import CoreAppDrawer from '@/components/AppDrawer.vue'
import { useRouter } from 'vue-router'
import { ref, computed, defineExpose } from 'vue'

const generalStore = useGeneralStore()
const router = useRouter()

// Check if user is logged in
if (AuthService.isAuthenticated()) {
  // Launch INITIALIZE_DATA action
  generalStore.initializeData()
}
</script>

<style></style>

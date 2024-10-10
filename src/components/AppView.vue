<template>
  <div class="main-container">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CoreAppView',
  components: {},
  data: () => ({
  }),
})
</script>

<style></style>

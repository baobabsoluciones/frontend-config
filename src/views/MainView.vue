<template>
  <div class="main-view">
    <header class="main-header">
      <h1>Main View Header</h1>
    </header>
    <main class="main-content">
      <p>This is the main content area.</p>
    </main>
  </div>
</template>

<script>
export default {
  name: 'MainView',
}
</script>

<style scoped>
.main-view {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main-header,
.main-footer {
  background-color: #f8f9fa;
  padding: 1rem;
  text-align: center;
}

.main-content {
  flex: 1;
  padding: 1rem;
}
</style>

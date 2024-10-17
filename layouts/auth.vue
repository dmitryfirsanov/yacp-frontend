<template>
  <div class="auth-layout">
    <main class="auth-layout__content">
      <slot></slot>
    </main>
  </div>
</template>

<style lang="scss">
.auth-layout {
  max-width: 100vw;
  min-height: 100vh;

  display: flex;
  padding: 0;
}
</style>

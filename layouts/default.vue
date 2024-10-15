<template>
  <div class="layout">
    <PageHeader class="layout__header" />

    <main class="layout__content">
      <slot></slot>
    </main>
  </div>
</template>

<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  
  min-height: 100vh;
  padding: 0 6rem;

  &__content {
    flex: 1 0 auto;
  }
}
</style>

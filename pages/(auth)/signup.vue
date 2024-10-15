<script setup lang="ts">
const email = ref('');
const password = ref('');
</script>

<template>
  <div class="auth-page">
    <section class="auth-page__section">
      <img
        class="auth-page__bg"
        src="/assets/images/bg-auth.webp"
        alt=""
      />
    </section>
    <section class="auth-page__section">
      <form
        class="auth-page__form"
        @submit.prevent
      >
        <h2 class="auth-page__variant">Регистрация</h2>
        <div class="auth-page__form-field">
          <label for="email">Email</label>
          <InputText
            id="email"
            v-model="email"
            placeholder="mail@mail.ru"
          />
        </div>
        <div class="auth-page__form-field">
          <label for="password">Пароль</label>
          <Password
            v-model="password"
            id="password"
            :feedback="false"
            toggleMask
          />
        </div>
        <div class="auth-page__buttons">
          <Button
            class="auth-page__button"
            as="router-link"
            to="/signin"
            severity="secondary"
            text
            >Уже есть аккаунт?</Button
          >
          <Button class="auth-page__button">Регистрация</Button>
        </div>
      </form>
    </section>
  </div>
</template>

<style lang="scss">
.auth-page {
  display: flex;
  width: 100%;
  height: 100%;

  &__section {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__form {
    padding: 24px;
    border-radius: 16px;
    background-color: var(--p-soho-400);

    &-field {
      display: flex;
      flex-direction: column;
      gap: 6px;
      margin-bottom: 20px;

      label {
        font-weight: 600;
      }
    }
  }

  &__buttons {
    display: flex;
    gap: 20px;
    justify-content: flex-end;
  }
}
</style>

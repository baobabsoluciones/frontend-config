<template>
  <LogInSignUp />
</template>

<script>
import AuthService from '@/services/AuthService'
import { inject } from 'vue'
import LogInSignUp from '@/components/LogInSignUp.vue'

export default {
  components: {
    LogInSignUp,
  },
  data() {},
  methods: {},
}
</script>

<style lang="scss">
.sign-in {
  position: relative;
  min-height: 100vh;
  background-color: var(--primary-light);
  display: flex;
  justify-content: center;
  align-items: center;
}

.sign-in::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.281);
  z-index: 1;
}

.modal {
  border-radius: 2px;
  padding: 30px;
  width: 285px;
  background-color: rgba(255, 255, 255);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  overflow: clip;
  z-index: 2;
}

.input {
  width: 220px;
  padding-top: 0px;
  margin-top: 0px;

  font-size: 12px !important;

  @media only screen and (min-width: 960px) {
    font-size: 12px !important;
  }

  @media only screen and (min-width: 1264px) {
    font-size: 13px !important;
  }

  @media only screen and (min-width: 1904px) {
    font-size: 13px !important;
  }
}

.logo {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 40px;
  width: 41px;
  margin: 0px 20px 20px 0px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.title {
  font-size: 28px !important;
  font-weight: 500 !important;
}

.form-content {
  display: flex;
  flex-direction: column;
}

.label {
  font-size: 12px;
  font-weight: bold;
}

.input {
  margin-bottom: 10px;
}
</style>

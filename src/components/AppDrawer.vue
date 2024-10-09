<template>
  <Suspense>
    <MAppDrawer
      :visible="true"
      :width="250"
      @update:rail="mini = !mini"
      style="position: fixed !important"
    >
      <template #logo>
        <div class="mt-2">
          <v-img
            position="left"
            height="30"
            class="ml-3"
            v-if="mini"
            src="@/assets/logo/logo.png"
          />
          <v-img
            height="30"
            position="left"
            class="ml-3"
            v-else
            src="@/assets/logo/full_logo.png"
          />
        </div>
      </template>
      <template #menu>
        <template v-for="generalItem in generalPages" :key="generalItem.title">
          <v-list-item
            :base-color="'var(--title)'"
            :color="'var(--accent)'"
            :class="{ 'non-clickable': !generalItem.to }"
            :to="generalItem.to"
          >
            <div class="d-flex align-center">
              <v-icon v-if="generalItem.icon" left>{{
                generalItem.icon
              }}</v-icon>
              <h4 class="ml-4" v-if="!mini">{{ generalItem.title }}</h4>
            </div>
          </v-list-item>
        </template>
      </template>
      <template #actions>
        <template v-for="action in actions" :key="action.title">
          <v-list-item
            :base-color="'var(--title)'"
            :color="'var(--accent)'"
            @click="action.action"
          >
            <div class="d-flex align-center">
              <v-icon v-if="action.icon" left>{{ action.icon }}</v-icon>
              <h4 class="ml-4" v-if="!mini">{{ action.title }}</h4>
            </div>
          </v-list-item>
        </template>
      </template>
    </MAppDrawer>
  </Suspense>
  <MBaseModal
    v-model="confirmSignOutModal"
    :closeOnOutsideClick="false"
    :title="$t('logOut.title')"
    :buttons="[
      {
        text: $t('logOut.accept'),
        action: 'save',
        class: 'primary-btn',
      },
      {
        text: $t('logOut.cancel'),
        action: 'cancel',
        class: 'secondary-btn',
      },
    ]"
    @save="signOut"
    @cancel="confirmSignOutModal = false"
    @close="confirmSignOutModal = false"
  >
    <template #content>
      <v-row class="d-flex justify-center pr-2 pl-2 pb-5 pt-3">
        <span> {{ $t('logOut.message') }}</span>
      </v-row>
    </template>
  </MBaseModal>
</template>

<script lang="ts">
import { defineComponent, Suspense } from 'vue'
import { useGeneralStore } from '@/stores/general'
import AuthService from '@/services/AuthService'

export default defineComponent({
  name: 'CoreAppDrawer',
  components: {},
  props: {},
  data: () => ({
    model: 1,
    mini: true,
    hover: true,
    store: useGeneralStore(),
    confirmSignOutModal: false,
  }),
  watch: {},
  computed: {
    generalPages() {
      return [
        {
          title: 'Main',
          icon: 'mdi-home',
          to: '/main',
        },
      ]
    },
    actions() {
      return [
        {
          title: 'Logout',
          icon: 'mdi-logout',
          action: this.confirmSignOut,
        },
      ]
    },
  },
  methods: {
    confirmSignOut() {
      this.confirmSignOutModal = true
    },
    signOut() {
      AuthService.logout()
      this.$router.push('/sign-in')
    },
  },
})
</script>

<style scoped>
h4 {
  font-size: 0.9em !important;
}

.page-selected {
  color: var(--accent) !important;
  caret-color: var(--accent) !important;
}

.non-clickable {
  color: var(--primary-variant) !important;
}
</style>

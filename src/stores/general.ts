import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', {
  state: () => ({
    notifications: [] as {
      message: string
      type: 'success' | 'warning' | 'info' | 'error'
    }[],
    user: {},
  }),
  actions: {
    async initializeData() {
    },

    addNotification(notification: {
      message: string
      type: 'success' | 'warning' | 'info' | 'error'
    }) {
      this.notifications.push(notification)
    },

    removeNotification(index: number) {
      this.notifications.splice(index, 1)
    },

    resetNotifications() {
      this.notifications = []
    },
  },
  getters: {
    getNotifications(): any {
      return this.notifications
    },

    getUser(): any {
      return this.user
    },
  },
})

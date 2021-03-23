<template>
  <div class="notifications">
    <div class="notifications-heading">
      <div class="notifications-heading__title">
        Notifications
      </div>
      <div class="notifications-heading__clear">
        Mark all as read
      </div>
    </div>
    <div class="notifications-list">
      <template v-for="notification in notifications">
        <NotificationItem
          :key="notification.uuid"
          :notification="notification">
        </NotificationItem>
      </template>
    </div>
  </div>
</template>

<script>
import NotificationItem from '../components/NotificationListItem.vue'
import {getNotifications} from '../api/mockAPI.js'

export default {
  name: 'NotificationList',
  components: {
    NotificationItem
  },
  created() {
    this.getNotifications()
  },
  data() {
    return {
      notifications: null,
    }
  },
  methods: {
    async getNotifications() {
      try {
        this.notifications = await getNotifications()
      } catch (error) {
        console.log(error)
        throw error
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/style/_variables.scss';

  .notifications {
    position: absolute;
    top: calc(#{$topbar-height} + 1rem);
    right: 2rem;
    width: 600px;
    height: auto;
    border: 1px solid $grey-light;
    background-color: $white;
    box-sizing: border-box;
    padding: 2rem;
    border-radius: $border-radius;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
    &-heading {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid $grey-light;
      margin-bottom: 1rem;
      padding-bottom: 1rem;
      &__title {
        font-size: $large-font;
        font-weight: 600;
      }
      &__clear {
        font-size: $small-font;
        color: $text-secondary;
        &:hover {
          color: $black;
          cursor: pointer;
        }
      }
    }
  }
</style>
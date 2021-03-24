<template>
  <nav class="topbar">
    <template v-if="showNotificationList">
      <NotificationList></NotificationList>
    </template>
    <img src="https://jumbleberry.com/assets/images/logo-jumbleberry.svg" 
      alt="Jumbleberry Company Logo"/>
    <div></div>
    <div class="topbar-notification-toggle" @click="toggleNotificationList">
    </div>
    <div class="topbar-details">
      <div class="topbar-details__name">
        {{account.name}}
      </div>
      <div class="topbar-details__revenue">
        {{account.revenue}}
      </div>
    </div>
  </nav>
</template>

<script>
import NotificationList from '../components/NotificationList.vue'

export default {
  name: 'TopBar',
  components: {
    NotificationList
  },
  data() {
    return {
      showNotificationList: false,
      account: {
        name: 'Ian Elliot',
        revenue: '$68,123.00'
      }
    }
  },
  methods: {
    toggleNotificationList() {
      this.showNotificationList = !this.showNotificationList
    },
  }
}
</script>

<style lang="scss" scoped>
  @import '@/style/_variables.scss';
  .topbar {
    width: 100%;
    height: $topbar-height;
    padding: 0 1rem;
    box-sizing: border-box;
    border-bottom: 1px solid $grey-light;
    display: grid;
    grid-template-columns: 100px auto 50px 150px;
    column-gap: 2rem;
    align-items: center;
    justify-items: stretch;
    &-notification-toggle {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      width: 50px;
      border-radius: 100%;
      background-color: $light-blue;
      &:hover {
        background-color: darken($light-blue, 10%);
        cursor: pointer;
      }
    }
    &-details {
      text-align: right;
      &__name {
        font-size: $small-font;
      }
      &__revenue {
        font-size: $large-font;
        font-weight: 600;
      }
    }
  }
</style>
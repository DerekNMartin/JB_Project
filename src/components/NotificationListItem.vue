<template>
  <div class="notifications-item">
    <div class="notifications-item-img"></div>
    <div class="notifications-item-details">
      <div class="notifications-item-details__title">
        {{notification.title}}
      </div>
      <div class="notifications-item-details__description">
        {{notification.description}}
      </div>
    </div>
    <div class="notifications-item-actions">
      <div
        :class="[notification.readStatus === 'read'
          ? 'notifications-item-actions__clear--done' : '',
            'notifications-item-actions__clear']"
        :title="notification.readStatus === 'read' ? 'Read' : 'Mark as Read' ">
      </div>
      <div class="notifications-item-actions__time">
        {{notification.dateCreated}}
      </div>
    </div>
    <div class="notifications-item-label">
      {{notification.campaign.name}}
    </div>
    <div class="notifications-item-organizations">
      <div class="notifications-item-organizations__label">
        Organizations
      </div>
      <div class="notifications-item-organizations-container">
        <template v-for="organization in notification.organizations">
          <div :key="organization.uuid"
            class="notifications-item-organizations__bubble"
            :title="organization.name">
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotificationListItem',
  props: ['notification'],
}
</script>

<style lang="scss" scoped>
  @import '@/style/_variables.scss';

  .notifications-item {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid $grey-light;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "img details actions"
      ". label organizations";
    column-gap: 1rem;
    row-gap: 1rem;
    &:hover {
      border-radius: $border-radius;
      background-color: lighten($light-blue, 3%);
      cursor: pointer;
    }
    &-img {
      grid-area: "img";
      width: 50px;
      height: 50px;
      background-color: $light-blue;
      border-radius: 100%;
    }
    &-details {
      grid-area: details;
      &__title {
        font-weight: 600;
      }
      &__description {
        font-size: $small-font;
        color: $text-secondary;
      }
    }
    &-actions {
      grid-area: actions;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      &__clear {
        width: 15px;
        height: 15px;
        background-color: $main-blue;
        border-radius: 100%;
        &--done {
          background-color: $white;
          border: 2px solid $main-blue;
          box-sizing: border-box;
        }
      }
      &__time {
        font-size: $small-font;
        color: $text-secondary;
        font-style: italic;
      }
    }
    &-label {
      grid-area: label;
      display: flex;
      align-items: center;
      font-size: $small-font;
      color: $text-secondary;
      font-weight: 600;
    }
    &-organizations {
      grid-area: organizations;
      display: flex;
      align-items: center;
      &-container {
        display: flex;
      }
      &__label {
        font-size: $small-font;
        color: $text-secondary;
        font-style: italic;
        margin-right: 0.5rem;
      }
      &__bubble {
        width: 30px;
        height: 30px;
        border: 2px solid $white;
        background-color: $dark-blue;
        border-radius: 100%;
        margin-right: -0.5rem;
      }
    }
  }
</style>
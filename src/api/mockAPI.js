const notificationList = [
  {
    uuid: 'aaa-bbb',
    dateCreated: '15 mins ago',
    readStatus: 'unread',
    priority: 'urgent',
    title: 'INH Hair has PAUSED',
    description: 'Campaign has been temporarily paused. Any ads should be immediately paused.',
    campaign: {
      uuid: 'campaign-abc',
      name: 'INH Hair'
    },
    organizations: [
      {
        name: 'Organization 1',
        uuid: 'organization-abc'
      },
      {
        name: 'Organization 2',
        uuid: 'organization-abc-abc'
      },
      {
        name: 'Organization 3',
        uuid: 'organization-abc-abc'
      },
    ],
    invoiceUUID: null,
    profilePicture: null,
  },
  {
    uuid: 'aaa-bbb-aaa-bbb',
    dateCreated: '30 hours ago',
    readStatus: 'read',
    priority: 'urgent',
    title: 'Campaign X performance has increased by 5%',
    description: 'Performance on Campaign X has increased by 5% since yesterday!',
    campaign: {
      uuid: 'campaign-abc',
      name: 'Campaign X'
    },
    organizations: [
      {
        name: 'Organization 1',
        uuid: 'organization-abc'
      },
      {
        name: 'Organization 2',
        uuid: 'organization-abc-abc'
      },
      {
        name: 'Organization 3',
        uuid: 'organization-abc-abc'
      },
    ],
    invoiceUUID: null,
    profilePicture: null,
  },
  {
    uuid: 'aaa-bbb',
    dateCreated: '10 days ago',
    readStatus: 'unread',
    priority: 'urgent',
    title: 'You have been approved on Campaign X ',
    description: 'Some description on being approved on Campaign X.',
    campaign: {
      uuid: 'campaign-abc',
      name: 'Campaign X'
    },
    organizations: [
      {
        name: 'Organization 1',
        uuid: 'organization-abc'
      },
      {
        name: 'Organization 2',
        uuid: 'organization-abc-abc'
      },
    ],
    invoiceUUID: null,
    profilePicture: null,
  }
]

export async function getNotifications() {
  try {
    return notificationList
  } catch (error) {
    throw error
  }
}
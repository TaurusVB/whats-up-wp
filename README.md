# WhatsUpApp - Messenger Clone

Welcome to the WhatsUpApp repository! This project is a messaging application inspired by the popular Messenger app.
<div align="left">
  <img height="400" src="https://res.cloudinary.com/dvlinx4rz/image/upload/v1700133657/messanger-wp_a5p3au.png"  />
</div>

###

## Features

- **Authentication:** Users can sign in using their GitHub or Google accounts.
- **User Presence:** The app displays whether a user is online or offline.
- **Profile Customization:** Users can change their nickname and avatar.
- **Messaging:** Send and receive messages with individual users or in group chats.
- **Read Receipts:** Check if your messages have been read by other participants.
- **Active Chats:** View a list of ongoing conversations.
- **Group Chats:** Create and participate in group conversations.
- **Chat Deletion:** Ability to delete individual and group chats.

## Technologies Used

- Real-time messaging using Pusher
- Message notifications and alerts
- Tailwind design for sleek UI
- Tailwind animations and transition effects
- Full responsiveness for all devices
- Credential authentication with NextAuth
- Google authentication integration
- Github authentication integration
- File and image upload using Cloudinary CDN
- Client form validation and handling using react-hook-form
- Server error handling with react-toast
- Message read receipts
- Online/offline user status
- Group chats and one-on-one messaging
- Message attachments and file sharing
- User profile customization and settings
- Handling relations between Server and Child components in a real-time environment
- Creating and managing chat rooms and channels

## Installation and Setup

### Cloning the repository

```shell
git clone https://github.com/TaurusVB/whats-up-wp.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
DATABASE_URL=

NEXTAUTH_SECRET=

GITHUB_ID=
GITHUB_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

NEXT_PUBLIC_PUSHER_APP_KEY=
PUSHER_APP_ID=
PUSHER_SECRET=
```

### Start the app

```shell
npm run dev
```

## About the Project

This project was created with the guidance of a [YouTube video](https://www.youtube.com/watch?v=PGPGcKBpAk8&list=WL&index=26&ab_channel=CodeWithAntonio). provided by CodeWithAntonio. I am grateful to CodeWithAntonio and other educational resources that have taught me how to develop software and use various technologies.

I always value opportunities for learning and skill improvement, and I hope that this project will be beneficial for others who also wish to learn software development.

Thank you for your support and education!

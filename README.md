# Onfido webview

## Requirements

- [ngrok](https://ngrok.com/download)

## Getting Started

### Server

1. Open a terminal window

   ```
   # enter in server folder
   cd server/
   # install dependency
   npm i // or pnpm i or yarn add (only for the first time)
   # run the server
   node app.js
   ```

2. In another window terminal
   ```
   # bind port 3000 to https
   ngrok http 3000
   ```

### Client

1. Copy the ngrock `https` link and paste it in _.env_ EXPO_PUBLIC_WEBVIEW_URI

   ```
   <WebView
       source={{
           uri: process.env.EXPO_PUBLIC_WEBVIEW_URI,
       }}
       ...
   />
   ```

2. From api get token and id and paste here

   ```
    // get this token from api/postman
    const token = "//here";
    // get this id from api/postman
    const workflowRunId = "//here";
   ```

3. In another terminal window run
   ```
   # enter in app folder
   cd app
   # install dependency (only for the first time)
   npm i
   # run the expo project
   npm run andorid // or npm run ios for Apple device
   ```

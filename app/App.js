/* import * as React from 'react'; */
import { Camera } from "expo-camera";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);

  // get this token from api/postman
  const token = "";
  // get this id from api/postman
  const workflowRunId = "";

  const runFirst = `
      Onfido.init({
        language: "it_IT",
        region: "EU",
        token: "${token}",
        containerId: "onfido-mount",
        workflowRunId: "${workflowRunId}",
        onComplete: function (data) {
          console.log("everything is complete");
        },
        onUserExit: function (userExitCode) {
          console.log(userExitCode);
        },
        onError: function (error) {
          console.log(error);
        },
        isWebView: true,
      });
    true;
    `;

  useEffect(() => {
    (async function () {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: process.env.EXPO_PUBLIC_WEBVIEW_URI,
        }}
        originWhitelist={["*"]}
        scalesPageToFit
        startInLoadingState={true}
        useWebkit
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        javaScriptEnabled={true}
        javaScriptEnabledAndroid={true}
        injectedJavaScript={runFirst}
        onMessage={(event) => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 40,
    marginHorizontal: 5,
    borderWidth: 1,
  },
});

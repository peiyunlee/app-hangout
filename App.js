// import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider,StatusBar } from "native-base";
import theme from "./theme.config";
import Loading from "./src/pages/Loading";
import JourneyList from "./src/pages/JourneyList";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      {/* <Loading /> */}
      <JourneyList />
    </NativeBaseProvider>
  );
}

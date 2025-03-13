import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
 
function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <Text selectable>This Text should be selectable but can not be selected on old architecture on android from react native version 0.77 onwards</Text>
          <Text>|  this Text is non-selectable as it is not using selectable prop |</Text>
        </View>
      </SafeAreaView>
</SafeAreaProvider>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});
 
export default App;
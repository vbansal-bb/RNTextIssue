import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
 
function App(): React.JSX.Element {
  return (
        <View style={styles.container}>
          <Text selectable>This text should be selectable but can not be selected on old architecture</Text>
        </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20
  },
  
});
 
export default App;
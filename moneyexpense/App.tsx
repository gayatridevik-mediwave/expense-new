import React from 'react';
import {StyleSheet} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

function App(): JSX.Element {
  return (
    <LinearGradient
      colors={['#08979D', '#46346e1c', '#48376a08', '#521cc203']}
      style={styles.linearGradient}
    />
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});

export default App;

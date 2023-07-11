/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function PreviousNext() {
  return (
    <View style={styles.monthyear}>
      <View style={styles.monthimage}>
        <TouchableOpacity>
          <Icon name="keyboard-arrow-left" size={30} color="#4D4D4D" />
        </TouchableOpacity>
        <Text
          style={{
            color: '#4D4D4D',
            fontSize: 23,
          }}>
          June 2023
        </Text>
        <TouchableOpacity>
          <Icon name="keyboard-arrow-right" size={30} color="#4D4D4D" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  monthimage: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  monthyear: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default PreviousNext;

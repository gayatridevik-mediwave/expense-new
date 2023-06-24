import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.contentext1}>Welcome back</Text>
        <Text style={styles.contentext2}>Gayatri Devi</Text>
      </View>

      <View style={styles.notifyaccount}>
        <Icon name="notifications" size={35} color="#fff" />
        <Icon
          style={styles.iconaccount}
          name="account-circle"
          size={35}
          color="#fff"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentext1: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Varela-Regular',
  },
  contentext2: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Varela-Regular',
  },
  notifyaccount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconaccount: {
    marginLeft: 20,
  },
});
export default Header;

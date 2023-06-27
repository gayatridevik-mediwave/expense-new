import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';

function Footer() {
  return (
    <View style={styles.background}>
      <View>
        <View style={{}}>
          <View style={styles.footeralign}>
            <TouchableOpacity>
              <Image source={require('../../assets/home.png')} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image source={require('../../assets/stack.png')} />
            </TouchableOpacity>

            <ImageBackground
              style={styles.imageback}
              source={require('../../assets/circleback.png')}>
              <TouchableOpacity>
                <Image
                  style={styles.addalign}
                  source={require('../../assets/add.png')}
                />
              </TouchableOpacity>
            </ImageBackground>

            <TouchableOpacity>
              <Image source={require('../../assets/money.png')} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image source={require('../../assets/setting.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    height: 80,
    // borderColor: 'green',
    // borderWidth: 4,
    backgroundColor: '#fff',
    justifyContent: 'center',
    elevation: 2,
  },
  footeralign: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  addalign: {
    position: 'absolute',
    zIndex: 2,
    width: 23,
    height: 23,
    // backgroundColor: 'black',
    top: 35,
    right: 34,
    // bottom: 30,
  },
  imageback: {
    width: 88,
    height: 88,
    marginBottom: 50,
  },
});

export default Footer;

import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';

interface FooterProps {
  onPressAddbtn?: () => any;
}

const Footer: React.FC<FooterProps> = ({onPressAddbtn}) => {
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
              <TouchableOpacity onPress={onPressAddbtn}>
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
};

const styles = StyleSheet.create({
  background: {
    height: 80,
    bottom: 0,
    backgroundColor: '#fff',
    justifyContent: 'center',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 2,
    shadowRadius: 2,
    elevation: 5,
    shadowColor: '#000',
  },
  footeralign: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  addalign: {
    position: 'absolute',
    zIndex: 2,
    width: 23,
    height: 23,
    top: 35,
    right: 34,
  },
  imageback: {
    position: 'relative',
    width: 88,
    height: 88,
    marginBottom: 60,
  },
});

export default Footer;

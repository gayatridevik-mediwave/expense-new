/* eslint-disable react-native/no-inline-styles */
import React, {Fragment} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ChartCategoryList from '../../UserData/datachart';

function ChartCategory() {
  // console.log('display', ChartCategoryList);
  return (
    <View>
      {ChartCategoryList.map((item, idx) => {
        return (
          <Fragment key={idx}>
            <View style={styles.innercard}>
              <View style={styles.splitcard}>
                <View
                  style={[
                    styles.backcoloricon,
                    {
                      backgroundColor: item.colorIcon,
                      borderColor: item.borderColor,
                      borderWidth: 3,
                    },
                  ]}>
                  <Icon name={item.catIcon} size={25} color="#fff" />
                </View>
                <View>
                  <Text style={styles.amountTitle}>{item.catTitle}</Text>
                  <Text style={styles.percentageTitle}>{item.percentage}</Text>
                </View>
              </View>
              <View>
                <Text style={styles.textamount}>₹ {item.catAmount}</Text>
              </View>
            </View>
          </Fragment>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  innercard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowOffset: {width: 3, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 2,
    padding: 15,
    marginBottom: 20,
  },
  splitcard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backcoloricon: {
    width: 48,
    height: 48,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  amountTitle: {
    fontSize: 16,
    marginLeft: 15,
    color: '#272727',
  },
  percentageTitle: {
    fontSize: 12,
    marginLeft: 15,
    color: '#7D7D7D',
  },
  textamount: {
    fontSize: 16,
    color: '#5E5E5E',
  },
});

export default ChartCategory;

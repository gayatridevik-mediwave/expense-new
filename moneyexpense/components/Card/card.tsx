/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MonenyDetails from '../../UserData/userdata';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Card() {
  return (
    <>
      <View style={styles.cardback}>
        {MonenyDetails.map((item,index) => {
          return (
            <View key={index} >
              <View  style={styles.displayMonth}>
                <Text style={styles.displayContent}>{item.dateMonthYear}</Text>
              </View>

              <View style={styles.cardDesign}>
                <View style={styles.incomeDesgin}>
                  <Text style={styles.accountText}>Income</Text>
                  <Text style={styles.incomeText}>₹ {item.inAmt}</Text>
                </View>

                <View style={styles.expenseDesgin}>
                  <Text style={styles.accountText}>Expenses</Text>
                  <Text style={styles.expenseText}>₹ {item.expAmt}</Text>
                </View>
              </View>
              {item.categoryAmount.map((category,idx) => {
                return (
                  <>
                    <View key={idx} style={{}}>
                      <View style={styles.innercard}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}>
                          <View
                            style={{
                              width: 48,
                              height: 48,
                              backgroundColor: category.colorIcon,
                              borderRadius: 30,
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <Icon
                              style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}
                              name={category.catIcon}
                              size={35}
                              color="#fff"
                            />
                          </View>
                          <Text
                            style={{
                              fontSize: 16,
                              marginLeft: 15,
                              color: '#272727',
                            }}>
                            {category.catTitle}
                          </Text>
                        </View>

                        <View>
                          <Text
                            style={{fontSize: 18, color: category.colorPattern}}>
                            ₹ {category.catAmount}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </>
                );
              })}
            </View>
          );
        })}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cardback: {
    backgroundColor: '#fff',
    maxWidth: '100%',
    marginTop: 20,
    borderRadius: 20,
    // flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  innercard: {
    backgroundColor: '#fff',
    maxWidth: '100%',
    marginBottom: 20,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowOffset: {width: 3, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 2,
    marginHorizontal: 5,
    borderColor: 'green',
    padding: 15,
  },

  displayMonth: {
    marginBottom: 15,
    marginTop: 10,
  },
  displayContent: {
    fontSize: 18,
    color: '#4D4D4D',
  },
  cardDesign: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  incomeDesgin: {
    flexDirection: 'row',
    width: '43%',
    justifyContent: 'space-between',
  },
  expenseDesgin: {
    flexDirection: 'row',
    width: '48%',
    justifyContent: 'space-between',
  },
  accountText: {fontSize: 17, color: '#4D4D4D'},
  incomeText: {fontSize: 17, color: '#005257'},
  expenseText: {fontSize: 17, color: '#B91D1D'},
});
export default Card;

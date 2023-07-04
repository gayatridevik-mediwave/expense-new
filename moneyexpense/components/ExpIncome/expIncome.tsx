import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Datepicker from '../Datepicker/datepicker';
import DownArrow from '../../assets/downarrow';

function ExpIncome() {
  return (
    <View style={styles.cardback}>
      <Datepicker />
      <View>
        <View>
          <Text style={styles.callexpense}>Enter the amount</Text>
          <TextInput style={[styles.amountInput, styles.palceholderText]} placeholder="Select amount" />
          <DownArrow style={styles.downarrowbtn} />
        </View>

        <View>
          <Text style={styles.callexpense}>Choose cateogry</Text>
          <View style={{}}>
            <TextInput
              style={styles.amountInput}
              placeholder="Select category"
            />
            <DownArrow style={styles.downarrow} />
          </View>
        </View>

        <TouchableOpacity>
          <Text style={styles.category}>Add new category +</Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.callexpense}>Note</Text>
          <TextInput textAlignVertical="top"
            style={styles.amountInput}
            numberOfLines={5}
            multiline={true}
            placeholder="Add your notes here..."
          />
        </View>

        <TouchableOpacity style={styles.btnback}>
          <Text style={styles.addincomebtn}>Add income</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardback: {
    backgroundColor: '#fff',
    maxWidth: '100%',
    marginTop: 25,
    marginBottom: 40,
    borderRadius: 20,
    padding: 20,
    justifyContent: 'space-between',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  callexpense: {
    marginTop: 20,
    color: '#4D4D4D',
    fontSize: 18,
  },
  amountInput: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 10,
    shadowOffset: {width: 3, height: 1},
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 3,
    paddingHorizontal: 15,
    position: 'relative',
    fontFamily: 'Varela',
    fontColor: '#0000005e',
    fontSize: 16,
    flexDirection: 'column',
  },
  category: {
    color: '#08979D',
    fontSize: 18,
    textAlign: 'right',
    marginTop: 15,
  },
  downarrow: {
    position: 'absolute',
    right: 15,
    bottom: 20,
  },
  btnback: {
    marginTop: 40,
    backgroundColor: '#08979D',
    padding: 15,
    borderRadius: 40,
  },
  addincomebtn: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
  },
  downarrowbtn: {
    position: 'absolute',
    left: 40,
    bottom: 20,
  },
  palceholderText: {
    paddingHorizontal: 60,
  },
});

export default ExpIncome;

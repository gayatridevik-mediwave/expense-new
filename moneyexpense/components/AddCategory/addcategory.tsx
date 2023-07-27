/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Close from 'react-native-vector-icons/MaterialCommunityIcons';
import DownArrow from 'react-native-vector-icons/MaterialIcons';

function AddCategory({handleClose, isVisible}: any) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      categoryTitle: '',
      Icon: '',
      Color: '',
    },
  });

  // const {errors, touchedFields} = formState;
  // const {isTouched} = fieldState;

  // console.log('checking', touchedFields);

  const onSubmit = handleSubmit(data => console.log(data));
  const Category = [
    {key: '1', value: 'Food', image: require('../../assets/food.png')},
    {key: '2', value: 'Travel', image: require('../../assets/travel.png')},
    {key: '3', value: 'Geocery', image: require('../../assets/cart.png')},
  ];
  const Color = [
    {key: '1', value: 'Red', color: '#ff0000'},
    {key: '2', value: 'Blue', color: '#0000ff'},
    {key: '3', value: 'Purple', color: '#800080'},
  ];
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        presentationStyle="overFullScreen"
        visible={isVisible}
        onRequestClose={() => {
          handleClose();
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* Back */}
            <View style={styles.closedesign}>
              <Pressable
                onPress={() => {
                  handleClose();
                }}
                style={({pressed}) => [
                  {
                    backgroundColor: pressed ? '#F9F9F9' : 'white',
                    justifyContent: 'flex-end',
                    flexDirection: 'row',
                    borderRadius: 20,
                  },
                ]}>
                <Close style={{}} name="close" size={20} color="#08979D" />
              </Pressable>
            </View>

            {/* Body */}
            <View>
              <Text style={styles.callexpense}>Category title</Text>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({field: {onChange, onBlur, value}}) => {
                  return (
                    <>
                      <TextInput
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        style={[styles.amountInput, styles.palceholderText]}
                        placeholder="Enter the Category title"
                        placeholderTextColor="grey"
                      />
                      {errors.categoryTitle && (
                        <Text style={styles.errormessage}>
                          Cateogry Title is required.
                        </Text>
                      )}
                    </>
                  );
                }}
                name="categoryTitle"
              />
            </View>

            <View>
              <Text style={styles.callexpense}>Choose icon</Text>
              <View style={styles.selectDropdown}>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({field: {onChange, onBlur}}) => (
                    <SelectDropdown
                      data={Category}
                      onBlur={onBlur}
                      onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index);
                        onChange(selectedItem);
                      }}
                      buttonStyle={styles.dropdownBtnStyle}
                      renderCustomizedButtonChild={selectedItem => {
                        return (
                          <View style={styles.dropdownBtnChildStyle}>
                            {selectedItem ? (
                              <Image
                                source={selectedItem.image}
                                style={styles.dropdownBtnImage}
                              />
                            ) : null}
                            <Text style={styles.dropdownBtnTxt}>
                              {selectedItem
                                ? selectedItem.value
                                : 'Choose icon'}
                            </Text>
                            <DownArrow
                              name="arrow-drop-down"
                              style={styles.downarrow}
                              size={26}
                              color="#08979D"
                            />
                          </View>
                        );
                      }}
                      dropdownStyle={styles.dropdownDropdownStyle}
                      renderCustomizedRowChild={item => {
                        return (
                          <View style={styles.dropdownRowChildStyle}>
                            <Image
                              source={item.image}
                              style={styles.dropdownRowImage}
                            />
                            <Text style={styles.dropdownRowTxt}>
                              {item.value}
                            </Text>
                          </View>
                        );
                      }}
                    />
                  )}
                  name="Icon"
                />
                {errors.Icon && (
                  <Text style={styles.errormessage}>Icon is required.</Text>
                )}
              </View>
            </View>

            <View>
              <Text style={styles.callexpense}>Choose color</Text>
              <View style={styles.selectDropdown}>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({field: {onChange, onBlur}}) => (
                    <SelectDropdown
                      data={Color}
                      onBlur={onBlur}
                      onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index);
                        onChange(selectedItem);
                      }}
                      buttonStyle={styles.dropdownBtnStyle}
                      renderCustomizedButtonChild={selectedItem => {
                        return (
                          <View style={styles.dropdownBtnChildStyle}>
                            {selectedItem ? (
                              <View
                                style={[
                                  styles.dropdownRowImage,
                                  {backgroundColor: selectedItem.color},
                                ]}
                              />
                            ) : null}
                            <Text style={styles.dropdownBtnTxt}>
                              {selectedItem
                                ? selectedItem.value
                                : 'Choose color'}
                            </Text>
                            <DownArrow
                              name="arrow-drop-down"
                              style={styles.downarrow}
                              size={26}
                              color="#08979D"
                            />
                          </View>
                        );
                      }}
                      dropdownStyle={styles.dropdownDropdownStyle}
                      renderCustomizedRowChild={item => {
                        return (
                          <View style={styles.dropdownRowChildStyle}>
                            <View
                              style={[
                                styles.dropdownRowImage,
                                {backgroundColor: item.color},
                              ]}
                            />
                            <Text style={styles.dropdownRowTxt}>
                              {item.value}
                            </Text>
                          </View>
                        );
                      }}
                    />
                  )}
                  name="Color"
                />
                {errors.Color && (
                  <Text style={styles.errormessage}>Color is required.</Text>
                )}
              </View>
            </View>

            <View>
              <TouchableOpacity
                onPress={handleSubmit(onSubmit)}
                style={styles.btnback}>
                <Text style={styles.addincomebtn}>Add category</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
export default AddCategory;

const styles = StyleSheet.create({
  closedesign: {flexDirection: 'row', justifyContent: 'flex-end'},
  closeBtn: {
    width: 30,
    height: 30,
    backgroundColor: '#F9F9F9',
  },
  errormessage: {
    marginTop: 5,
    color: '#C1121F',
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
  callexpense: {
    marginTop: 20,
    fontSize: 18,
    color: '#4D4D4D',
  },
  selectDropdown: {
    marginTop: 20,
  },
  downarrow: {
    position: 'absolute',
    right: 15,
    bottom: 10,
  },
  palceholderText: {
    paddingHorizontal: 20,
    fontSize: 18,
    color: '#4D4D4D',
  },
  amountInput: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 10,
    shadowOffset: {width: 3, height: 1},
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 3,
    position: 'relative',
    fontSize: 16,
    flexDirection: 'column',
  },
  cardback: {
    backgroundColor: '#fff',
    marginTop: 25,
    marginBottom: 40,
    borderRadius: 20,
    padding: 20,
    justifyContent: 'space-between',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    postion: 'relative',
  },
  dropdownBtnStyle: {
    width: '100%',
    backgroundColor: '#FFF',
    borderWidth: 0,
    borderRadius: 10,
    shadowOffset: {width: 3, height: 1},
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 3,
  },
  dropdownBtnChildStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  dropdownBtnImage: {
    width: 30,
    height: 30,
  },
  dropdownBtnTxt: {
    color: '#0000005e',
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 20,
  },
  dropdownDropdownStyle: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowOffset: {width: 3, height: 1},
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 3,
  },
  dropdownRowChildStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  dropdownRowImage: {
    width: 35,
    height: 35,
    resizeMode: 'cover',
    borderRadius: 50,
  },
  dropdownRowTxt: {
    color: '#0000005e',
    textAlign: 'center',
    fontSize: 20,
    marginHorizontal: 20,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    zIndex: 3,
  },
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
});

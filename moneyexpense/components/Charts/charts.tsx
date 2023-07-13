/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {VictoryPie} from 'victory-native';
import ChartCategory from '../ChartCategory/chartcategory';
import PreviousNext from '../PreviousNext/previousnext';

interface ChartComponentProps {
  labelData?: any;
  colorExpense?: any;
  textColor?: any;
}

const ChartComponent: React.FC<ChartComponentProps> = ({
  labelData,
  colorExpense,
  textColor,
}) => {
  return (
    <View style={styles.cardback}>
      <View>
        <PreviousNext />
      </View>
      <View style={styles.chartlabel}>
        <VictoryPie
          style={{
            labels: {
              fontSize: 20,
              fill: 'white',
            },
          }}
          width={400}
          height={400}
          padAngle={1}
          innerRadius={100}
          labelRadius={({innerRadius}) => innerRadius + 10}
          colorScale={colorExpense}
          data={labelData}
        />
        <Text style={[styles.textamt, {color: textColor}]}>₹ 15,975</Text>
      </View>
      <ChartCategory />
    </View>
  );
};

const styles = StyleSheet.create({
  cardback: {
    backgroundColor: '#fff',
    maxWidth: '100%',
    marginTop: 20,
    borderRadius: 20,
    padding: 20,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 40,
  },
  chartlabel: {
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'relative',
  },
  textamt: {position: 'absolute', top: 185, fontSize: 30},
});
export default ChartComponent;

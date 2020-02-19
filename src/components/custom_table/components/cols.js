/* eslint-disable react/require-default-props */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes, Text, StyleSheet } from 'react-native';
import Cell from './cell';
import sum from '../utils';

const styles = StyleSheet.create({
  cols: { flexDirection: 'row' },
});

function Col(props) {
  const { data, style, width, heightArr, flex, textStyle } = props;

  return data ? (
    <View style={[width ? { width } : { flex: 1 }, flex && { flex }, style]}>
      {data.map((item, i) => {
        const height = heightArr && heightArr[i];
        return (
          <Cell
            key={i}
            data={item}
            width={width}
            height={height}
            textStyle={textStyle}
            {...props}
          />
        );
      })}
    </View>
  ) : null;
}

Cell.propTypes = {
  width: PropTypes.number,
  style: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
};

export default function Cols(props) {
  const { data, style, widthArr, heightArr, flexArr, textStyle } = props;
  const width = widthArr ? sum(widthArr) : 0;

  return data ? (
    <View style={[styles.cols, width && { width }]}>
      {data.map((item, i) => {
        const flex = flexArr && flexArr[i];
        const wth = widthArr && widthArr[i];
        return (
          <Col
            key={i}
            data={item}
            width={wth}
            heightArr={heightArr}
            flex={flex}
            style={style}
            textStyle={textStyle}
            {...props}
          />
        );
      })}
    </View>
  ) : null;
}

Cols.propTypes = {
  style: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
};

/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import { View, ViewPropTypes, Text } from 'react-native';
import sum from '../utils';
import Row from './row';

export default function Rows(props) {
  const { data, style, widthArr, heightArr, flexArr, textStyle } = props;
  const flex = flexArr ? sum(flexArr) : 0;
  const width = widthArr ? sum(widthArr) : 0;

  return data ? (
    <View style={[flex && { flex }, width && { width }]}>
      {data.map((item, i) => {
        const height = heightArr && heightArr[i];
        return (
          <Row
            key={i}
            data={item}
            widthArr={widthArr}
            height={height}
            flexArr={flexArr}
            style={style}
            textStyle={textStyle}
            {...props}
          />
        );
      })}
    </View>
  ) : null;
}

Rows.propTypes = {
  style: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
};

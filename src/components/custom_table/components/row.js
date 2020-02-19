import React, { Component } from 'react';
import { View, ViewPropTypes, Text, StyleSheet } from 'react-native';
import Cell from './cell';
import sum from '../utils';

export default class Row extends Component {
  static propTypes = {
    style: ViewPropTypes.style,
    textStyle: Text.propTypes.style,
  };

  render() {
    const { data, style, widthArr, height, flexArr, textStyle, ...props } = this.props;
    const width = widthArr ? sum(widthArr) : 0;

    return data ? (
      <View style={[height && { height }, width && { width }, styles.row, style]}>
        {data.map((item, i) => {
          const flex = flexArr && flexArr[i];
          const wth = widthArr && widthArr[i];
          return (
            <Cell
              key={i}
              data={item}
              width={wth}
              height={height}
              flex={flex}
              textStyle={textStyle}
              {...props}
            />
          );
        })}
      </View>
    ) : null;
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    overflow: 'hidden',
  },
});

/* eslint-disable react/prop-types */
import React from 'react';
import { View, Image, Text } from 'react-native';

// from https://flatuicolors.com/
const defaultColors = [
  '#ffb092', // emerald
  '#a9bee7', // peter river
  '#faf4ac', // wisteria
  '#70d8c9',
  '#ffbe60',
  '#ff7b49',
  '#a5cb54',
];

function sumChars(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
  }

  return sum;
}

class UserLogo extends React.PureComponent {
  render() {
    let {
      src,
      name,
      color,
      textColor = '#4a4a4a',
      colors = defaultColors,
      fontDecrease,
      size = 16,
      containerStyle,
      imageStyle,
      defaultName,
      radius = 0.5,
    } = this.props;

    if (!fontDecrease) fontDecrease = 2.5;

    if (!name) throw new Error('Avatar requires a name');

    if (typeof size !== 'number') size = parseInt(size);

    let abbr = name.charAt(0);

    if (name.startsWith('+')) {
      abbr = `+${abbr}`;
    }

    if (!abbr) abbr = defaultName;

    if (isNaN(radius)) radius = 0.5;

    const borderRadius = size * radius;

    const imageLocalStyle = {
      borderRadius,
    };

    const innerStyle = {
      borderRadius,
      borderWidth: 1,
      borderColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
    };

    if (size) {
      imageLocalStyle.width = innerStyle.width = size;
      imageLocalStyle.height = innerStyle.height = size;
    }

    let inner;
    if (src) {
      const props = {
        style: [imageLocalStyle, imageStyle],
        source: { uri: src },
      };

      inner = React.createElement(this.props.component || Image, props);
    } else {
      let background;
      if (color) {
        background = color;
      } else {
        // pick a deterministic color from the list
        const i = sumChars(name) % colors.length;
        background = colors[i];
      }

      innerStyle.backgroundColor = background;

      inner = <Text style={{ fontSize: size / fontDecrease, color: textColor }}>{abbr}</Text>;
    }

    return (
      <View>
        <View style={[innerStyle, containerStyle]}>{inner}</View>
      </View>
    );
  }
}

export default UserLogo;

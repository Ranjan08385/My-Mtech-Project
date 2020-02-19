import { Dimensions } from 'react-native';

export const responsiveHeight = h => {
  const { height } = Dimensions.get('window');
  return height * (h / 100);
};

export const responsiveWidth = w => {
  const { width } = Dimensions.get('window');
  return width * (w / 100);
};

export const responsiveFontSize = f => {
  const { width } = Dimensions.get('window');
  const tempHeight = (16 / 9) * width;
  return Math.sqrt(tempHeight ** 2 + width ** 2) * (f / 100);
};

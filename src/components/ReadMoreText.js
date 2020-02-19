/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { View } from 'react-native';
import Text from './customText';

export default class ReadMoreText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
    };
    this.getLength = '';
  }

  render() {
    const { showMore } = this.state;
    const { readMore, readLess, children, readMoreStyle, readLessStyle, style, lines } = this.props;

    const newReadMore = readMore || 'Read more';
    const newReadLess = readLess || 'Read less';

    const newReadMoreStyle = readMoreStyle || {
      color: '#E77936',
      marginLeft: 10,
      fontWeight: 'bold',
    };
    const newLessMoreStyle = readLessStyle || {
      color: '#E77936',
      // marginLeft: 10,
      fontWeight: 'bold',
    };
    const newStyle = style || { color: '#4a4a4a' };

    const newLine = showMore ? null : lines;

    return children ? (
      <View style={{ flex: 1 }}>
        <Text style={newStyle} numberOfLines={newLine || null}>
          {children}
          {'\n'}
          {showMore ? (
            <Text style={newLessMoreStyle} onPress={() => this.setState({ showMore: !showMore })}>
              {newReadLess}
            </Text>
          ) : null}
        </Text>
        {!showMore ? (
          <Text style={newReadMoreStyle} onPress={() => this.setState({ showMore: !showMore })}>
            {newReadMore}
          </Text>
        ) : null}
      </View>
    ) : null;
  }
}

//  <Text style={newStyle}>
//       {this.getLength.length > newCharLimit
//         ? children.substring(0, newCharLimit) + (showMore ? '' : '...')
//         : children}

//       {showMore ? children.substring(newCharLimit, this.getLength.length) : null}
//       {newCharLimit < this.getLength.length ? (
//         <Text
//           style={!showMore ? newReadMoreStyle : newLessMoreStyle}
//           onPress={() => this.setState({ showMore: !showMore })}
//         >
//           {!showMore ? newReadMore : newReadLess}
//         </Text>
//       ) : null}
//     </Text>

// componentWillMount() {
//   const { children } = this.props;
//   this.getLength = this.countLength(children);
//   console.log('all chars--->', this.getLength);
// }

// countLength = children => {
//   let length = 0;
//   if (typeof children === 'object') {
//     for (let i = 0; i < children.length; i++) {
//       if (typeof children[i] === 'object' && children[i].type.name === 'CustomText') {
//         length += children[i].props.children.length;
//       } else {
//         length += children[i].length;
//       }
//     }
//   } else {
//     length += children.length;
//   }
//   return length;
// };

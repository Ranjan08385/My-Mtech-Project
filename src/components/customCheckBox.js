import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  TouchableHighlight,
  View,
  ViewPropTypes as RNViewPropTypes
} from 'react-native';
import CustomText from './customText';

const ViewPropTypes = RNViewPropTypes || View.propTypes;

export default class CheckBox extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    ...ViewPropTypes,
    leftText: PropTypes.string,
    leftTextView: PropTypes.element,
    rightText: PropTypes.string,
    leftTextStyle: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object
    ]),
    rightTextView: PropTypes.element,
    rightTextStyle: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object
    ]),
    checkedImage: PropTypes.element,
    unCheckedImage: PropTypes.element,
    onClick: PropTypes.func.isRequired,
    isChecked: PropTypes.bool.isRequired,
    isIndeterminate: PropTypes.bool.isRequired,
    checkBoxColor: PropTypes.string,
    checkedCheckBoxColor: PropTypes.string,
    uncheckedCheckBoxColor: PropTypes.string,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    isChecked: false,
    isIndeterminate: false,
    leftTextStyle: {},
    rightTextStyle: {}
  };

  onClick() {
    this.props.onClick();
  }

  _renderLeft() {
    if (this.props.leftTextView) return this.props.leftTextView;
    if (!this.props.leftText) return null;
    return (
      <CustomText style={[styles.leftText, this.props.leftTextStyle]}>
        {this.props.leftText}
      </CustomText>
    );
  }

  _renderRight() {
    if (this.props.rightTextView) return this.props.rightTextView;
    if (!this.props.rightText) return null;
    return (
      <CustomText style={[styles.rightText, this.props.rightTextStyle]}>
        {this.props.rightText}
      </CustomText>
    );
  }

  _renderImage() {
    if (this.props.isIndeterminate) {
      return this.props.indeterminateImage
        ? this.props.indeterminateImage
        : this.genCheckedImage();
    }
    if (this.props.isChecked) {
      return this.props.checkedImage
        ? this.props.checkedImage
        : this.genCheckedImage();
    }
    return this.props.unCheckedImage
      ? this.props.unCheckedImage
      : this.genCheckedImage();
  }

  _getCheckedCheckBoxColor() {
    return this.props.checkedCheckBoxColor
      ? this.props.checkedCheckBoxColor
      : this.props.checkBoxColor;
  }

  _getUncheckedCheckBoxColor() {
    return this.props.uncheckedCheckBoxColor
      ? this.props.uncheckedCheckBoxColor
      : this.props.checkBoxColor;
  }

  _getTintColor() {
    return this.props.isChecked
      ? this._getCheckedCheckBoxColor()
      : this._getUncheckedCheckBoxColor();
  }

  genCheckedImage() {
    let source;
    if (this.props.isIndeterminate) {
      source = require('../assets/image/ic_indeterminate_check_box.png');
    } else {
      source = this.props.isChecked
        ? require('../assets/image/ic_check_box.png')
        : require('../assets/image/ic_check_box_outline_blank.png');
    }

    if (Platform.OS == 'web') {
      const win = Dimensions.get('window');
      return (
        <Image
          source={source}
          style={{
            width: 25,
            height: 25,
            tintColor: this._getTintColor()
          }}
        />
      );
    }
    return (
      <Image source={source} style={{ tintColor: this._getTintColor() }} />
    );
  }

  render() {
    return (
      <View style={{ flexDirection: 'row' } || styles.container}>
        {this._renderLeft()}
        <TouchableHighlight
          style={this.props.style}
          onPress={() => this.onClick()}
          underlayColor='transparent'
          disabled={this.props.disabled}
        >
          {this._renderImage()}
        </TouchableHighlight>
        {this._renderRight()}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  leftText: {
    flex: 1
  },
  rightText: {
    flex: 1,
    marginLeft: 10,
    alignSelf: 'center'
  }
});

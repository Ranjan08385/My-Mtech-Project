const React = require('react');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');
const ReactNative = require('react-native');

const {
  StyleSheet,
  TextInput,
  Animated,
  Easing,
  Text,
  View,
  Platform,
  ViewPropTypes,
} = ReactNative;

const textPropTypes = Text.propTypes || ViewPropTypes;
const textInputPropTypes = TextInput.propTypes || textPropTypes;
const propTypes = {
  ...textInputPropTypes,
  inputStyle: textInputPropTypes.style,
  labelStyle: textPropTypes.style,
  disabled: PropTypes.bool,
  style: ViewPropTypes.style,
};

const FloatingLabel = createReactClass({
  propTypes,

  getInitialState() {
    const state = {
      text: this.props.value,
      dirty: this.props.value || this.props.placeholder,
    };

    const style = state.dirty ? dirtyStyle : cleanStyle;
    state.labelStyle = {
      fontSize: new Animated.Value(style.fontSize),
      top: new Animated.Value(style.top),
    };

    return state;
  },

  componentWillReceiveProps(props) {
    if (
      typeof props.value !== 'undefined' &&
      props.value !== this.state.text &&
      props.value !== ''
    ) {
      this.setState({ text: props.value, dirty: !!props.value });
      this._animate(!!props.value);
    }
  },

  _animate(dirty) {
    const nextStyle = dirty ? dirtyStyle : cleanStyle;
    const { labelStyle } = this.state;
    const anims = Object.keys(nextStyle).map(prop => {
      return Animated.timing(
        labelStyle[prop],
        {
          toValue: nextStyle[prop],
          duration: 200,
        },
        Easing.ease
      );
    });

    Animated.parallel(anims).start();
  },

  _onFocus() {
    this._animate(true);
    this.setState({ dirty: true });
    if (this.props.onFocus) {
      this.props.onFocus(arguments);
    }
  },

  _onBlur(event) {
    let isTextEmpty = true;
    if (Platform.OS === 'web') {
      isTextEmpty = !event.target.value;
    } else {
      isTextEmpty = !this.state.text;
    }
    if (isTextEmpty) {
      this._animate(false);
      this.setState({ dirty: false });
    }

    if (this.props.onBlur) {
      this.props.onBlur(arguments);
    }
  },

  onChangeText(text) {
    this.props.onChangeText ? this.props.onChangeText(text) : this.setState({ text });
  },

  updateText(event) {
    const { text } = event.nativeEvent;

    this.props.onEndEditing ? this.props.onEndEditing(event) : this.setState({ text });
  },

  _renderLabel() {
    return (
      <Animated.Text
        ref="label"
        style={[
          this.state.labelStyle,
          styles.label,
          {
            color: this.state.dirty
              ? this.props.animatedTextColor
                ? this.props.animatedTextColor
                : '#4a4a4a'
              : '#AAA',
          },
          this.props.labelStyle,
        ]}
      >
        {this.props.children}
      </Animated.Text>
    );
  },

  render() {
    const props = {
      autoCapitalize: this.props.autoCapitalize,
      autoCorrect: this.props.autoCorrect,
      autoFocus: this.props.autoFocus,
      bufferDelay: this.props.bufferDelay,
      clearButtonMode: this.props.clearButtonMode,
      clearTextOnFocus: this.props.clearTextOnFocus,
      controlled: this.props.controlled,
      editable: this.props.editable,
      enablesReturnKeyAutomatically: this.props.enablesReturnKeyAutomatically,
      keyboardType: Platform.OS === 'web' ? undefined : this.props.keyboardType,
      multiline: this.props.multiline,
      numberOfLines: this.props.numberOfLines,
      onBlur: this._onBlur,
      onChange: this.props.onChange,
      onChangeText: this.onChangeText,
      onEndEditing: this.updateText,
      onFocus: this._onFocus,
      ref: this.props.myRef,
      onSubmitEditing: this.props.onSubmitEditing,
      password: this.props.secureTextEntry || this.props.password, // Compatibility
      placeholder: this.props.placeholder,
      secureTextEntry: this.props.secureTextEntry || this.props.password, // Compatibility
      returnKeyType: this.props.returnKeyType,
      selectTextOnFocus: this.props.selectTextOnFocus,
      selectionState: this.props.selectionState,
      selectionColor: this.props.selectionColor,
      style: [styles.input],
      testID: this.props.testID,
      accessibilityLabel: this.props.accessibilityLabel,
      value: this.props.value,
      underlineColorAndroid: this.props.underlineColorAndroid, // android TextInput will show the default bottom border
      onKeyPress: this.props.onKeyPress,
      maxLength: this.props.maxLength,
      onSelectionChange: this.props.onSelectionChange,
    };
    const elementStyles = [styles.element];

    if (this.props.inputStyle) {
      props.style.push(this.props.inputStyle);
    }

    if (this.props.style) {
      elementStyles.push(this.props.style);
    }

    return (
      <View style={elementStyles}>
        {this._renderLabel()}
        <TextInput className="input" {...props}></TextInput>
      </View>
    );
  },
});

const labelStyleObj = {
  marginTop: 21,
  color: '#AAA',
  position: 'absolute',
  fontFamily: 'Arial',
};

if (Platform.OS === 'web') {
  labelStyleObj.pointerEvents = 'none';
}

var styles = StyleSheet.create({
  element: {
    position: 'relative',
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#d4d4d4',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    borderTopColor: 'transparent',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    borderWidth: 1,
    color: '#4a4a4a',
    fontSize: 16,
    borderRadius: 0,
    marginTop: 20,
    fontFamily: 'Arial',
  },
  label: labelStyleObj,
});

var cleanStyle = {
  fontSize: 16,
  top: 7,
};

var dirtyStyle = {
  fontSize: 12,
  top: -17,
};

module.exports = FloatingLabel;

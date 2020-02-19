import Style from '../styles/customRadioButton.js';
import CustomText from './customText';
import Infotip from './customInfoTip';

const React = require('react');
const ReactNative = require('react-native');

const {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  LayoutAnimation,
  Platform,
  UIManager,
} = ReactNative;

export default class RadioForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_active_index: props.value,
    };
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this._renderButton = this._renderButton.bind(this);
  }

  static defaultProps = {
    radio_props: [],
    initial: 0,
    buttonColor: '#e77817',
    selectedButtonColor: '#e77817',
    formHorizontal: false,
    labelHorizontal: true,
    animation: true,
    labelColor: '#000',
    selectedLabelColor: '#000',
    selectedLabelSize: 'bold',
    labelSize: 'normal',
    wrapStyle: {},
    disabled: false,
  };

  updateIsActiveIndex(index) {
    this.setState({ is_active_index: index });
    this.props.onPress(this.props.radio_props[index], index);
  }

  componentWillReceiveProps(newprops) {
    this.setState({ is_active_index: newprops.value });
  }

  // This function is for clear the selection when we are using the library in multiple choice questions
  clearSelection() {
    this.setState({ is_active_index: -1 });
  }

  _renderButton(obj, i) {
    return (
      <RadioButton
        accessible={this.props.accessible}
        accessibilityLabel={
          this.props.accessibilityLabel
            ? `${this.props.accessibilityLabel}|${i}`
            : `${'radioButton' + '|'}${i}`
        }
        testID={
          this.props.testID
            ? `${this.props.testID}|${i}`
            : `${'radioButton' + '|'}${i}`
        }
        isSelected={this.state.is_active_index === i}
        obj={obj}
        key={i}
        index={i}
        buttonColor={
          this.state.is_active_index === i
            ? this.props.selectedButtonColor
            : this.props.buttonColor
        }
        buttonSize={this.props.buttonSize}
        buttonOuterSize={this.props.buttonOuterSize}
        labelHorizontal={this.props.labelHorizontal}
        labelColor={
          this.state.is_active_index === i
            ? this.props.selectedLabelColor
            : this.props.labelColor
        }
        labelSize={
          this.state.is_active_index === i
            ? this.props.selectedLabelSize
            : this.props.labelSize
        }
        labelStyle={this.props.labelStyle}
        style={this.props.radioStyle}
        animation={this.props.animation}
        disabled={this.props.disabled}
        onPress={(value, index) => {
          this.props.onPress(value, index);
          this.setState({ is_active_index: index });
        }}
        shouldEnableInfoButton={obj.shouldEnableInfoButton}
        infoDescription={obj.infoDescription}
        description={this.props.description}
      />
    );
  }

  render() {
    let render_content = false;
    if (this.props.radio_props.length) {
      render_content = this.props.radio_props.map(this._renderButton);
    } else {
      render_content = this.props.children;
    }
    return (
      <View
        style={[
          Style.radioFrom,
          this.props.style,
          this.props.formHorizontal && Style.formHorizontal,
        ]}
      >
        {render_content}
      </View>
    );
  }
}
export class RadioButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  static defaultProps = {
    isSelected: false,
    buttonColor: '#2196f3',
    selectedButtonColor: '#2196f3',
    labelHorizontal: true,
    disabled: false,
    idSeparator: '|',
  };

  componentDidUpdate() {
    if (this.props.animation) {
      LayoutAnimation.spring();
    }
  }

  render() {
    const c = this.props.children;

    const idSeparator = this.props.idSeparator ? this.props.idSeparator : '|';
    const idSeparatorAccessibilityLabelIndex = this.props.accessibilityLabel
      ? this.props.accessibilityLabel.indexOf(idSeparator)
      : -1;
    const idSeparatorTestIdIndex = this.props.testID
      ? this.props.testID.indexOf(idSeparator)
      : -1;

    const accessibilityLabel = this.props.accessibilityLabel
      ? idSeparatorAccessibilityLabelIndex !== -1
        ? this.props.accessibilityLabel.substring(
            0,
            idSeparatorAccessibilityLabelIndex
          )
        : this.props.accessibilityLabel
      : 'radioButton';
    const testID = this.props.testID
      ? idSeparatorTestIdIndex !== -1
        ? this.props.testID.substring(0, idSeparatorTestIdIndex)
        : this.props.testID
      : 'radioButton';

    const accessibilityLabelIndex =
      this.props.accessibilityLabel && idSeparatorAccessibilityLabelIndex !== -1
        ? this.props.accessibilityLabel.substring(
            idSeparatorAccessibilityLabelIndex + 1
          )
        : '';
    var testIDIndex =
      this.props.testID && testIDIndex !== -1
        ? this.props.testID.split(testIDIndex + 1)
        : '';

    let renderContent = false;
    renderContent = c ? (
      <View
        style={[
          Style.radioWrap,
          this.props.style,
          !this.props.labelHorizontal && Style.labelVerticalWrap,
        ]}
      >
        {c}
      </View>
    ) : (
      <View
        style={[
          Style.radioWrap,
          this.props.style,
          !this.props.labelHorizontal && Style.labelVerticalWrap,
        ]}
      >
        <RadioButtonInput
          {...this.props}
          accessibilityLabel={`${accessibilityLabel}Input${accessibilityLabelIndex}`}
          testID={`${testID}Input${testIDIndex}`}
        />

        <RadioButtonLabel
          {...this.props}
          accessibilityLabel={`${accessibilityLabel}Label${accessibilityLabelIndex}`}
          testID={`${testID}Label${testIDIndex}`}
        />
        {this.props.shouldEnableInfoButton === true ? (
          <View style={{ position: 'absolute', right: 5 }}>
            <Infotip OptionsField={this.props.infoDescription}></Infotip>
          </View>
        ) : null}
      </View>
    );
    return <View style={this.props.wrapStyle}>{renderContent}</View>;
  }
}
export class RadioButtonInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
      buttonColor: props.buttonColor || '#2196f3',
    };
  }

  render() {
    const innerSize = { width: 12, height: 12, borderRadius: 12 / 2 };
    const outerSize = {
      width: 12 + 10,
      height: 12 + 10,
      borderRadius: (12 + 10) / 2,
    };
    if (this.props.buttonSize) {
      innerSize.width = this.props.buttonSize;
      innerSize.height = this.props.buttonSize;
      innerSize.borderRadius = this.props.buttonSize / 2;
      outerSize.width = this.props.buttonSize + 10;
      outerSize.height = this.props.buttonSize + 10;
      outerSize.borderRadius = (this.props.buttonSize + 10) / 2;
    }
    if (this.props.buttonOuterSize) {
      outerSize.width = this.props.buttonOuterSize;
      outerSize.height = this.props.buttonOuterSize;
      outerSize.borderRadius = this.props.buttonOuterSize / 2;
    }
    let outerColor = this.props.buttonOuterColor;
    const borderWidth = this.props.borderWidth || 1;
    let innerColor = this.props.buttonInnerColor;
    if (this.props.buttonColor) {
      outerColor = this.props.buttonColor;
      innerColor = this.props.buttonColor;
    }
    const c = (
      <View
        style={[
          Style.radioNormal,
          this.props.isSelected && Style.radioActive,
          this.props.isSelected && innerSize,
          this.props.isSelected && { backgroundColor: innerColor },
        ]}
      ></View>
    );
    const radioStyle = [
      Style.radio,
      {
        borderColor: outerColor,
        borderWidth,
      },
      this.props.buttonStyle,
      outerSize,
    ];

    if (this.props.disabled) {
      return (
        <View style={this.props.buttonWrapStyle}>
          <View style={radioStyle}>{c}</View>
        </View>
      );
    }

    return (
      <View style={this.props.buttonWrapStyle}>
        <TouchableOpacity
          accessible={this.props.accessible}
          accessibilityLabel={this.props.accessibilityLabel}
          testID={this.props.testID}
          style={radioStyle}
          onPress={() => {
            this.props.onPress(this.props.obj.value, this.props.index);
          }}
        >
          {c}
        </TouchableOpacity>
      </View>
    );
  }
}
RadioButtonInput.defaultProps = {
  buttonInnerColor: '#2196f3',
  buttonOuterColor: '#2196f3',
  disabled: false,
};

export class RadioButtonLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
      buttonColor: '#2196f3',
    };
  }

  render() {
    return (
      <TouchableWithoutFeedback
        accessible={this.props.accessible}
        accessibilityLabel={this.props.accessibilityLabel}
        testID={this.props.testID}
        onPress={() => {
          if (!this.props.disabled) {
            this.props.onPress(this.props.obj.value, this.props.index);
          }
        }}
      >
        <View style={[this.props.labelWrapStyle, Style.labelWrapStyle]}>
          <CustomText
            style={[
              Style.radioLabel,
              !this.props.labelHorizontal && Style.labelVertical,
              { color: this.props.labelColor },
              { fontWeight: this.props.labelSize },
              this.props.labelStyle,
            ]}
          >
            {this.props.obj.label}
          </CustomText>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

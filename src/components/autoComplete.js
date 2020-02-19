import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Animated,
  StyleSheet,
  Text,
  ListView,
  TouchableOpacity,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Button
} from 'react-native';
import CustomTextField from './customTextInput';
// import debounce from '../vendor/throttle-debounce/debounce';
import debounce from '../vendor/throttle-debounce/debounce';
import Hoverable from './hover/hoverable';
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class Autocomplete extends Component {
  static propTypes = {
    containerStyles: PropTypes.object,
    clearBtnStyles: PropTypes.object,
    clearBtnVisibility: PropTypes.bool,
    otherTextInputProps: PropTypes.object,
    placeholder: PropTypes.string, // textInput
    placeholderTextColor: PropTypes.string,
    onChangeText: PropTypes.func,
    onChangeTextDebounce: PropTypes.number,
    onItemPress: PropTypes.func,
    rowTextStyles: PropTypes.object,
    rowWrapperStyles: PropTypes.object,
    textInputStyles: PropTypes.object,
    terms: PropTypes.array
  };

  static defaultProps = {
    terms: [],
    clearBtnVisibility: false,
    placeholder: '',
    textInputStyles: {},
    otherTextInputProps: {},
    onChangeTextDebounce: 200
  };

  state = {
    textInputWidth: null,
    results: [],
    currentInput: null
  };

  componentDidMount() {
    // when user hits the return button, clear the terms
    Keyboard.addListener('keyboardDidHide', () => this.clearTerms());
  }

  getInitialStyles() {
    const { textInputStyles } = this.props;
    return {
      rowWrapperStyles: {
        zIndex: 999,
        // paddingTop: 10,
        // paddingBottom: 10,
        // paddingLeft: 5,
        // paddingRight: 5,
        //  opacity: 0.8,

        borderWidth: 1
      },
      rowTextStyles: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 5,
        paddingRight: 5
      },
      clearBtnStyles: {},
      containerStyles: {
        zIndex: 999,

        backgroundColor: textInputStyles.backgroundColor || '#fcfcfc'
      },
      textInputStyles: {
        // textInput Styles
        paddingLeft: 5,
        paddingRight: 5,
        flex: 1,
        alignItems: 'center',
        height: 40
      }
    };
  }

  getAndSetWidth() {
    this.textInput.measure((ox, oy, width, ...rest) => {
      this.setState({ textInputWidth: width });
    });
  }

  // copy the value back to the input
  onItemPress = currentInput => {
    this.setCurrentInput(currentInput);
    this.clearTerms();
  };

  getCombinedStyles(styleName) {
    let styleObj;
    if (typeof this.props.styleName !== 'object') {
      // this is if its a stylesheet reference
      styleObj = StyleSheet.flatten([
        this.getInitialStyles()[styleName],
        this.props[styleName]
      ]);
    } else {
      // combine the  initial i.e default styles into one object.
      styleObj = {
        ...this.getInitialStyles()[styleName],
        ...this.props[styleName]
      };
    }
    return styleObj;
  }

  clearTerms = () => {
    this.setState({ results: [] });
  };

  addAllTerms() {
    this.setState({ results: this.props.terms });
  }

  setCurrentInput = currentInput => {
    this.setState({ currentInput });
  };

  searchTerms = currentInput => {
    this.setState({ currentInput });
    debounce(300, () => {
      this.getAndSetWidth();
      const findMatch = (term1, term2) =>
        term1.toLowerCase().indexOf(term2.toLowerCase()) > -1;
      const results = this.props.terms.filter(eachTerm => {
        if (findMatch(eachTerm, currentInput)) return eachTerm;
      });

      const inputIsEmpty = !!(currentInput.length <= 0);
      this.setState({ results: inputIsEmpty ? [] : results }); // if input is empty don't show any results
    })();
  };

  clearInputAndTerms() {
    this.textInput.clear();
    this.clearTerms();
    this.selectItem();
  }

  render() {
    const {
      otherTextInputProps,
      placeholder,
      placeholderTextColor,
      clearBtn,
      clearBtnVisibility,
      onChangeTextDebounce,
      onItemPress,
      onChange,
      value,
      error
    } = this.props;
    return (
      <View style={this.getCombinedStyles('containerStyles')}>
        <View
          style={{
            flex: 1
          }}
        >
          <CustomTextField
            {...otherTextInputProps}
            placeholderTextColor={placeholderTextColor}
            myRef={c => {
              this.textInput = c;
            }}
            spellCheck={false}
            defaultValue={this.state.currentInput}
            error={error}
            value={value}
            onChange={onChange}
            onChangeText={el => {
              this.searchTerms(el);
              debounce(onChangeTextDebounce, this.props.onChangeText(el));
            }}
            placeholder={placeholder}
            // style={this.getCombinedStyles('textInputStyles')}
            style={{ flex: 1 }}
            onItemPress={onItemPress}
          />

          {clearBtn ? ( // for if the user just wants the default clearBtn
            <TouchableOpacity onPress={() => this.clearInputAndTerms()}>
              {clearBtn}
            </TouchableOpacity>
          ) : (
            false
          )}

          {!clearBtn && clearBtnVisibility ? ( // for if the user passes a custom btn comp.
            <Button
              style={this.getCombinedStyles('clearBtnStyles')}
              title='Clear'
              onPress={() => this.clearInputAndTerms()}
            />
          ) : (
            false
          )}
        </View>
        <View>
          <View style={{}}>
            <ListView
              style={{
                position: 'absolute',
                width: this.state.textInputWidth,
                backgroundColor: '#fcfcfc',
                zIndex: 3,
                maxHeight: 200
              }}
              keyboardShouldPersistTaps='always'
              scrollEnabled={true}
              initialListSize={15}
              enableEmptySections
              dataSource={ds.cloneWithRows(this.state.results)}
              renderRow={(rowData, sectionId, rowId, highlightRow) => (
                <RowWrapper styles={this.getCombinedStyles('rowWrapperStyles')}>
                  <Hoverable>
                    {isHovered => (
                      <View
                        style={
                          isHovered
                            ? { backgroundColor: '#EEEEEE' }
                            : { backgroundColor: 'transparent' }
                        }
                      >
                        <TouchableOpacity
                          style={{}}
                          //  activeOpacity={0.5}
                          onPress={() => {
                            this.onItemPress(this.state.results[rowId]);
                            if (onItemPress)
                              onItemPress(this.state.results[rowId]);
                          }}
                        >
                          <Text style={this.getCombinedStyles('rowTextStyles')}>
                            {rowData}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  </Hoverable>
                </RowWrapper>
              )}
            />
          </View>
        </View>
      </View>
    );
  }
}

class RowWrapper extends Component {
  static defaultTransitionDuration = 500;

  state = {
    opacity: new Animated.Value(0)
  };

  componentDidMount() {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: this.defaultTransitionDuration
    }).start();
  }

  render() {
    return (
      <TouchableWithoutFeedback>
        <Animated.View
          style={{ ...this.props.styles, opacity: this.state.opacity }}
        >
          {this.props.children}
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

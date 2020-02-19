/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import Text from './customText';

const styles = StyleSheet.create({
  animatedToastViewContainer: {
    zIndex: 99999999,
    position: 'absolute',
    alignSelf: 'center',
  },

  animatedToastView: {
    flexDirection: 'row',
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    height: null,
    alignItems: 'center',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    elevation: 6,
    shadowOpacity: 8,
    shadowColor: '#968365',
    shadowRadius: 15,
    maxWidth: 450,
    width: '100%',
  },
  animatedToastViewError: {
    flexDirection: 'row',
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: 'white',
    height: null,
    elevation: 6,
    maxWidth: 450,
    shadowOpacity: 8,
    shadowColor: '#968365',
    shadowRadius: 15,
    width: '100%',
  },

  toastText: {
    fontSize: 16,
    color: '#4a4a4a',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },

  success_round_symbol: {
    width: 40,
    height: 40,
    borderRadius: 30,
    marginRight: 10,
    justifyContent: 'center',
  },
  right_icon: {
    width: 20,
    height: 10,
    alignSelf: 'center',
    borderColor: 'white',
    borderWidth: 2,
    borderTopWidth: 0,
    borderRightWidth: 0,
    transform: [{ rotate: '315deg' }],
  },
  error_icon1: {
    width: 22,
    height: 2,
    position: 'absolute',
    alignSelf: 'center',
    borderColor: 'white',
    borderWidth: 2,
    borderTopWidth: 0,
    borderRightWidth: 0,
    transform: [{ rotate: '315deg' }],
  },
  error_icon2: {
    width: 22,
    height: 2,
    position: 'absolute',
    alignSelf: 'center',
    borderColor: 'white',
    borderWidth: 2,
    borderTopWidth: 0,
    borderRightWidth: 0,
    transform: [{ rotate: '45deg' }],
  },
});

class Toast extends Component {
  constructor(props) {
    super(props);

    this.animateTranslate = new Animated.Value(-20);

    this.animateOpacity = new Animated.Value(0);

    this.state = { renderToast: true };

    this.isShownToast = false;

    this.message;
    this.align;
    this.position;
    this.toastStyle;
    this.errortype;
  }

  componentWillUnmount() {
    this.timerID && clearTimeout(this.timerID);
  }

  hideToast = duration => {
    this.timerID = setTimeout(() => {
      Animated.parallel([
        Animated.timing(this.animateTranslate, {
          toValue: -20,
          duration: 350,
        }),

        Animated.timing(this.animateOpacity, {
          toValue: 0,
          duration: 350,
        }),
      ]).start(() => {
        this.setState({ renderToast: false });
        this.animateTranslate.setValue(-10);
        this.isShownToast = false;
        clearTimeout(this.timerID);
      });
    }, duration);
  };

  showToast(
    message = 'Custom toast',
    duration = 3000,
    position = null,
    align = 'center',
    toastStyle = null,
    errortype = 'success'
  ) {
    if (this.isShownToast === false) {
      const { children } = this.props;
      this.isShownToast = true;
      this.message = message || children;
      this.position = position;
      this.align = align;
      this.toastStyle = toastStyle;
      this.errortype = errortype;
      this.setState({ renderToast: true }, () => {
        Animated.parallel([
          Animated.timing(this.animateTranslate, {
            toValue: 0,
            duration: 350,
          }),
          Animated.timing(this.animateOpacity, {
            toValue: 1,
            duration: 350,
          }),
        ]).start(this.hideToast(duration || 3000));
      });
    }
  }

  render() {
    const { orientation } = this.props;
    const { renderToast } = this.state;

    if (renderToast) {
      return (
        <Animated.View
          style={[
            styles.animatedToastViewContainer,
            {
              transform: [
                orientation === 'xAxis'
                  ? {
                      translateY: this.animateTranslate,
                    }
                  : {
                      translateX: this.animateTranslate,
                    },
              ],
              opacity: this.animateOpacity,
              width: '100%',
            },
          ]}
          pointerEvents="none"
        >
          {typeof this.message === 'string' ? (
            <View
              style={[
                this.errortype === 'success'
                  ? styles.animatedToastView
                  : styles.animatedToastViewError,
                this.toastStyle,
                {
                  alignSelf:
                    this.align === 'center'
                      ? 'center'
                      : this.align === 'right'
                      ? 'flex-end'
                      : 'flex-start',
                  top: this.position === 'top' ? 0 : null,
                  bottom: this.position === 'bottom' ? 0 : null,
                  left: this.position === 'left' ? 0 : null,
                  right: this.position === 'right' ? 0 : null,
                },
              ]}
            >
              <View
                style={[
                  styles.success_round_symbol,
                  {
                    backgroundColor: this.errortype === 'success' ? '#417505' : 'red',
                  },
                ]}
              >
                {this.errortype === 'success' ? (
                  <View style={styles.right_icon} />
                ) : (
                  <View>
                    <View style={styles.error_icon1} />
                    <View style={styles.error_icon2} />
                  </View>
                )}
              </View>
              <Text style={[styles.toastText]}>{this.message}</Text>
            </View>
          ) : (
            <View
              style={[
                this.errortype === 'success'
                  ? styles.animatedToastView
                  : styles.animatedToastViewError,
                this.toastStyle,
              ]}
            >
              {this.message}
            </View>
          )}
        </Animated.View>
      );
    }
    return null;
  }
}

// Toast.propTypes = {
//   textColor: PropTypes.string,
//   orientation: PropTypes.string,
//   align: PropTypes.oneOf(['center', 'left', 'right']),
//   top: PropTypes.string,
//   bottom: PropTypes.string,
//   left: PropTypes.string,
//   right: PropTypes.string,
//   message: PropTypes.string,
//   children: PropTypes.node,
//   duration: PropTypes.int,
// };

Toast.defaultProps = {
  backgroundColor: '#666666',
  textColor: 'white',
  orientation: 'xAxis',
};

export default Toast;

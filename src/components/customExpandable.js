/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableHighlight,
  Animated,
  Easing,
  ViewPropTypes,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import CustomText from "./customText";
import Icon from './customIcon';


const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  titleContainer: {
    flexDirection: 'row',
    backgroundColor: '#e4e4ee',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    // padding: 10,
    color: '#2a2f43',
    fontWeight: 'bold',
  },
  button: {},
  buttonImage: {
    width: 15,
    height: 9,
  },
  body: {
    padding: 10,
    paddingTop: 0,
    shadowColor: '#000000',
    shadowOpacity: 1.0,
    shadowRadius: 10,
    // backgroundColor: 'yellow',
    // flex: 1
  },
});

class CustomExpandable extends Component {
  constructor(props) {
    super(props);

    this.icons = {
      // Step 2
      down: require('../assets/images/arrowDown.png'),
      up: require('../assets/images/arrowUp.png'),
    };
    let maxHeight;
    if (props.expanded) {
      maxHeight = props.maxHeight;
    } else {
      maxHeight = 0;
    }
    this.state = {
      // Step 3

      animation: new Animated.Value(props.minHeight + maxHeight),
    };
  }

  componentDidMount() {}

  toggle() {
    const { maxHeight, minHeight, expanded, onExpand } = this.props;
    const { animation } = this.state;

    // Step 1
    const initialValue = expanded ? maxHeight + minHeight : minHeight;
    const finalValue = expanded ? minHeight : maxHeight + minHeight;

    // this.setState({
    //   expanded: !expanded, // Step 2
    // });
    onExpand(!expanded);

    animation.setValue(initialValue); // Step 3

    // Animated.sequence(
    //   // Step 4
    //   this.state.animation,
    //   {
    //     toValue: finalValue,
    //   }
    // ).start(); // Step 5

    Animated.timing(animation, {
      toValue: finalValue,
      easing: Easing.back(),
      duration: 500,
    }).start();
  }

  render() {
    let icon = this.icons.down;

    const { title, expanded, children, styles, headerIcon, headerImg, headerName } = this.props;

    let { count } = this.props;

    if (count === undefined) {
      count = 0;
    }

    const { animation } = this.state;

    if (expanded) {
      icon = this.icons.up; // Step 4
    }

    // Step 5
    return (
      <Animated.View style={[styles.container, { height: animation }]}>
        <TouchableOpacity onPress={() => this.toggle()}>
          <View style={styles.titleContainer}>
            {headerIcon ? (
              <Icon color="#4a4a4a" size={20} name={headerIcon} fontWeight="normal"></Icon>
            ) : (
              <Image style={styles.headerImgStyles} source={headerImg}></Image>
            )}
            {count > 0 ? (
              <CustomText style={styles.title}>
                {title}
                <CustomText style={{ marginLeft: 3 }}>({count})</CustomText>
              </CustomText>
            ) : (
              <CustomText style={styles.title}>{title}</CustomText>
            )}

            <TouchableHighlight
              style={styles.button}
              onPress={() => this.toggle()}
              underlayColor="#f1f1f1"
            >
              <Image style={styles.buttonImage} source={icon}></Image>
            </TouchableHighlight>
          </View>
        </TouchableOpacity>
        <View style={styles.body}>{children}</View>
      </Animated.View>
    );
  }
}

CustomExpandable.propTypes = {
  expanded: PropTypes.bool.isRequired,
  maxHeight: PropTypes.number.isRequired,
  minHeight: PropTypes.number.isRequired,
  onExpand: PropTypes.func.isRequired,
};

CustomExpandable.defaultProps = {
  styles,
};
export default CustomExpandable;

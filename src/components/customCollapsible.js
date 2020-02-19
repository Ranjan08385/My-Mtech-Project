import React, { Component } from 'react';
import { View, TouchableOpacity, Platform, UIManager, LayoutAnimation } from 'react-native';

export default class CollapsibleList extends Component {
  constructor(props) {
    super(props);

    if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    this.animationConfig = {
      duration: 700,
      update: {
        type: 'spring',
        springDamping: 0.7,
        property: 'scaleXY',
      },
    };

    this.state = {
      minHeight: 0,
      currentHeight: null,
      collapsed: false,
      initialized: false,
    };
  }

  setMinHeight(event) {
    const { height: minHeight } = event.nativeEvent.layout;

    this.setState({ minHeight }, () => {
      this.setState({ initialized: true, currentHeight: minHeight });
    });
  }

  toggle() {
    const { minHeight, collapsed } = this.state;
    const { onToggle, animationConfig } = this.props;
    let nextHeight;

    if (collapsed) {
      nextHeight = minHeight;
    } else {
      nextHeight = null;
    }

    LayoutAnimation.configureNext({
      ...this.animationConfig,
      ...animationConfig,
    });
    this.setState({ currentHeight: nextHeight, collapsed: !collapsed }, () => {
      if (onToggle) {
        onToggle(this.state.collapsed);
      }
    });
  }

  render() {
    const { initialized, currentHeight } = this.state;
    const { numberOfVisibleItems, buttonContent, wrapperStyle, children } = this.props;

    return (
      <View style={wrapperStyle}>
        <View style={{ overflow: 'hidden', height: currentHeight }}>
          <View style={{ flex: 1 }} onLayout={event => this.setMinHeight(event)}>
            {React.Children.toArray(children).slice(0, numberOfVisibleItems)}
          </View>
          {initialized && (
            <View>
              {React.Children.toArray(children)
                .slice(numberOfVisibleItems)
                .map((item, index) => (
                  <View key={index}>{item}</View>
                ))}
            </View>
          )}
        </View>
        {numberOfVisibleItems < React.Children.count(children) && (
          <View>
            <TouchableOpacity onPress={() => this.toggle()} activeOpacity={0.8}>
              {buttonContent}
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

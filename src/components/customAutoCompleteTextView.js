/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Menu, MenuOptions, MenuOption, MenuTrigger, renderers } from 'react-native-popup-menu';

const { Popover } = renderers;

class AutoCompleteTextView extends Component {
  openMenu = () => {
    const { onMenuOpen } = this.props;
    onMenuOpen();
  };

  closeMenu = () => {
    const { onMenuClose } = this.props;
    onMenuClose();
  };

  render() {
    const {
      preferredPlacement,
      placement,
      propRenderer,
      anchorStyle,
      styleMenuOptions,
      menuOptionHeader,
      menuOptionComponent,
      menuOptionDataArray,
      onSelectionOption,
    } = this.props;

    return (
      <Menu
        onOpen={this.openMenu}
        onClose={this.closeMenu}
        renderer={propRenderer || Popover}
        rendererProps={{
          preferredPlacement: preferredPlacement || 'top',
          placement,
          anchorStyle: [
            {
              backgroundColor: 'black',
            },
            anchorStyle,
          ],
        }}
      >
        <MenuTrigger>{menuOptionHeader()}</MenuTrigger>
        <MenuOptions optionsContainerStyle={[styleMenuOptions]}>
          <ScrollView style={{ maxHeight: 250, width: '100%' }}>
            {menuOptionDataArray.map((data, index) => (
              <MenuOption value={data} onSelect={value => onSelectionOption(value, index)}>
                {menuOptionComponent(data)}
              </MenuOption>
            ))}
          </ScrollView>
        </MenuOptions>
      </Menu>
    );
  }
}

export default AutoCompleteTextView;

/* eslint-disable react/prop-types */
import React from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../assets/selection.json';

const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'IcoMoon', 'icomoon.ttf');

const CustomIcon = ({ name, size, color }) => <Icon name={name} size={size} color={color} />;

export default CustomIcon;

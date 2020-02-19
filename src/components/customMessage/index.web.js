/* eslint-disable react/prop-types */
import React from 'react';
import { notify } from 'react-notify-toast';

const onShow = (type, content) => {
  notify.show(content, type, 5000);
};

function CustomMessage(props) {
  const { type, content } = props;

  return <div> {onShow(type, content)} </div>;
}

export default CustomMessage;

import React from 'react';
import ReactDom from 'react-dom';

import Button from './button';
import Icon from './icon';

ReactDom.render(
  <div>
    <Button></Button>
    <Icon name="wechat"></Icon>
  </div>,
  document.querySelector('#root')
);

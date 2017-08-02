import React from 'react';
import { storiesOf } from '@storybook/react';

import { styled }from '../styles';
import Overlay from './index';

const Root = styled('div', {
  position: 'relative',
  width: 100,
  height: 100,
});

storiesOf('Overlay', module)
  .add('Default overlay', () => (
    <Root>
      <div>Text</div>
      <Overlay />
    </Root>
  ))
  .add('Custom overlay', () => (
    <Root>
      <div>Text</div>
      <Overlay color="red" opacity={0.5} />
    </Root>
  ));

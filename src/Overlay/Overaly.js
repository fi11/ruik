import React from 'react';
import styled from '../styled';

const OverlayInner = styled('div.Overlay', {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: '999'
});

const Overlay = ({ color, opacity }) => (
  <OverlayInner style={{ backgroundColor: color, opacity }} />
);

Overlay.defaultProps = {
  color: '#fff',
  opacity: .45,
};

export default Overlay;
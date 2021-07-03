import React from 'react';
import BaseIcon from './BaseIcon';

const InfoIcon = (props) => (
  <BaseIcon {...props}>
    <path d="M36,0.328C16.312,0.328 0.328,16.312 0.328,36C0.328,55.688 16.312,71.672 36,71.672C55.688,71.672 71.672,55.688 71.672,36C71.672,16.312 55.688,0.328 36,0.328ZM36,4.828C53.204,4.828 67.172,18.796 67.172,36C67.172,53.204 53.204,67.172 36,67.172C18.796,67.172 4.828,53.204 4.828,36C4.828,18.796 18.796,4.828 36,4.828ZM33.75,32.074L33.75,53.555C33.75,54.797 34.758,55.805 36,55.805C37.242,55.805 38.25,54.797 38.25,53.555L38.25,32.074C38.25,30.832 37.242,29.824 36,29.824C34.758,29.824 33.75,30.832 33.75,32.074ZM36,18.445C37.64,18.445 38.971,19.776 38.971,21.416C38.971,23.055 37.64,24.386 36,24.386C34.36,24.386 33.029,23.055 33.029,21.416C33.029,19.776 34.36,18.445 36,18.445Z" />
  </BaseIcon>
);

InfoIcon.displayName = 'InfoIcon';

InfoIcon.propTypes = {};

InfoIcon.defaultProps = {};

export default InfoIcon;

import React from 'react';
import BaseIcon from './BaseIcon';

const UploadIcon = ({ color, size }) => (
  <BaseIcon color={color} size={size}>
    <path d="M13.088,71.347L58.912,71.347C60.154,71.347 61.162,70.339 61.162,69.097C61.162,67.856 60.154,66.847 58.912,66.847L13.088,66.847C11.846,66.847 10.838,67.856 10.838,69.097C10.838,70.339 11.846,71.347 13.088,71.347ZM33.75,8.538L33.75,59.708C33.75,60.95 34.758,61.958 36,61.958C37.242,61.958 38.25,60.95 38.25,59.708L38.25,8.538L57.445,25.047C58.387,25.857 59.808,25.75 60.618,24.808C61.428,23.867 61.321,22.445 60.379,21.635L37.467,1.929C36.624,1.203 35.376,1.203 34.533,1.929L11.621,21.635C10.679,22.445 10.572,23.867 11.382,24.808C12.192,25.75 13.613,25.857 14.555,25.047L33.75,8.538Z" />
  </BaseIcon>
);

export default UploadIcon;
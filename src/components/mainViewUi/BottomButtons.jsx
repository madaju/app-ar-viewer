import React from 'react';
import { createUseStyles } from 'react-jss';
import CameraButton from '../buttons/CameraButton';
import FloatingButton from '../buttons/FloatingButton';
import ThreeDObjectSettingsIcon from '../icons/ThreeDObjectSettingsIcon';
import SwitchViewButton from '../buttons/SwitchViewButton';

const useStyles = createUseStyles((theme) => ({
  bottomButtons: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    minHeight: theme.typography.h1.fontSize,
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: 'auto auto auto',
    gridTemplateAreas: '"switch camera manage"',
    margin: theme.spacing(0, 4),
    marginBottom: theme.spacing(5),
  },
  switch: {
    gridArea: 'switch',
    justifySelf: 'start',
  },
  camera: {
    gridArea: 'camera',
    justifySelf: 'center',
  },
  manage: {
    gridArea: 'manage',
    justifySelf: 'end',
  },
}));

const BottomButtons = ({ on3DClick }) => {
  const cls = useStyles();

  return (
    <div className={cls.bottomButtons}>
      <SwitchViewButton className={cls.switch} />
      <CameraButton className={cls.camera} />
      <FloatingButton className={cls.manage} onClick={on3DClick}>
        <ThreeDObjectSettingsIcon size="h4" />
      </FloatingButton>
    </div>
  );
};

export default BottomButtons;

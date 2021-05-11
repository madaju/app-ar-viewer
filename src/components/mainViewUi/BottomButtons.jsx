import React from 'react';
import { createUseStyles } from 'react-jss';
import SwitchViewButton from '../buttons/SwitchViewButton';
import ManageObjectsButton from '../buttons/ManageObjectsButton';

const useStyles = createUseStyles((theme) => ({
  bottomButtons: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    minHeight: theme.typography.h1.fontSize,
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: 'auto auto',
    gridTemplateAreas: '"switch manage"',
    margin: theme.spacing(0, 4),
    marginBottom: theme.spacing(5),
  },
  switch: {
    gridArea: 'switch',
    justifySelf: 'start',
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
      <ManageObjectsButton className={cls.manage} onClick={on3DClick} />
    </div>
  );
};

export default BottomButtons;

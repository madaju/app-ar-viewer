import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';
import { Transition } from 'react-transition-group';
import PaperBase from './PaperBase';
import Divider from './Divider';

const useStyles = createUseStyles((theme) => ({
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: theme.zIndex.modal,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
  },
  paper: {
    pointerEvents: 'auto',
  },
  paperInner: {
    maxHeight: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  headerWrapper: {
    margin: theme.spacing(2),
    marginTop: ({ hasTitle }) => theme.spacing(hasTitle ? 4 : 2),
  },
  content: {
    overflowY: 'auto',
    flexGrow: ({ fullHeight }) => (fullHeight ? 1 : 'auto'),
    margin: ({ fullSizeContent }) => theme.spacing(fullSizeContent ? 0 : 2),
  },
  footerWrapper: {
    display: 'flex',
    margin: theme.spacing(1),
    justifyContent: ({ footerPositioning }) => {
      if (footerPositioning === 'start') {
        return 'flex-start';
      }
      if (footerPositioning === 'end') {
        return 'flex-end';
      }
      return 'center';
    },
  },
  backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '100vh',
    zIndex: theme.zIndex.modal - 1,
    backgroundColor: `${theme.palette.common.black}66`,
    transition: ({ duration }) => `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  },
  enteredBackdrop: {
    opacity: 1,
  },
  exitingBackdrop: {
    opacity: 0,
  },
}));

const useFadeStyles = createUseStyles({
  modal: {
    transition: ({ duration }) => `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  },
  enteredModal: {
    opacity: 1,
  },
  exitingModal: {
    opacity: 0,
  },
});

const useSlideStyles = createUseStyles({
  modal: {
    transition: ({ duration }) => `transform ${duration}ms ease-in-out`,
    transform: 'translate3d(0, 100vh, 0)',
  },
  enteredModal: {
    transform: 'translate3d(0, 0, 0)',
  },
  exitingModal: {
    transform: 'translate3d(0, 100vh, 0)',
  },
});

const Modal = ({
  children,
  open,
  onClose,
  duration,
  variant,
  className,
  contentStyle,
  header,
  footer,
  footerPositioning,
  fullHeight,
  fullSizeContent,
  hasTitle,
  divideContent,
}) => {
  const cls = useStyles({ duration, hasTitle, fullHeight, fullSizeContent, footerPositioning });
  const clsFade = useFadeStyles({ duration });
  const clsSlide = useSlideStyles({ duration });
  const clsAnimation = {
    fade: clsFade,
    slide: clsSlide,
  };

  return (
    <>
      <Transition in={open} appear={true} timeout={open ? 0 : duration} mountOnEnter unmountOnExit>
        {(state) => (
          <>
            <div className={clsx(cls.backdrop, cls[`${state}Backdrop`])} onClick={onClose} />
            <div
              className={clsx(
                cls.modal,
                clsAnimation[variant].modal,
                clsAnimation[variant][`${state}Modal`]
              )}
            >
              <PaperBase className={clsx(cls.paper, className)}>
                <div className={cls.paperInner}>
                  {header ? <div className={cls.headerWrapper}>{header}</div> : null}
                  {divideContent ? <Divider /> : null}
                  <div className={clsx(cls.content, contentStyle)}>{children}</div>
                  {divideContent ? <Divider /> : null}
                  {footer ? <div className={cls.footerWrapper}>{footer}</div> : null}
                </div>
              </PaperBase>
            </div>
          </>
        )}
      </Transition>
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  duration: PropTypes.number,
  variant: PropTypes.oneOf(['fade', 'slide']),
  className: PropTypes.string,
  contentStyle: PropTypes.string,
  header: PropTypes.element,
  footer: PropTypes.element,
  footerPositioning: PropTypes.oneOf(['start', 'center', 'end']),
  fullHeight: PropTypes.bool,
  fullSizeContent: PropTypes.bool,
  hasTitle: PropTypes.bool,
  divideContent: PropTypes.bool,
};

Modal.defaultProps = {
  duration: 100,
  variant: 'fade',
  footerPositioning: 'center',
  fullHeight: false,
  fullSizeContent: false,
  hasTitle: false,
  divideContent: false,
};

export default Modal;
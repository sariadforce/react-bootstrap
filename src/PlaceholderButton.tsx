import * as React from 'react';
import PropTypes from 'prop-types';
import type { BsPrefixRefForwardingComponent } from './helpers';
import Button from './Button';
import usePlaceholder, { type UsePlaceholderProps } from './usePlaceholder';
import type { ButtonVariant } from './types';

export interface PlaceholderButtonProps extends UsePlaceholderProps {
  variant?: ButtonVariant;
}

const propTypes = {
  /**
   * @default 'placeholder'
   */
  bsPrefix: PropTypes.string,

  /**
   * Changes the animation of the placeholder.
   */
  animation: PropTypes.oneOf(['glow', 'wave']),

  size: PropTypes.oneOf(['xs', 'sm', 'lg']),

  /**
   * Button variant.
   */
  variant: PropTypes.string,
};

const PlaceholderButton: BsPrefixRefForwardingComponent<
  'button',
  PlaceholderButtonProps
> = React.forwardRef<HTMLButtonElement, PlaceholderButtonProps>(
  (props, ref) => {
    const placeholderProps = usePlaceholder(props);

    return <Button {...placeholderProps} ref={ref} disabled tabIndex={-1} />;
  },
) as typeof PlaceholderButton;

PlaceholderButton.displayName = 'PlaceholderButton';
PlaceholderButton.propTypes = propTypes;

export default PlaceholderButton;

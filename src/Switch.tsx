import * as React from 'react';
import FormCheck, { FormCheckProps } from './FormCheck';
import type { BsPrefixRefForwardingComponent } from './helpers';

type SwitchProps = Omit<FormCheckProps, 'type'>;

const Switch: BsPrefixRefForwardingComponent<typeof FormCheck, SwitchProps> =
  React.forwardRef<typeof FormCheck, SwitchProps>((props, ref) => (
    <FormCheck {...props} ref={ref} type="switch" />
  )) as typeof Switch;

Switch.displayName = 'Switch';

export default Object.assign(Switch, {
  Input: FormCheck.Input,
  Label: FormCheck.Label,
});

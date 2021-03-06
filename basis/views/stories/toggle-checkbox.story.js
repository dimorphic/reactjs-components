import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Icons from 'views/components/icons/icons';

import ToggleCheckbox from 'views/containers/toggle-checkbox.container';

storiesOf('Toggle checkbox', module)
  .add('default', () => (
    <div>
      <Icons/>
      <ToggleCheckbox/>
    </div>
  ))


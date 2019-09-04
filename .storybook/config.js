import { configure } from '@storybook/react';

import requireContext from 'require-context.macro';

// const req = require.context('../stories', true, /\.stories\.js$/); <-- replaced
const req = requireContext('../stories', true, /\.stories\.js$/);

import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo); 

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

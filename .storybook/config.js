import { configure } from '@storybook/react';

import requireContext from 'require-context.macro';

// const req = require.context('../stories', true, /\.stories\.js$/); <-- replaced
const req = requireContext('../stories', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

/*
  Exports of this package.

  Date - 3 Sep 2019
  Author- Himanshu Dixit
*/

// Tokens
import colors from './src/tokens/gradients';
import gradients from './src/tokens/colors';
import typography from './src/tokens/typography';

//Atoms
import textBlockComponent from './src/atoms/textBlock';


export const tokens = {
    colors: colors,
    gradients: gradients,
    typography: typography
};

export const TextBlock = textBlockComponent;

// module.exports = {
//     tokens: {
//         colors: colors,
//         gradients: gradients,
//         typography: typography
//     },
//     TextBlock: textBlockComponent
// }

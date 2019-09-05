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
import textBlockComponent from './src/atoms/TextBlock';
import ButtonComponent from './src/atoms/Button';
import LinkComponent from './src/atoms/Link';
import ImageComponent from './src/atoms/Image';
import InputComponent from './src/atoms/InputComponent';

//Laout
import ContainerComponent from './src/layout/Container';
import ContainerItemComponent from './src/layout/ContainerItem';

export const tokens = {
    colors: colors,
    gradients: gradients,
    typography: typography
};

export const TextBlock = textBlockComponent;
export const Input = InputComponent;
export const Image = ImageComponent;
export const Link = LinkComponent;
export const Button = ButtonComponent;

export const Container = ContainerComponent;
export const ContainerItem = ContainerItemComponent;
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { TextBlock } from '../../index';

// Render button related stories
export const renderTextStories = ()=>{

    storiesOf('Text', module)
        .add('normal', () => <TextBlock>Heading Out</TextBlock>)
        .add('Font Family', () => {
            return (
                <div>
                    <TextBlock family="heading">Check</TextBlock>
                    <TextBlock family="content">New</TextBlock>
                </div>
            )
        }
        )
        .add('Size', () => {
            return (
                <div>
                    <TextBlock size="2">This is size 2</TextBlock>
                    <TextBlock size="3">This is size 3</TextBlock>
                    <TextBlock size="4">This is size 4</TextBlock>
                </div>
            )
        }
        )
        .add('Weight', () => {
            return (
                <div>
                    <TextBlock weight="normal">This is normal</TextBlock>
                    <TextBlock weight="bold">This is bold</TextBlock>
                </div>
            )
        }
        )
        .add('Color', () => {
            return (
                <div>
                    <TextBlock color="warning">This is warning</TextBlock>
                    <TextBlock color="rhapsody">This is rhapsody</TextBlock>
                    <TextBlock color="black">This is black</TextBlock>
                </div>
            )
        }
        )
        .add('Custom Tailwind', () => {
            return (
                <div>
                    <TextBlock tailwind="ml-8 mt-8">With margin</TextBlock>
                </div>
            )
        }
        )
        .add('All properties', () => <TextBlock family="heading" size="7.5" tailwind="ml-8 mt-8" color="rhapsody" weight="bold" tailwind="ml-8 mt-8">dsfdf</TextBlock>);
}

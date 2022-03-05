import React from 'react';
import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    color: {
      control: 'inline-radio',
    },
    variant: {
      control: 'inline-radio',
    },
  },
};

const Template = (args) => <Button {...args} />;

export const BasicButton = Template.bind({});
BasicButton.args = {
  children: 'Basic Button',
  color: 'primary',
  variant: 'basic',
};

export const OutlineButton = Template.bind({});
OutlineButton.args = {
  children: 'Outline Button',
  color: 'secondary',
  variant: 'outline',
};

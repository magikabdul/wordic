import React from 'react';
import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'inline-radio',
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'primary',
  variant: 'secondary',
};

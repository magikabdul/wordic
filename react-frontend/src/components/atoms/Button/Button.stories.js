import React from 'react';
import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    color: {
      control: 'inline-radio',
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  color: 'secondary',
};

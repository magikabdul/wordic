import React from 'react';
import { FaFacebook } from 'react-icons/all';
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
    Icon: {
      control: 'disable',
    },
    size: {
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
  size: 'medium',
};

export const OutlineButton = Template.bind({});
OutlineButton.args = {
  children: 'Outline Button',
  color: 'secondary',
  variant: 'outline',
  size: 'medium',
};

export const IconButton = Template.bind({});
IconButton.args = {
  children: 'Icon Button',
  color: 'success',
  variant: 'basic',
  Icon: FaFacebook,
  size: 'medium',
};

export const SizeButton = Template.bind({});
SizeButton.args = {
  children: 'Size Button',
  color: 'success',
  variant: 'basic',
  Icon: FaFacebook,
  size: 'large',
};

export const IconButtonWithoutText = Template.bind({});
IconButtonWithoutText.args = {
  color: 'danger',
  variant: 'basic',
  Icon: FaFacebook,
  size: 'medium',
};

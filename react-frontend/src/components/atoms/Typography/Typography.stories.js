import React from 'react';
import Typography from './Typography';

export default {
  title: 'Atoms/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: 'inline-radio',
    },
    align: {
      control: 'inline-radio',
    },
  },
};

const Template = ({ children, ...args }) => (
  <Typography {...args}>{children}</Typography>
);

export const HeadingH1 = Template.bind({});
HeadingH1.args = {
  children: 'This is a heading h1',
  variant: 'h1',
};

export const HeadingH2 = Template.bind({});
HeadingH2.args = {
  children: 'This is a heading h2',
  variant: 'h2',
};

export const HeadingH3 = Template.bind({});
HeadingH3.args = {
  children: 'This is a heading h3',
  variant: 'h3',
};

export const HeadingH4 = Template.bind({});
HeadingH4.args = {
  children: 'This is a heading h4',
  variant: 'h4',
};

export const HeadingH5 = Template.bind({});
HeadingH5.args = {
  children: 'This is a heading h5',
  variant: 'h5',
};

export const HeadingH6 = Template.bind({});
HeadingH6.args = {
  children: 'This is a heading h6',
  variant: 'h6',
};

export const Paragraph = Template.bind({});
Paragraph.args = {
  children:
    'Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero.',
  variant: 'p',
};

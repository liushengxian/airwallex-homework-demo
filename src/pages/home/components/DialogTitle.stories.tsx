import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DialogTitleProps } from '@mui/material';
import SpecificDialogTitle from './DialogTitle';

export default {
  title: 'Home/DialogTitle',
  component: SpecificDialogTitle,
} as ComponentMeta<typeof SpecificDialogTitle>;


const Template: ComponentStory<typeof SpecificDialogTitle> = (args) => <SpecificDialogTitle {...args} />;

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  children: <h1>hello world</h1>,
};

export const RequestTitle = Template.bind({});
RequestTitle.args = {
  children: <div>request an invite</div>,
};


import { ComponentMeta, ComponentStory } from '@storybook/react';
import Sidebar from '.';

export default {
  title: 'Example/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

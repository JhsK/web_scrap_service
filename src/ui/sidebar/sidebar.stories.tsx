import { ComponentMeta, ComponentStory } from '@storybook/react';
import Sidebar from '.';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  title: 'Example/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args: any) => <Sidebar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

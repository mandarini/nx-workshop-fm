import { Story, Meta } from '@storybook/react';
import { UiTest, UiTestProps } from './ui-test';

export default {
  component: UiTest,
  title: 'UiTest',
} as Meta;

const Template: Story<UiTestProps> = (args) => <UiTest {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: '',
};

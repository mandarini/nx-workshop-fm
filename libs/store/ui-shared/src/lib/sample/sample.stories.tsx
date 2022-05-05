import { Story, Meta } from '@storybook/react';
import { Sample, SampleProps } from './sample';

export default {
  component: Sample,
  title: 'Sample',
} as Meta;

const Template: Story<SampleProps> = (args) => <Sample {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: '',
  age: 0,
  something: false,
};

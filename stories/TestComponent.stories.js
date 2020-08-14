import TestComponent from '../src/TestComponent.vue';

export default {
  title: 'Test/TestComponent',
  component: TestComponent,
  argTypes: {
    color: { control: { type: 'color' } },
  },
  parameters: {
    docs: {
      iframeHeight: 80,
    },
  },
};

export const Template = (args, argTypes) => ({
  props: Object.keys(argTypes),
  components: { TestComponent },
  template:
    '<TestComponent :color="color" :name="name" :size="size"></TestComponent>',
});

export const Default = Template.bind({});
Default.args = {
  color: 'red',
  size: 48,
  name: 'test',
};

---
to: src/components/<%= h.inflection.camelize(name) %>/<%= name %>.stories.tsx
---

import type { Meta, StoryObj } from '@storybook/react';
import <%= name %> from './<%= name %>';

const meta: Meta<typeof <%= name %>> = {
  title: 'Components/<%= name %>',
  component: <%= name %>,
};

export default meta;
type Story = StoryObj<typeof <%= name %>>;

export const Default: Story = {
  args: {
    // Add your component props here
  },
};

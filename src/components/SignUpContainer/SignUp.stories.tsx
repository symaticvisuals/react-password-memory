import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import SignUp, { SignUpProps } from "./SignUp";

export default {
  title: "Components/SignUp",
  component: SignUp,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<SignUpProps> = (args) => <SignUp {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { label: "Primary 😃", size: "large" };

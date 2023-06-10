import type { StorybookConfig } from "@storybook/nextjs";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", 
    "@storybook/addon-essentials", 
    "@storybook/addon-styling", 
    "@storybook/addon-interactions", 
    "@storybook/addon-mdx-gfm", 
    "@storybook/addon-mdx-gfm"],
  framework: {
    name: "@storybook/nextjs",
    options: {}
  },
  docs: {
    autodocs: true
  },
};
export default config;
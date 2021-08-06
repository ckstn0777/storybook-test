import { ComponentMeta, ComponentStory } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import Hello from "./Hello"
import mdx from "./Hello.mdx"

export default {
  title: "components/Hello",
  component: Hello,
  argTypes: {
    name: { control: "text" },
    big: { control: "boolean" },
  },
  parameters: {
    componentSubtitle: "'안녕하세요'라고 보여주는 컴포넌트",
    docs: {
      page: mdx,
    },
  },
} as ComponentMeta<typeof Hello>

const Template: ComponentStory<typeof Hello> = (args) => (
  <Hello {...args} onHello={action("onHello")} onBye={action("onBye")} />
)

export const standard = Template.bind({})
standard.args = {
  name: "Storybook",
  big: false,
}

export const big = Template.bind({})
big.args = {
  name: "Storybook",
  big: true,
}

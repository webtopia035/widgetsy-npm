import { Whiteboard } from "../components/Whiteboard";
export default {
  title: "Example/Whiteboard",
  component: Whiteboard,
};

const Template = (args) => <Whiteboard {...args} />;

export const Default = Template.bind({});

export const Primary = {
  args: {
    backgroundColor: [
      {
        color: "#ffffff",
        stop: 0,
        stopPx: 0,
      },
      {
        color: "#757ff3",
        stop: 50,
        stopPx: 348.2624816894531,
      },
      {
        color: "#000000",
        stop: 100,
        stopPx: 800,
      },
    ],
    primaryFont: "#ccc",
    theme: 0,
    rotation: 90,
  },
};

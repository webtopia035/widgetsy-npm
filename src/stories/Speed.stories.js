import { SpeedUnitConverter } from "../components/Speed";

export default {
  title: "Example/SpeedConverter",
  component: SpeedUnitConverter,
};

const Template = (args) => <SpeedUnitConverter {...args} />;

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
    primaryColor: "#757ff3",
    rotation: 90,
  },
};

import { ComponentConfig, LayoutConfig } from "../types/ComponentConfigTypes";
import { MenuProps } from "antd";

const ExampleLayoutConfig: ComponentConfig<LayoutConfig> = {
  type: "layout",
  children: [
    {
      type: "header",
      props: {
        style: { display: "flex", alignItems: "center" },
      },
      children: [
        {
          type: "menu",
          props: {
            theme: "dark",
            mode: "horizontal",
            items: [
              {
                key: "home",
                label: "Home",
              },
              {
                key: "blog",
                label: "Blog",
              },
              {
                key: "about",
                label: "About",
              },
            ],
            onClick: (e: MenuProps["onClick"]) =>
              console.log("menu click :", e),
          },
        },
      ],
    },
    {
      type: "content",
      props: {
        style: { padding: "0 50px", color: "black" },
      },
      children: "Hello chat",
    },
    {
      type: "footer",
      props: {
        style: { textAlign: "center" },
      },
      children:
        "Creating a demo app for generating react component from a config file.",
    },
  ],
};

export default ExampleLayoutConfig;

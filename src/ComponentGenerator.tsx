import { Breadcrumb, Layout, Menu, theme } from "antd";
import { createElement, ReactElement } from "react";
import { ComponentConfig } from "./types/ComponentConfigTypes";

const { Header, Content, Footer } = Layout;

const validComponents = {
  layout: Layout,
  header: Header,
  content: Content,
  footer: Footer,
  breadcrumb: Breadcrumb,
  menu: Menu,
};

export const renderComponent = <P,>({
  type,
  props,
  children,
}: ComponentConfig<P>): ReactElement<any> => {
  //   console.log("config: ", { type, props, children });
  if (validComponents[type] === undefined) return <>Invalid component</>;
  return createElement(
    validComponents[type],
    { ...props },
    children &&
      (typeof children === "string"
        ? children
        : children.map((componentConfig) =>
            renderComponent(componentConfig as ComponentConfig<any>)
          ))
  );
};

import { CSSProperties } from "react";
import React, { ReactNode } from "react";
import { validComponentTypes } from "./ValidComponentTypes";

interface MenuItem {
  key: number;
  label: string;
}

interface Menu {
  type: "menu";
  theme: string;
  mode: string;
  items: MenuItem[];
}

interface Header {
  type: "header";
  props: {
    style: CSSProperties;
  };
  children: string | ReactNode[];
}

interface Content {
  type: "content";
  props: {
    style: {
      padding: string;
    };
  };
  children: string | ReactNode[];
}

interface Footer {
  type: "footer";
  props: {
    style: CSSProperties;
  };
  children: string | ReactNode[];
}

export type LayoutConfig = {
  type: "layout";
  children?: ComponentConfig<any>[];
};

export type ComponentConfig<P> = {
  type: validComponentTypes | React.JSXElementConstructor<P>;
  props?: P;
  children?: string | ComponentConfig<any>[]; // TODO figure out how to not use any here
};

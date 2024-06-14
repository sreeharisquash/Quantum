declare module "react-vertical-timeline-component" {
  import * as React from "react";

  export class VerticalTimeline extends React.Component {}
  export class VerticalTimelineElement extends React.Component<{
    children?: React.ReactNode;
    visible?: boolean;
    key?: number | string;
    iconStyle?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
    contentArrowStyle?: React.CSSProperties;
  }> {}
}

# react-accordion

Highly customizable React Accordion component that is SEO friendly.

Source code at <https://github.com/daryl-sf/react-accordion>.

## Installation

Install directly from npm

```bash
npm install --save react-accordion-seo
```

or:

```bash
yarn add react-accordion-seo
```

## Example

[Example usage](https://63f15f4902135ed855dbdbee-hkdkwdjnmf.chromatic.com/?path=/story/accordion--accordion-story)

## Usage

```tsx
import React from "react";
import Accordion from "react-accordion-seo";

const Summary = ({ onClick, expanded }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "6px",
    }}
  >
    summary
    <button
      type="button"
      onClick={onClick}
      style={{ all: "unset", color: "#ff5050", cursor: "pointer" }}
    >
      {expanded ? "show less" : "show more"}
    </button>
  </div>
);

const Example = () => (
  <div style={{ width: "600px", fontFamily: "sans-serif" }}>
    <Accordion
      id="first"
      renderSummary={({ onClick, expanded }) => <Summary onClick={onClick} expanded={expanded} />}
      renderDetail={
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          laoreet erat at mi laoreet, vitae rutrum tellus suscipit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Maecenas a magna
          condimentum, consectetur ante vel, imperdiet urna. Nulla dictum
          bibendum augue a blandit. Donec ullamcorper purus eget ornare
          bibendum. Nunc auctor arcu a dui vestibulum, vitae rutrum tellus
          egestas. Ut pharetra tellus id est facilisis, rhoncus facilisis odio
          bibendum. Vivamus dignissim enim elit, quis condimentum ligula gravida
          id. Nulla varius suscipit dolor. Fusce maximus tellus sed tellus
          convallis, vitae feugiat enim ullamcorper. Donec laoreet finibus urna
          sit amet condimentum. Maecenas efficitur aliquam libero sit amet
          malesuada.
        </div>
      }
    />
  </div>
)
```

### Props

`id: string;` Required: ID to uniquely identify the component.

`initExpanded?: boolean;` Optional: `bool` to set the whether the Detail section is initially expanded.

`renderSummary: (props: {
  onClick: () => void;
  expanded: boolean;
}) => JSX.Element;` Required:  JSX Element that will be rendered as the summary section of the accordion. `onClick` function when called will expand or collaspe the accordion. `expanded` boolean that indicates whether the boolean is expanded or collasped.

`renderDetail: ReactNode;` Required: Element to be rendered in the detail section of the accordion.
`className?: string;` Optional: classes that can be used to overwrite default styles on containing div.

## License

MIT

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Accordion from ".";

export default {
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const AccordionTemplate: ComponentStory<typeof Accordion> = () => (
  <div style={{ width: "600px" }}>
    <Accordion
      id="first"
      renderSummary={({ onClick, expanded }) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "6px",
          }}
        >
          summary{" "}
          <button
            type="button"
            onClick={onClick}
            style={{ all: "unset", color: "#ff5050", cursor: "pointer" }}
          >
            {expanded ? "show less" : "show more"}
          </button>
        </div>
      )}
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
    <br />
    <Accordion
      id="second"
      initExpanded
      renderSummary={({ onClick, expanded }) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "6px",
          }}
        >
          Open me to get more info about how this works
          <button
            type="button"
            onClick={onClick}
            style={{ all: "unset", color: "#ff5050", cursor: "pointer" }}
          >
            {expanded ? "show less" : "show more"}
          </button>
        </div>
      )}
      renderDetail={
        <div>
          <p>
            This accordion transitions <code>max-height</code> from 0 to x and
            vice versa when <code>expanded</code> state changes.
          </p>
          <p>
            The component is designed to handle dynamic content that can vary in
            height. <code>heightRef</code> is a div with{" "}
            <code>overflow:hidden</code>.
          </p>
          <p>
            This is used as a ref so we know what height the content is and
            therefore what value to set <code>max-height</code> to.
          </p>
        </div>
      }
    />
  </div>
);

export const AccordionStory = AccordionTemplate.bind({});

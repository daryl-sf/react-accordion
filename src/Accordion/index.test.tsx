import React from "react";
import { render } from "@testing-library/react";

import Accordion from ".";

describe("Accordion", () => {
  test("renders the Accordion component without error", () => {
    const { asFragment } = render(
      <Accordion
        id="testAccordion"
        renderDetail={<div>This is an accordion</div>}
        renderSummary={({ onClick, expanded }) => (
          <div>This is an accordion. <button type="button" onClick={onClick}>Click me to {expanded ? "collapse" : "expand"}</button></div>
        )}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  describe("initExpanded = true", () => {
    test("renders accordion with maxHeight != 0", () => {
      const { asFragment } = render(
        <Accordion
          id="testAccordion"
          initExpanded={true}
          renderDetail={<div style={{ height: "30px"}}>This is an accordion</div>}
          renderSummary={({ onClick, expanded }) => (
            <div>This is an accordion. <button type="button" onClick={onClick}>Click me to {expanded ? "collapse" : "expand"}</button></div>
          )}
        />
      );
      expect(asFragment()).toMatchSnapshot();
    })
  });
});

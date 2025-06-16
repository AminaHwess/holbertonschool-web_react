import React from "react";
import { shallow } from "enzyme";
import Notification from "./Notification";

describe("Notification component tests", () => {
  it("clicking on the menu item calls handleDisplayDrawer", () => {
    const handleDisplayDrawer = jest.fn();

    const wrapper = shallow(
      <Notification
        displayDrawer={false}
        handleDisplayDrawer={handleDisplayDrawer}
      />
    );

    // Simulate click on the menu item
    wrapper.find(".menuItem").simulate("click");

    // Check if handleDisplayDrawer was called
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it("clicking on the close button calls handleHideDrawer", () => {
    const handleHideDrawer = jest.fn();

    const wrapper = shallow(
      <Notification displayDrawer={true} handleHideDrawer={handleHideDrawer} />
    );

    // Simulate click on the close button
    wrapper.find('button[aria-label="close"]').simulate("click");

    // Check if handleHideDrawer was called
    expect(handleHideDrawer).toHaveBeenCalled();
  });
});

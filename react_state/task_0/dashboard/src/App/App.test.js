import { shallow } from "enzyme";
import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";

describe("<App />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("Tests that App renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("Contains Header component", () => {
    expect(wrapper.find("Header").length).toBe(1);
  });

  it("Contains Login component", () => {
    expect(wrapper.contains(<Login />)).toBe(true);
  });

  it("Contains Footer component", () => {
    expect(wrapper.find("Footer").length).toBe(1);
  });

  it("Tests that CourseList is not displayed when not logged in", () => {
    expect(wrapper.find("CourseList").length).toBe(0);
  });

  it("Tests that handleDisplayDrawer is called when Notifications menu is clicked", () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, "handleDisplayDrawer"); // Spy on the method
    wrapper.instance().handleDisplayDrawer(); // Directly call the method
    expect(instance.handleDisplayDrawer).toHaveBeenCalled();
  });

  it("Tests that handleHideDrawer is called when the close button is clicked", () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, "handleHideDrawer"); // Spy on the method
    wrapper.instance().handleHideDrawer(); // Directly call the method
    expect(instance.handleHideDrawer).toHaveBeenCalled();
  });
});

describe("<App /> when logged in", () => {
  it("Tests that the Login component is not rendered", () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.contains(<Login />)).toBe(false);
  });

  it("Tests that CourseList component is rendered when logged in", () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find("CourseList").length).toBe(1);
  });
});

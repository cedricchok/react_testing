import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Home from "./Home";
import Blog from "./Blog";

Enzyme.configure({ adapter: new Adapter() });

describe("Search h1", () => {
  test("Search h1", () => {
    const home = mount(<Home />)

    expect(home.exists()).toBe(true);

    expect(home.find("h1")).toEqual("Home");
  })
})

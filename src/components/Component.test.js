import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Search h1", () => {
  test("renders", () => {
    const h1 = shallow(<h2></h2>)

    expect(h1.exists()).toBe(true);
  })
})

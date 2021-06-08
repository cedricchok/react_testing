// import { render, screen } from '@testing-library/react';
// import App from './App';
//
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Home from "./components/Home";
import Router from 'next/router';
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

describe("Search home", () => {
  test("renders", () => {
    const home = mount(<Home />)

    expect(home.exists()).toBe(true);
  })
})

describe("Test of Blog redirection", () => {
  const spies = {};

  beforeEach(() => {
    spies.routerChangeStart = jest.fn();
    Router.events.on("routerChangeStart", spies.routerChangeStart)
  });

  afterEach(() => {
    Router.events.off("routerChangeStart", spies.routerChangeStart);
  });

  test("Test blog page after click", async done => {
    const blog = mount(<App />);
    await blog
      .find(".link")
      .at(1)
      .simulate("click");

    expect(spies.routerChangeStart).toHaveBeenCalledWith("localhost:3000/blog");
  })
});

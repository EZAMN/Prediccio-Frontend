import React from "react";
import { mount } from "enzyme";
import ComparaTags from '../../components/ComparaTags'
require('../common.js')
var literals = require('../../config/literals.js')

describe("ComparaTags", () => {
  let props;
  let mountedComparaTags;
  const comparaTags = () => {
    if (!mountedComparaTags) {
      mountedComparaTags = mount(
        <ComparaTags {...props} />
      );
    }
    return mountedComparaTags;
  }

  beforeEach(() => {
    mountedComparaTags = undefined;
  });

  it("always renders an ul", () => {
    const uls = comparaTags().find("ul");
    expect(uls.length).toBe(1)
  });

  it("always renders 6 lis inside the ul", () => {
    let lis = comparaTags().find("ul").find("li");
    expect(lis.length).toBe(6);;
  });

  it("shows the first li empty", () => {
    let li = comparaTags().find("ul").find("li").first();
    expect(li.text()).toBe('');
  });

  it("shows the right text on the second li", () => {
    let li = comparaTags().find("ul").find("li").at(1);
    expect(li.text()).toBe(literals.default.comarca);
  });

  it("shows the right text on the third li", () => {
    let li = comparaTags().find("ul").find("li").at(2);
    expect(li.text()).toBe(literals.default.estat);
  });

  it("shows the right text on the fourth li", () => {
    let li = comparaTags().find("ul").find("li").at(3);
    expect(li.text()).toBe(literals.default.tempMax);
  });

  it("shows the right text on the fifth li", () => {
    let li = comparaTags().find("ul").find("li").at(4);
    expect(li.text()).toBe(literals.default.tempMin);
  });

  it("shows the right text on the sixth li", () => {
    let li = comparaTags().find("ul").find("li").at(5);
    expect(li.text()).toBe(literals.default.precipitacio);
  });
});


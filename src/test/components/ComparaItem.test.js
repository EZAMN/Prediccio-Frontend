import React from "react";
import { mount } from "enzyme";
import ComparaItem from '../../components/ComparaItem'
require('../common.js')

describe("ComparaItem", () => {
  let props;
  let mountedComparaItem;
  const comparaItem = () => {
    if (!mountedComparaItem) {
      mountedComparaItem = mount(
        <ComparaItem {...props} />
      );
    }
    return mountedComparaItem;
  }

  beforeEach(() => {
    props = {
      municipi: {
        comarca:{nom:'hola'},
        nom:'lmdt'
      }
    };
    mountedComparaItem = undefined;
  });

  it("always renders an ul", () => {
    const uls = comparaItem().find("ul");
    expect(uls.length).toBe(1)
  });

  it("always renders 6 lis inside the ul", () => {
    let lis = comparaItem().find("ul > li");
    expect(lis.length).toBe(6);;
  });

  it("shows the first li with 4 divs", () => {
    let divs = comparaItem().find("ul li").first().find("div");
    expect(divs.length).toBe(4);
  });

  it("shows the first div in the first li with the correct text", () => {
    let div = comparaItem().find("ul li").first().find("div").first();
    expect(div.text()).toBe(props.municipi.nom);
  });
  
  it("shows the right text on the second li", () => {
    let li = comparaItem().find("ul li").at(1);
    expect(li.text()).toBe(props.municipi.comarca.nom);
  });

  it("shows the right img tag on the third li", () => {
    let img = comparaItem().find("ul li").at(2).find("img");
    expect(img.prop('src')).toBe('images/empty.png');
  });

  it("shows the right img tag alt prop on the third li", () => {
    let img = comparaItem().find("ul li").at(2).find("img");
    expect(img.prop('alt')).toBe('');
  });

  it("shows the right text on the third li", () => {
    let li = comparaItem().find("ul li").at(3);
    expect(li.text()).toBe('');
  });

  it("shows the right text on the third li", () => {
    let li = comparaItem().find("ul li").at(4);
    expect(li.text()).toBe('');
  });

  it("shows the right text on the third li", () => {
    let li = comparaItem().find("ul li").at(5);
    expect(li.text()).toBe('');
  });

});
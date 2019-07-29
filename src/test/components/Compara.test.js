import React from "react";
import { mount } from "enzyme";
import Compara from "../../components/Compara";
import ComparaTags from '../../components/ComparaTags'
import ComparaItem from '../../components/ComparaItem'
require('../common.js')


describe("Compara", () => {
  let props;
  let mountedCompara;
  const compara = () => {
    if (!mountedCompara) {
      mountedCompara = mount(
        <Compara {...props} />
      );
    }
    return mountedCompara;
  }

  beforeEach(() => {
    props = {
      compared: {
        item1:{nom:'hola',comarca:{nom:'comarnom1'}},
        item2:{nom:'adeu',comarca:{nom:'comarnom2'}}
      }
    };
    mountedCompara = undefined;
  });

  it("always renders a section", () => {
    const sections = compara().find("section");
    expect(sections.length).toBeGreaterThan(0);
  });

  it("always renders a div inside a section", () => {
    let divs = compara().find("section").find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  it("has the item1 in the props", () => {
    expect(compara().props.item1).toBe();
  });

  it("has the item2 in the props", () => {
    expect(compara().props.item2).toBe();
  });

  it("always renders a `ComparaTags`", () => {
    expect(compara().find(ComparaTags).length).toBe(1);
  });

  describe("rendered `ComparaTags`", () => {
    it("does not receive any props", () => {
      let localComparaTags = compara().find(ComparaTags);
      expect(Object.keys(localComparaTags.props()).length).toBe(0);
    });
  });

  it("always renders 2 `ComparaItem`", () => {
    expect(compara().find(ComparaItem).length).toBe(2);
  });

  it("ComparaItem1 has the same compared item", () => {
    let ComparaItem1 = compara().find(ComparaItem).first();
    expect(ComparaItem1.props().municipi).toBe(props.compared.item1);
  });

  it("ComparaItem2 has the same compared item", () => {
    let ComparaItem2 = compara().find(ComparaItem).last();
    expect(ComparaItem2.props().municipi).toBe(props.compared.item2);
  });
});

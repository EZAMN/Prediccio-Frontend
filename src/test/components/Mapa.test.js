import React from "react";
import { mount } from "enzyme";
import Mapa from '../../components/Mapa'
require('../common.js')

describe("Mapa", () => {
  let props;
  let mountedMapa;
  const mapa = () => {
    if (!mountedMapa) {
        mountedMapa = mount(
        <Mapa {...props} />
      );
    }
    return mountedMapa;
  }

  beforeEach(() => {
    props = {
        coordenades: {
            latitud:"latvalue",
            longitud:"longvalue"
        }
    };
    mountedMapa = undefined;
  });

  it("always renders a div", () => {
    const div = mapa().find("div");
    expect(div.length).toBeGreaterThan(0)
  });

  it("always renders a div inside a div", () => {
    let div = mapa().find("div div");
    expect(div.length).toBe(1);
  });

  it("always renders a iframe inside an div", () => {
    let iframes = mapa().find("div div iframe");
    expect(iframes.length).toBe(1);
  });

  it("correctly builds the src", () => {
    let iframe = mapa().find("div div iframe");
    expect(iframe.prop('src')).toBe('https://maps.google.com/maps?q=' + props.coordenades.latitud + ',' + props.coordenades.longitud + '&t=&z=9&ie=UTF8&iwloc=&output=embed');
  });

});


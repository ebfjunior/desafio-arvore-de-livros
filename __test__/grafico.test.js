import React from "react";

import Periodos from "../src/business/periodos";
import Grafico from "../src/components/grafico";

describe("Componente Gráfico", () => {
  it("State Períodos deve ser inicializado corretamente", () => {
    const wrapper = mount(<Grafico />);
    expect(Object.keys(wrapper.state().periodos.processados).length).toEqual(
      175
    );
  });

  it("State Data Final deve ser inicializado corretamente", () => {
    const wrapper = mount(<Grafico />);
    expect(wrapper.state().data_final).toEqual(
      new Date().toISOString().slice(0, 10)
    );
  });

  it("State Data Inicial deve ser um ano antes que a Data Final", () => {
    var lastYear = new Date();
    lastYear.setDate(lastYear.getDate() - 365);

    const wrapper = mount(<Grafico />);
    expect(wrapper.state().data_inicial).toEqual(
      lastYear.toISOString().slice(0, 10)
    );
  });
});

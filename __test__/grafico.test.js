import React from 'react';

import Periodos from '../src/business/periodos';
import Grafico from '../src/components/grafico';

describe('Componente Gráfico', () => {
  it('Deve renderizar adequadamente', () => {
    const wrapper = mount(<Grafico/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('State Períodos deve ser inicializado corretamente', () => {
    const wrapper = mount(<Grafico/>);
    expect(Object.keys(wrapper.state().periodos.processados).length).toEqual(175);
  });

  it('State Data Final deve ser inicializado corretamente', () => {
    const wrapper = mount(<Grafico/>);
    expect(wrapper.state().data_final).toEqual("2017-06-08");
  });

  it('State Data Inicial deve ser um ano antes que a Data Final', () => {
    const wrapper = mount(<Grafico/>);
    expect(wrapper.state().data_inicial).toEqual("2016-06-08");
  });
});
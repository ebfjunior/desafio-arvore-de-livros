import React from 'react';

import Mensal from '../src/components/mensal';

describe('Componente Mensal', () => {
  it('Deve renderizar adequadamente', () => {
    const mes = {
        "3" : {"2016-10-12" : 1},
        "4" : {"2016-10-23" : 38}
    };
    const wrapper = mount(<Mensal periodosMes={mes} ano="2016" mes="10"/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('Estado deve ser inicializado corretamente', () => {
    const mes = {
        "3" : {"2016-10-12" : 1},
        "4" : {"2016-10-23" : 38}
    };
    const wrapper = mount(<Mensal periodosMes={mes} ano="2016" mes="10"/>);

    expect(wrapper.state().mes).toEqual("10");
    expect(wrapper.state().periodos).toEqual(mes);
  });

  it('Número de semanas do mês deve ser setado corretamente', () => {
    const mes = {
        "3" : {"2016-10-12" : 1},
        "4" : {"2016-10-23" : 38}
    };
    const wrapper = mount(<Mensal periodosMes={mes} ano="2016" mes="10"/>);

    expect(wrapper.instance().numeroDeSemanas).toEqual(6);
  });
});
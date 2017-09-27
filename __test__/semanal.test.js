import React from 'react';

import Semanal from '../src/components/semanal';

describe('Componente Semanal', () => {
  it('Deve renderizar adequadamente', () => {
    const semana = {
        "3" : {"2016-10-12" : 1}
    };
    const wrapper = mount(<Semanal ano="2016" mes="10" dias={[9,10,11,12,13,14,15]} periodosSemana={semana["3"]} semana="3"/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('Estado deve ser inicializado corretamente', () => {
    const semana = {
        "3" : {"2016-10-12" : 1}
    };
    const wrapper = mount(<Semanal ano="2016" mes="10" dias={[9,10,11,12,13,14,15]} periodosSemana={semana["3"]} semana="3"/>);

    expect(wrapper.state().semana).toEqual("3");
    expect(wrapper.state().periodos).toEqual(semana["3"]);
  });

});
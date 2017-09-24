import React from 'react';

import Anual from '../src/components/anual';

describe('Componente Anual', () => {
  it('Deve renderizar adequadamente', () => {
    const periodos = {"2016-10-12" : 1, "1978-10-10" : 14,"2016-12-03" : 38};
    const wrapper = mount(<Anual periodos={periodos} data_inicial={'2015-12-03'} data_inicial={'2016-12-03'}/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('State Períodos deve ser inicializado corretamente', () => {
    const periodos = {"2016-10-12" : 1, "1978-10-10" : 14,"2016-12-03" : 38};
    const wrapper = mount(<Anual periodos={periodos} data_inicial={'2015-12-03'} data_final={'2016-12-03'}/>);

    expect(Object.keys(wrapper.state().periodos).length).toEqual(3);
  });

  it('State Data Final deve ser inicializado corretamente', () => {
    const periodos = {"2016-10-12" : 1, "1978-10-10" : 14,"2016-12-03" : 38};
    const wrapper = mount(<Anual periodos={periodos} data_inicial={'2015-12-03'} data_final={'2016-12-03'}/>);

    expect(wrapper.state().data_final).toEqual('2016-12-03');
  });

  it('State Data Inicial deve ser um ano antes que a Data Final', () => {
    const periodos = {"2016-10-12" : 1, "1978-10-10" : 14,"2016-12-03" : 38};
    const wrapper = mount(<Anual periodos={periodos} data_inicial={'2015-12-03'} data_final={'2016-12-03'}/>);

    expect(wrapper.state().data_inicial).toEqual('2015-12-03');
  });
});
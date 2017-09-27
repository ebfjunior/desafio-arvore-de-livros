import React from 'react';

import Diario from '../src/components/diario';

describe('Componente Diário', () => {
  it('Deve renderizar adequadamente', () => {
    const dia = {"2016-10-12" : 1};
    
    const wrapper = mount(<Diario date="2016-10-12" produtividade="1"/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('Estado deve ser inicializado corretamente', () => {
    const date = "2016-10-12";
    const produtividade = "1";
    
    const wrapper = mount(<Diario date="2016-10-12" produtividade="1"/>);

    expect(wrapper.state().date).toEqual(date);
    expect(wrapper.state().produtividade).toEqual(produtividade);
  });

});
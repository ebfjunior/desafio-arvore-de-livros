import React from 'react';

import Diario from '../src/components/diario';

describe('Componente Diário', () => {
  it('Deve renderizar adequadamente', () => {
    const dia = {"2016-10-12" : 1};
    
    const wrapper = mount(<Diario ano="2016" mes="10" semana="3" periodo={dia}/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('Estado deve ser inicializado corretamente', () => {
    const dia = {"2016-10-12" : 1};
    
    const wrapper = mount(<Diario ano="2016" mes="10" semana="3" periodo={dia}/>);

    expect(wrapper.state().periodo).toEqual(dia);
  });

});
import React from 'react';

import Anual from '../src/components/anual';

describe('Componente Anual', () => {
  it('Deve renderizar adequadamente', () => {
    const periodos = {
      "2016" : {
        "10" : {"2016-10-12" : 1, "2016-10-23" : 38},
        "12" : {"2016-12-02" : 17}
      },
      "2017" : {
        "01" : {"2017-01-05" : 8}
      }
    };
    const wrapper = mount(<Anual periodos={periodos} data_inicial={'2016-09-03'} data_final={'2017-09-03'}/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('Estado deve ser inicializado corretamente', () => {
    const periodos = {
      "2016" : {
        "10" : {"2016-10-12" : 1, "2016-10-23" : 38},
        "12" : {"2016-12-02" : 17}
      },
      "2017" : {
        "01" : {"2017-01-05" : 8}
      }
    };
    const wrapper = mount(<Anual periodos={periodos} data_inicial={'2016-09-03'} data_final={'2017-09-03'}/>);

    expect(wrapper.state().periodos).toEqual(periodos);
    expect(wrapper.state().data_inicial).toEqual('2016-09-03');
    expect(wrapper.state().data_final).toEqual('2017-09-03');
  });

});
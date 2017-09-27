import Periodos from '../src/business/periodos';
import _ from 'lodash';

describe('Classe Períodos', () => {
  it("O JSON deve ser processado corretamente com parâmetro", () => {
    const sampleData = [{"date":"2016-10-12","count": 1},{"date":"2016-12-03","count": 38},{"date":"1978-10-10","count": 14}];
    const sampleOutput = {"2016-10-12" : 1, "1978-10-10" : 14,"2016-12-03" : 38};

    const periodos = new Periodos(sampleData);

    expect(periodos.processados).toEqual(sampleOutput);
    expect(periodos.data_inicial).toEqual('1978-10-10');
    expect(periodos.data_final).toEqual('2016-12-03');
  });

  it("O JSON deve ser processado corretamente sem parâmetro", () => {
    const periodos = new Periodos();

    expect(Object.keys(periodos.processados).length).toEqual(175);
    expect(periodos.data_inicial).toEqual('2016-10-12');
    expect(periodos.data_final).toEqual('2017-06-08');
  });

  it('Os períodos devem ser agrupados corretamente', () => {
    const sampleData = [{"date":"2016-10-12","count": 1},{"date":"2016-12-03","count": 38},{"date":"2016-10-23","count": 56},{"date":"1978-10-10","count": 14}];
    const sampleOutput = {
      "1978" : {
        "10" : {
          "2" : {"1978-10-10" : 14}
        }
      },
      "2016" : {
        "10" : {
          "3" : {"2016-10-12" : 1},
          "4" : {"2016-10-23" : 56}
        },
        "12" : {
          "1" : {"2016-12-03" : 38}
        }
      }
    };

    const periodos = new Periodos(sampleData);
    periodos.group();

    expect(periodos.grouped).toEqual(sampleOutput);
  });

  it('A quantidade de semanas do mês deve ser calculada corretamente', () => {
    expect(Periodos.countSemanasDoMes(2016, 10)).toEqual(6);
    expect(Periodos.countSemanasDoMes(1978, 11)).toEqual(5);
    expect(Periodos.countSemanasDoMes(2016, 2)).toEqual(5);
    expect(Periodos.countSemanasDoMes(2017, 7)).toEqual(6);
  });

  it('Os meses do período devem ser calculados corretamente', () => {
    expect(Periodos.getMesesDoPeriodo('2016-08-15', '2017-08-15')).toEqual({"2016": [8, 9, 10, 11, 12], "2017": [1, 2, 3, 4, 5, 6, 7, 8]});
    expect(_.flatten(_.values(Periodos.getMesesDoPeriodo('2015-08-15', '2017-08-15'))).length).toEqual(25);
    expect(_.flatten(_.values(Periodos.getMesesDoPeriodo('2016-01-01', '2017-12-31'))).length).toEqual(25);
  });

  it('Os dias da semana devem ser calculados corretamente', () => {
    expect(Periodos.getDiasDaSemana(2016, 10, 1)).toEqual([1]);
    expect(Periodos.getDiasDaSemana(2016, 10, 2)).toEqual([2,3,4,5,6,7,8]);
    expect(Periodos.getDiasDaSemana(2016, 10, 6)).toEqual([30, 31]);
    expect(Periodos.getDiasDaSemana(2016, 2, 5)).toEqual([28, 29]);
  });
});
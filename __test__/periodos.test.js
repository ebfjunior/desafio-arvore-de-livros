import Periodos from '../src/business/periodos';

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
});
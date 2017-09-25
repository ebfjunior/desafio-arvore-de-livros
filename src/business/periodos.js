import JSON from './json_data';

export default class Periodos{
  constructor(data = JSON){
    this.nao_processados = data;
    this.processados = this.process();

    const sorted_keys = Object.keys(this.processados).sort();
    this.data_inicial = sorted_keys[0];
    this.data_final = sorted_keys[sorted_keys.length - 1];
  }
  process(){
    return this.nao_processados.reduce((hash, current) => {
      hash[current.date] = current.count;
      return hash;
    }, {});
  }
  group(){
    this.grouped = Object.keys(this.processados).reduce((hash, current) => {
      const split = current.split("-");
      const ano = split[0];
      const mes = split[1];

      const date= new Date(current);
      const firstMonthDay = new Date(date.getFullYear(), mes - 1, 1);
      const lastMonthDay = new Date(date.getFullYear(), mes - 1, 0);
      const semana = Math.ceil((date.getDate()  / 7) + (date.getDay() < firstMonthDay.getDay() ? 1 : 0));

      if(hash[ano] === undefined) hash[ano] = {};
      if(hash[ano][mes] === undefined) hash[ano][mes] = {};
      if(hash[ano][mes][semana] === undefined) hash[ano][mes][semana] = {};

      hash[ano][mes][semana][current] = this.processados[current];

      return hash;
    }, {});
  }

  static countSemanasDoMes(ano, mes){
    const firstMonthDay = new Date(ano, mes - 1, 1);
    const lastMonthDay = new Date(ano, mes - 1, 0);

    let totalSemanas = 1;
    let sumDiasDoMes = 7 - (firstMonthDay.getDay());
    for(sumDiasDoMes;sumDiasDoMes <= lastMonthDay.getDate();sumDiasDoMes += 7){
      totalSemanas++;
    }

    return totalSemanas;
  }
}
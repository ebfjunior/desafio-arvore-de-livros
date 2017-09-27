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
      const ano = parseInt(split[0], 10);
      const mes = parseInt(split[1], 10);

      const date= new Date(current);
      const firstMonthDay = new Date(date.getFullYear(), mes - 1, 1);
      const semana = parseInt(Math.ceil((date.getDate()  / 7) + (date.getDay() < firstMonthDay.getDay() ? 1 : 0)), 10);

      if(hash[ano] === undefined) hash[ano] = {};
      if(hash[ano][mes] === undefined) hash[ano][mes] = {};
      if(hash[ano][mes][semana] === undefined) hash[ano][mes][semana] = {};

      hash[ano][mes][semana][current] = this.processados[current];

      return hash;
    }, {});
  }

  static countSemanasDoMes(ano, mes){
    const firstMonthDay = new Date(ano, mes - 1, 1);
    const lastMonthDay = new Date(ano, mes, 0);

    let totalSemanas = 1;
    let sumDiasDoMes = 7 - (firstMonthDay.getDay());
    for(sumDiasDoMes;sumDiasDoMes <= lastMonthDay.getDate();sumDiasDoMes += 7){
      totalSemanas++;
    }

    return totalSemanas;
  }

  static getMesesDoPeriodo(data_inicial, data_final){
    const firstDate = new Date(data_inicial);
    const lastDate = new Date(data_final);

    let currentYear = firstDate.getFullYear();
    let currentMonth = firstDate.getMonth() + 1;

    let meses = {};

    while(true){
      meses[currentYear] = meses[currentYear] || [];
      meses[currentYear].push(currentMonth);

      if(currentYear == lastDate.getFullYear() && currentMonth == lastDate.getMonth() + 1) break;

      if(currentMonth == 12){
         currentMonth = 1;
         currentYear++; 
      }else{
        currentMonth++;
      }

    }

    return meses;
  }

  static getDiasDaSemana(ano, mes, semana){
      const countSemanas = Periodos.countSemanasDoMes(ano, mes);

      const firstMonthDay = new Date(ano, mes - 1, 1);
      const lastMonthDay = new Date(ano, mes, 0);

      const diasDaPrimeiraSemana = 7 - firstMonthDay.getDay();

      let diasDaSemana = [];
      let primeiroDiaDaSemana;
      let countDiasDaSemana;

      if(semana == 1){
        primeiroDiaDaSemana = 1;
        countDiasDaSemana = diasDaPrimeiraSemana;
      } else {
        primeiroDiaDaSemana = diasDaPrimeiraSemana + ((semana - 2) * 7) + 1;
        countDiasDaSemana = 7;
      }

      for(let i = 1; i <= countDiasDaSemana; i++){
        const dia = primeiroDiaDaSemana + (i - 1);
        diasDaSemana.push(primeiroDiaDaSemana + (i - 1));

        if(dia == lastMonthDay.getDate()) break;
      }

      return diasDaSemana;
  }
}
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
}
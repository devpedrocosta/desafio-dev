import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() set data(_list:any[]){
   this.list =_list;
   const entradas = _list.filter((item)=>[1,4,5,6,7].includes(item.tipo)).reduce((a, b) => +a + +b.valor, 0)
   const saidas = _list.filter((item)=>[2,3,9].includes(item.tipo)).reduce((a, b) => +a + +b.valor, 0)
   this.total = entradas - saidas;
  };
  total:number =0;
  list:any = []
  constructor() { }

  ngOnInit(): void {
  }

  convertTime(time: string) {
    //funcoes meramente ilustrativas
    return `${time.substring(0, 2)}:${time.substring(3, 4)}:${time.substring(5, 6)}`;
  }

  convertdata(data: string) {
    //funcoes meramente ilustrativas
    return `0${data.substring(5, 6)}/0${data.substring(7, 8)}/${data.substring(0, 4)}`;
  }

  getFormattedPrice(price: number) {
     //funcoes meramente ilustrativas
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);}

}

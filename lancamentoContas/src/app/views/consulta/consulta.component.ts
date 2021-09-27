import { Component, OnInit } from '@angular/core';
import { ConsultaContaService } from 'src/app/services/consulta-conta.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css'],
})
export class ConsultaComponent implements OnInit {
  constructor(ConsultaContaService: ConsultaContaService) {
    ConsultaContaService.create()
      .subscribe((param)=>{
          this.lista = param.data.items;
      });
  }
  lista:any;
  selecionado:any;
  formulario:any = {
    "cliente":"",
    "id":"", 
    "merchantId":"",
    "paymentNode":"",
    "cnpjRoot":"",
    "date":"",
    "paymentType":"",
    "cardBrand":"",
    "authorizationCode":"",
    "truncatedCardNumber":"",
    "grossAmount":"",
    "netAmount":"",
    "terminal":"",
    "administrationFee":"",
    "channelCode":"",
    "channel":"",
    "withdrawAmount":"",
    "minimumMDRAmmount":"",
    "mdrTaxAmount":"",
    "mdrFeeAmount":"",
    "status":""
  };

  campos(){
    for(let item of this.lista){
      if(item.id == this.selecionado){
        this.formulario = item;
      }
    }
  }
  ngOnInit(): void {}

}

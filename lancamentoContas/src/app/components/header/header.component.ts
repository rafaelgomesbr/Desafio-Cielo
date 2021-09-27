import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  constructor() { }

  valor:string = "Início Dashboard";
  ngOnInit(): void {
  }
  
  nome(str: string){
    this.valor = str;
  }



}

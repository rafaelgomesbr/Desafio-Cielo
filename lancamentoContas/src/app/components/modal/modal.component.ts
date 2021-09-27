import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConsultaContaService } from 'src/app/services/consulta-conta.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent {
  rowTable:any;

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal, ConsultaContaService: ConsultaContaService) {
    this.rowTable = ConsultaContaService.tableModal(false)

  };
 
}
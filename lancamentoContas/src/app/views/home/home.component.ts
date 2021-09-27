import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConsultaContaService } from 'src/app/services/consulta-conta.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../components/modal/modal.component';

interface PeriodicElement {
  cnpj: number;
  pagamento: string;
  cliente: string;
  status: string;
  data: string;
  id: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  dataSource: MatTableDataSource<PeriodicElement>;
  ELEMENT_DATA: PeriodicElement[];
  displayedColumns: string[] = [
    'cliente',
    'cnpj',
    'pagamento',
    'data',
    'status',
  ];
  data: any;
  valores: any;
  clickedRows: any;
  formulario: any;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private ConsultaContaService: ConsultaContaService,
    private modalService: NgbModal
  ) {
    this.ConsultaContaService.create().subscribe(
      (param) => {
        this.ELEMENT_DATA = this.orderList(param.data.items);
        this.data = param.data;
        this.dataSource = new MatTableDataSource<PeriodicElement>(
          this.ELEMENT_DATA
        );
        this.clickedRows = new Set<PeriodicElement>();
        this.valores = {
          totalAmount: this.data.summary.totalAmount.toFixed(2),
          totalNetAmount: this.data.summary.totalNetAmount.toFixed(2),
          totalAverageAmount: this.data.summary.totalAverageAmount.toFixed(2),
          totalQuantity: this.data.summary.totalQuantity,
        };
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  orderList(param: any) {
    var lista = [];
    var elemento = {
      cnpj: 0,
      pagamento: '',
      cliente: '',
      status: '',
      data: '',
      id: '',
    };

    for (var atrib of param) {
      elemento.cnpj = atrib.cnpjRoot;
      elemento.pagamento = atrib.paymentType;
      elemento.cliente = atrib.cliente;
      elemento.status = atrib.status;
      elemento.id = atrib.id;
      elemento.data = this.converData(atrib.date);
      lista.push(Object.assign({}, elemento));
    }

    return lista;
  }

  converData(param: any) {
    let data = new Date(param);
    let strData = ` ${('0' + data.getDate()).slice(-2)} - ${(
      '0' +
      (data.getMonth() + 1)
    ).slice(-2)} - ${data.getFullYear()}`;
    return strData;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  listInModal(param: any) {
    for (let item of this.data.items) {
      if (item.id == param.id) {
        this.ConsultaContaService.tableModal(item);
        this.modalService.open(ModalComponent, {
          size: 'md',
        });
      }
    }
  }
}

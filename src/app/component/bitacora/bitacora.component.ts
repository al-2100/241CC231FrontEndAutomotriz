import {Component, OnInit} from '@angular/core';
import {BitacoraService} from "../../service/problema-tecnico.service";
import {ProblemaTecnico} from "../../model/problemaTecnico";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-bitacora',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './bitacora.component.html',
  styleUrl: './bitacora.component.css'
})

export class BitacoraComponent implements OnInit {
  bitacora : ProblemaTecnico[] = [];
  constructor(private bitacoraService: BitacoraService) { }

  ngOnInit(): void {
    this.getBitacoras();
  }

  getBitacoras(): void {
    this.bitacoraService.getBitacoras().subscribe(
      (result: any) => {
        this.bitacora = result;
      },
      (err: any) => {
        console.error(err);
      }
    );
  }
}

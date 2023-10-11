import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-nosotros',
  templateUrl: './sobre-nosotros.page.html',
  styleUrls: ['./sobre-nosotros.page.scss'],
})
export class SobreNosotrosPage implements OnInit {

  nombreFundador ='Lola Mento';
  nombreEmpresa = 'Troll Tech';
  fechaFundacion = '03/10/2023';
  sede = 'Mongolia';

  constructor() { }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  template: `
    <h2>Lista de proveedores del producto</h2>
    <ul>
      <li *ngFor="let proveedor of miArray">
        {{ proveedor.texto }} <!-- Muestra el texto del proveedor -->
        <img [src]="proveedor.avatar" alt="Proveedor"> <!-- Muestra la imagen del proveedor -->
      </li>
    </ul>
  `,
})
export class Tab2Page {
  miArray: { texto: string, avatar: string }[] = [
    { texto: "Acer", avatar:'/assets/LogoAcerBueno.png' },
    { texto: "Tempest", avatar:'/assets/tempest_logo.jfif' },
    { texto: "Asus", avatar:'/assets/logoAsus.jfif' },

   
  ];
  


  constructor() {}
}

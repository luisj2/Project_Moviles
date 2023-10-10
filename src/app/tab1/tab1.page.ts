import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  isChecked1: boolean = false; 
  isChecked2: boolean = false;
  isChecked3: boolean = false;  
 

  constructor(private toastController: ToastController) {}

  async mostrarToast() {
    // Verificar si al menos un checkbox está activado antes de mostrar un mensaje
      let message;
      if (this.isChecked1) {
        message = 'Troll Core I5 añadido al carrito\n';
        const toast = await this.toastController.create({
          message: message,
          duration: 1500,
          position: 'middle',
        });
        toast.present();
      }
      
    }
    async mostrarToast1() {
      // Verificar si al menos un checkbox está activado antes de mostrar un mensaje
        let message;
        if (this.isChecked2) {
          message = 'Grafica troll añadida al carrito\n';
          const toast = await this.toastController.create({
            message: message,
            duration: 1500,
            position: 'middle',
          });
          toast.present();
        }
       
      }
      async mostrarToast2() {
        // Verificar si al menos un checkbox está activado antes de mostrar un mensaje
          let message;
          if (this.isChecked3) {
            message = 'Monitor Troll añadida al carrito\n';
            const toast = await this.toastController.create({
              message: message,
              duration: 1500,
              position: 'middle',
            });
            toast.present();
          }
         
        }
}
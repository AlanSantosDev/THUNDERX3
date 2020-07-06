import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bicicleta Elétrica';
  valor:number = 0 ;

  alert1() {
    var x = this.valor;
    alert("Lance realizado por: " +x); 
  }
  
}
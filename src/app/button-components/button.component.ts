import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {CesiumDirective} from "../cesiumComponents/cesium.directive";

@Component({
  selector: '[appButton]',
  standalone: true,
  imports: [
    CesiumDirective
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent implements OnInit{

  @Input() name: string | undefined
  @Input() area: number | undefined;

  @ViewChild(CesiumDirective) cesiumDirective: any;

  constructor(){}


  ngOnInit(){}


/* public createRectangle(): void{
    console.log("rectangle çıktısı")
    //CesiumDirective. cesiumDirective.createRectangle()
    this.cesiumDirective.createRectangle(); // CesiumDirective içindeki fonksiyonu çağır

  }
*/
  calculateArea(){
    this.cesiumDirective.calculateArea(); // CesiumDirective içindeki fonksiyonu çağır
    //this.area = calculated;
  }

  clear(){
    this.cesiumDirective.clearArea();
  }
}


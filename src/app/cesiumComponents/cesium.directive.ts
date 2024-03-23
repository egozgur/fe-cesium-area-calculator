import { Directive, ElementRef, OnInit } from '@angular/core';
import { Viewer, ScreenSpaceEventType, Cartesian3 } from 'cesium';
import * as Cesium from "cesium";

@Directive({
  selector: '[cesiumDirective]',
  standalone: true,
})
export class CesiumDirective implements OnInit {
  private viewer!: Viewer;
  private topLeft: Cartesian3 | undefined;
  private bottomRight: Cartesian3 | undefined;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.viewer = new Viewer(this.el.nativeElement, {
      timeline: false, // zaman çizelgesini devre dışı bırak
      fullscreenButton: false, // tam ekran düğmesini devre dışı bırak
      animation : false // saat ayarını devre dışı bırak
    });

    this.viewer.screenSpaceEventHandler.setInputAction((clickEvent: any) => {
      const clickedPosition = clickEvent.position;

      if (clickedPosition) {
        const cartesian = this.viewer.scene.camera.pickEllipsoid(clickedPosition, this.viewer.scene.globe.ellipsoid);

        if (cartesian) {
          if (!this.topLeft) {
            this.topLeft = cartesian;
          } else if (!this.bottomRight) {
            this.bottomRight = cartesian;

            this.createRectangle();//dikdörtgenyapma fonksiyonunu çağır
          }
        } else {
          console.warn('Dünya koordinatları alınamadı.');
        }
      }
    }, ScreenSpaceEventType.LEFT_CLICK);
  }

  createRectangle(): void {
    if (this.topLeft && this.bottomRight) {
      // Sol üst ve sağ alt köşeleri al
      const topLeftCartographic = Cesium.Cartographic.fromCartesian(this.topLeft);
      const bottomRightCartographic = Cesium.Cartographic.fromCartesian(this.bottomRight);

      // Dikdörtgenin köşelerini tanımla
      const rectangleProperty = new Cesium.CallbackProperty(() => {
        return Cesium.Rectangle.fromCartographicArray([
          topLeftCartographic,
          bottomRightCartographic
        ]);
      }, false);

      // Dikdörtgenin malzemesini belirle
      const materialProperty = new Cesium.ColorMaterialProperty(
          Cesium.Color.fromCssColorString('rgba(238, 75, 43, 0.5)') // Örnek olarak yarı saydam beyaz renk
      );

      // Dikdörtgen için varlık oluştur
      const rectangleEntity = new Cesium.Entity({
        rectangle: {
          coordinates: rectangleProperty,
          material: materialProperty,
          height: 0 // Yükseklik sıfır olarak ayarlandı, düz bir dikdörtgen oluşturur
        }
      });

      // Dikdörtgen varlığını ekrana ekleyin
      this.viewer.entities.add(rectangleEntity);
    }

    // Köşeleri sıfırla
    //console.log("solustkose",this.topLeft,"sagaltkose",this.bottomRight)

    //this.calculateArea()//hesaplama fonksiyonunu çağır

    //this.topLeft = undefined;
    //this.bottomRight = undefined;
  }

  calculateArea(): string {
    if (this.topLeft && this.bottomRight) {
      // Sol üst ve sağ alt köşeleri al
      const topLeftCartographic = Cesium.Cartographic.fromCartesian(this.topLeft);
      const bottomRightCartographic = Cesium.Cartographic.fromCartesian(this.bottomRight);

      // Sol üst ve sağ alt noktaları düzlem koordinatlarına dönüştür
      const topLeftProjected = Cesium.Cartographic.toCartesian(topLeftCartographic);
      const bottomRightProjected = Cesium.Cartographic.toCartesian(bottomRightCartographic);

      // Genişlik ve yüksekliği hesapla (metre cinsinden)
      const width = Math.abs(topLeftProjected.x - bottomRightProjected.x);
      const height = Math.abs(topLeftProjected.y - bottomRightProjected.y);

      // Alanı hesapla (metre kare cinsinden)
      const areaSquareMeters = width * height;

      // Alanı kilometrekare cinsine dönüştür ve biçimlendir
      const areaSquareKilometers = areaSquareMeters / 1000000;
      let formattedArea = areaSquareKilometers.toLocaleString("tr-TR");

      // Alanın son üç hanesini sil
      const index = formattedArea.lastIndexOf(",");
      if (index !== -1) {
        formattedArea = formattedArea.substring(0, index);
      }

      // Sonucu ekrana yazdır
      console.log("Dikdörtgenin alanı:", formattedArea, "km^2");
      return formattedArea;
    } else {
      console.warn("Alan hesaplanamıyor: Köşeler belirlenmemiş.")
      return "0";
    }
  }

  clearArea(): void{
    // Dikdörtgeni ekran üzerinden kaldır
    this.viewer.entities.removeAll();

    // Köşeleri sıfırla
    this.topLeft = undefined;
    this.bottomRight = undefined;
  }
}

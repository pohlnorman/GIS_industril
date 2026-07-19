import {
  AfterViewInit,
  Component,
  inject 
} from '@angular/core';
import { SvgMapService } from '../../services/svg-map';

import * as L from 'leaflet';

@Component({
  selector: 'app-leaflet-map',
  standalone: true,
  imports: [],
  templateUrl: './leaflet-map.html',
  styleUrl: './leaflet-map.css'
})
export class LeafletMap implements AfterViewInit {

  private readonly svgService = inject(SvgMapService);
  private map!: L.Map;
  private svgElement!: SVGSVGElement;

  ngAfterViewInit(): void {

    this.initializeMap();

  }

  private initializeMap(): void {

    this.map = L.map('map',{

      crs: L.CRS.Simple,

      zoomControl:true,

      attributionControl:false,

      minZoom:-2,

      maxZoom:5,

    });

    this.loadSvg();
  }

  private loadSvg(): void {

  this.svgService.loadMap().subscribe({

    next: (svgText) => {

      const parser = new DOMParser();

      const svgDocument = parser.parseFromString(
        svgText,
        'image/svg+xml'
      );

      const svgElement = svgDocument.querySelector('svg');

        if (!svgElement) {

          console.error('No se encontró el elemento SVG.');

          return;

        }
        this.svgElement = svgElement;

      const bounds = [

        [0, 0],

        [800, 1200]

      ] as L.LatLngBoundsExpression;

      L.svgOverlay(
        svgElement,
        bounds
      ).addTo(this.map);
      const svgEnMapa = this.map.getContainer().querySelector('svg');

      console.log(svgEnMapa);
      console.log(this.map.getContainer().innerHTML);
      this.map.fitBounds(bounds);
      this.initializeSvgEvents();

    },

    error: (error) => {

      console.error(error);

    }

  });

}

private initializeSvgEvents(): void {

    const elements = this.svgElement.querySelectorAll('[id]');

    elements.forEach((element) => {

        element.addEventListener('click', () => {

            console.log(
                'Elemento seleccionado:',
                element.id
            );

        });

    });

}

}
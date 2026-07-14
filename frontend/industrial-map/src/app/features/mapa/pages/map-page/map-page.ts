import { Component } from '@angular/core';
import { LeafletMap } from '../../components/leaflet-map/leaflet-map';
import { SvgViewer } from '../../components/svg-viewer/svg-viewer';

@Component({
  selector: 'app-map-page',
  standalone: true,
  imports: [LeafletMap],
  templateUrl: './map-page.html',
  styleUrl: './map-page.css',
})
export class MapPage {}

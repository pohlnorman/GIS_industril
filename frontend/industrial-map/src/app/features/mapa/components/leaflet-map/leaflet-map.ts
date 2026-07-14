import { Component } from '@angular/core';
import { SvgViewer } from '../svg-viewer/svg-viewer';

@Component({
  selector: 'app-leaflet-map',
  standalone: true,
  imports: [SvgViewer],
  templateUrl: './leaflet-map.html',
  styleUrl: './leaflet-map.css',
})
export class LeafletMap {}

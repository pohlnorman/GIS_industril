import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SvgMapService {

  private readonly http = inject(HttpClient);

  /**
   * Carga el archivo SVG desde assets.
   */
  loadMap(): Observable<string> {
    return this.http.get(
      'assets/planos/planta.svg',
      {
        responseType: 'text'
      }
    );
  }

}
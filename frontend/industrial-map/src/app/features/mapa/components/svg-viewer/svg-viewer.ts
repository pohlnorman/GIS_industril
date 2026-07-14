import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SvgMapService } from '../../services/svg-map';

@Component({
  selector: 'app-svg-viewer',
  standalone: true,
  imports: [],
  templateUrl: './svg-viewer.html',
  styleUrl: './svg-viewer.css',
})
export class SvgViewer implements OnInit{

  private readonly cdr = inject(ChangeDetectorRef);
  private readonly svgService = inject(SvgMapService);
  private readonly sanitizer = inject(DomSanitizer);
  svgContent: SafeHtml = '';


  ngOnInit(): void {
    console.log('ngOnInit');
    this.svgService.loadMap().subscribe({
      next: (svg) => {
        console.log('SVG recibido');
        this.svgContent = this.sanitizer.bypassSecurityTrustHtml(svg);
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
  
}

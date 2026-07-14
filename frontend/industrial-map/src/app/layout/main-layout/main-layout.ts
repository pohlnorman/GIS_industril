import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from '../navbar/navbar';
import { Sidebar } from '../sidebar/sidebar';
import { RightPanel } from '../right-panel/right-panel';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterOutlet,Navbar,Sidebar,RightPanel
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {}

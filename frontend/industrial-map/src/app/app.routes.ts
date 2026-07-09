import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { MapPage } from './features/mapa/pages/map-page/map-page';

export const routes: Routes = [
    {
    path: '',
    component: MainLayout,
    children: [
        {
            path: '',
        component: MapPage
        }
    ]
  }
];

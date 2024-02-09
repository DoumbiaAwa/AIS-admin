import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/compte', title: 'Comptes',  icon:'ni-planet text-blue', class: '' },
    { path: '/acteur', title: 'Acteurs',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/conseils', title: 'Conseils',  icon:'ni-single-02 text-yellow', class: '' },
    // { path: '/enquete', title: 'Enquêtes',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/message', title: 'Messages',  icon:'ni-key-25 text-info', class: '' },
    { path: '/produit', title: 'Produits',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/categori', title: 'Categories',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/speculation', title: 'Speculations',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/zone', title: 'Zone de production',  icon:'ni-circle-08 text-pink', class: '' }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}

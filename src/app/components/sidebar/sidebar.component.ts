import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'fas fa-tachometer-alt text-blue', class: '' },
    { path: '/compte', title: 'Comptes', icon: 'fas fa-user text-purple', class: '' },
    { path: '/acteur', title: 'Acteurs', icon: 'fas fa-users text-yellow', class: '' },
    { path: '/conseils', title: 'Conseils', icon: 'fas fa-lightbulb text-red', class: '' },
    // { path: '/enquete', title: 'Enquêtes', icon: 'fas fa-list-alt text-#FFAA00', class: '' },
    { path: '/message', title: 'Messages', icon: 'fas fa-envelope text-green', class: '' },
    { path: '/produit', title: 'Filière', icon: 'fas fa-industry text-orange', class: '' },
    { path: '/categori', title: 'Categories', icon: 'fas fa-list text-pink', class: '' },
    { path: '/speculation', title: 'Speculations', icon: 'fas fa-chart-pie text-green', class: '' },
    { path: '/zone', title: 'Zone de production', icon: 'fas fa-globe text-blue', class: '' },
    { path: '/parametre', title: 'Paramètres généraux', icon: 'fas fa-cogs', class: '' },
    // { path: '/corbeille', title: 'Corbeille', icon: 'fas fa-globe text-#FFAA00', class: '' },

]

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

import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';


declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/pages/dashboard', title: 'Dashboard',  icon: 'fas fa-home', class: '' },
    { path: '/pages/compte', title: 'Acteurs', icon: 'fas fa-user-friends', class: '' },
    { path: '/pages/acteur', title: 'Type acteur', icon: 'fas fa-users ', class: '' },
    { path: '/pages/conseils', title: 'Conseils', icon: 'fas fa-lightbulb ', class: '' },
    // { path: '/pages/enquete', title: 'Enquêtes', icon: 'fas fa-list-alt text-#FFAA00', class: '' },
    { path: '/pages/message', title: 'Messages', icon: 'fas fa-envelope ', class: '' },
    { path: '/pages/produit', title: 'Filière', icon: 'fas fa-industry ', class: '' },
    { path: '/pages/categori', title: 'Categories', icon: 'fas fa-list ', class: '' },
    { path: '/pages/speculation', title: 'Speculations', icon: 'fas fa-chart-pie ', class: '' },
    { path: '/pages/zone', title: 'Zone de production', icon: 'fas fa-globe ', class: '' },
    { path: '/pages/parametre', title: 'Paramètres généraux', icon: 'fas fa-cog', class: '' },
    { path: '/pages/pays', title: 'Pays', icon: 'fas fa-flag text-flag-color ', class: '' },
    { path: '/pages/unite', title: 'Unité', icon: 'fas fa-ruler ', class: '' },



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


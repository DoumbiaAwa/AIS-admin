import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddActeurComponent } from '../add-acteur/add-acteur.component';
import { ActeurService } from 'src/app/services/acteur/acteur.service';
@Component({
  selector: 'app-acteurs',
  templateUrl: './acteurs.component.html',
  styleUrls: ['./acteurs.component.scss']
})
export class ActeursComponent implements OnInit {

  constructor(private dialog: MatDialog, private acteurService:ActeurService) {}
  
  openDialog() {
    const dialogRef = this.dialog.open(AddActeurComponent , {
      width: '528px',
      height: '500px',
      panelClass: 'warning-dialog',
      position: { 
      top: '-20%',
      left: '35%'
     },
    });
  }

  ngOnInit(): void {
   
  }




   change() {
    const bouton = document.getElementById('bouton');
    var boutonEtat = true;
    bouton.addEventListener('click', () => {
      if (boutonEtat) {
        bouton.textContent = 'Désactiver';
        bouton.classList.remove('active');
        bouton.classList.add('desactive');
        // Ajoutez ici les actions à effectuer lorsque le bouton est activé
      } else {
        bouton.textContent = 'Activer';
        bouton.classList.remove('desactive');
        bouton.classList.add('active');
        // Ajoutez ici les actions à effectuer lorsque le bouton est désactivé
      }
  
      boutonEtat = !boutonEtat; // Inverse l'état du bouton
    });
  
  


}

}
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActeurService } from 'src/app/services/acteur/acteur.service';
import { Acteurs } from 'src/app/model/acteur';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-add-acteur',
  templateUrl: './add-acteur.component.html',
  styleUrls: ['./add-acteur.component.scss']
})
export class AddActeurComponent implements OnInit {
  acteurForm: FormGroup;
  acteurData: Acteurs[];

  
  constructor(private dialogRef: MatDialogRef<AddActeurComponent>, private acteurService:ActeurService, private fb: FormBuilder) {
    this.acteurForm = this.fb.group({ 
      idTypeActeur:'',
      codeTypeActeur:'',
      libelle: '',
      descriptionTypeActeur: '', 
      statutTypeActeur: '',
      personneModif:'',
   
     });
   }

  ngOnInit(): void {

  
    // this.ajout();
  }

  ajout() {
    const acteurFormValue = this.acteurForm.value;
    this.acteurService.addActeur(acteurFormValue).subscribe((data) => {
      // Assuming you have a property acteurData to store the fetched data
      // this.acteurData = data;
      console.log(data);
    });
  }
  annuler(): void {
    this.dialogRef.close('annuler');
  }

}

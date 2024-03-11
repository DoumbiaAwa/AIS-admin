import { Component, OnInit } from '@angular/core';
import { ParametreGenerauxService } from 'src/app/services/parametreGeneraux/parametre-generaux.service';
import { ParametreGeneraux } from 'src/app/model/parametreGeneraux';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.scss']
})
export class ParametreComponent implements OnInit {
  parametreGeneraux: Observable<ParametreGeneraux[]>;

constructor(private parametreGenerauxService: ParametreGenerauxService) {}

listeParametre() {
  this.parametreGenerauxService.getParametre().subscribe(
    (data: ParametreGeneraux[]) => {
      this.parametreGeneraux = this.parametreGenerauxService.getParametre();
      console.log('donnee', this.parametreGeneraux);
    },
    error => {
      console.error(error);
    }
  );
}

ngOnInit(): void {
  this.listeParametre();
}


}

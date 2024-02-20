import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
// import { LoginComponent } from './pages/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
// import { CompteDetailComponent } from './pages/compte-detail/compte-detail.component';
// import { MyComponentComponent } from './my-component/my-component.component';
// import { PagesComponent } from './acteurs/pages/pages.component';
// import { ActeursComponent } from './acteurs/acteurs.component';
// import { ProduitComponent } from './produit/produit.component';
// import { CompteComponent } from './compte/compte.component';
// import { MessageComponent } from './message/message.component';
// import { EnqueteComponent } from './enquete/enquete.component';
// import { ConseilsComponent } from './conseils/conseils.component';
import {MatDialogModule} from '@angular/material/dialog';
// import { CorbeilleComponent } from './pages/corbeille/corbeille.component';
// import { ParametreComponent } from './parametre/parametre.component';
// import { DemandeMessageComponent } fro./pages/demande-message/demande-message.componentent';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddActeurComponent } from './pages/add-acteur/add-acteur.component';
// import { PaysComponent } from './pages/pays/pays.component';
// import { AddPaysComponent } from './pages/add-pays/add-pays.component';
// import { PagesComponent } from './pages/unite/pages/pages.component';
// import { UniteComponent } from './pages/unite/unite.component';
// import { AddUniteComponent } from './pages/add-unite/add-unite.component';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    MatDialogModule,
    CommonModule,
    ReactiveFormsModule

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    AddActeurComponent,
    // PaysComponent,
    // AddPaysComponent,
    // PagesComponent,
    // UniteComponent,
    // AddUniteComponent
    // CorbeilleComponent,
    // ParametreComponent,
    // DemandeMessageComponent,
    // CompteDetailComponent,
    // MyComponentComponent,
    // PagesComponent,
    // ActeursComponent,
    // ProduitComponent,
    // CompteComponent,
    // MessageComponent,
    // EnqueteComponent,
    // ConseilsComponent,
    // LoginComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
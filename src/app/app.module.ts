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
import { ZoneProductionComponent } from './pages/zone-production/zone-production.component';
// import { ViewConseilsComponent } from './view-conseils/view-conseils.component';
// import { AddActeurComponent } from './pages/add-acteur/add-acteur.component';
// import { SpeculationComponent } from './pages/speculation/speculation.component';
// import { AddSpeculationComponent } from './add-speculation/add-speculation.component';
// import { CategorieComponent } from './pages/categorie/categorie.component';
// import { AddCategorieComponent } from './pages/add-categorie/add-categorie.component';
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

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    ZoneProductionComponent,
    // ViewConseilsComponent,
    // AddActeurComponent,
    // SpeculationComponent,
    // AddSpeculationComponent,
    // CategorieComponent,
    // AddCategorieComponent,
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

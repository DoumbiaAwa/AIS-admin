import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddActeurComponent } from './pages/add-acteur/add-acteur.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { ActeursComponent } from './pages/acteurs/acteurs.component';
import { ViewConseilsComponent } from './pages/view-conseils/view-conseils.component';
import { FiliereAddComponent } from './pages/filiere-add/filiere-add.component';
import { ProduitComponent } from './pages/produit/produit.component';
import { CompteDetailComponent } from './pages/compte-detail/compte-detail.component';
import { CompteComponent } from './pages/compte/compte.component';
import { AddCategorieComponent } from './pages/add-categorie/add-categorie.component';
const routes: Routes = [
  { path: 'vue', component: ViewConseilsComponent },
  { path: 'detail', component: CompteDetailComponent },


];
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    MatDialogModule,
    CommonModule,
    ReactiveFormsModule

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    LoginComponent,
    AddActeurComponent,
    ActeursComponent,
    FiliereAddComponent,
    ProduitComponent,
    CompteComponent,
    AddCategorieComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
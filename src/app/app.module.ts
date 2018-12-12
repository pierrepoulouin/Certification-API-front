import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { MDBBootstrapModule } from 'angular-bootstrap-md'
import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { FicheComponent } from './fiche/fiche.component'
import { AppRoutingModule } from './app-routing.module'
import { enableProdMode } from '@angular/core'
import { PageAccueilComponent } from './page-accueil/page-accueil.component'
import { HttpClientModule } from '@angular/common/http'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FicheDetailsComponent } from './fiche-details/fiche-details.component'

enableProdMode()
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FicheComponent,
    PageAccueilComponent,
    FicheDetailsComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

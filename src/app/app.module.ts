import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { MDBBootstrapModule } from 'angular-bootstrap-md'
import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { FicheComponent } from './fiche/fiche.component'
import { AppRoutingModule } from './app-routing.module'
import { enableProdMode } from '@angular/core'

enableProdMode()
@NgModule({
  declarations: [AppComponent, HeaderComponent, FicheComponent],
  imports: [BrowserModule, MDBBootstrapModule.forRoot(), AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

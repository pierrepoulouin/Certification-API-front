import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { FicheComponent } from './fiche//fiche.component'

const routes: Routes = [{ path: 'creerFiche', component: FicheComponent }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}

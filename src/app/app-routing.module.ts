import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { FicheComponent } from './fiche//fiche.component'
import { PageAccueilComponent } from './page-accueil/page-accueil.component'
import { FicheDetailsComponent } from './fiche-details/fiche-details.component'

const routes: Routes = [
  { path: 'creerFiche', component: FicheComponent },
  { path: '', component: PageAccueilComponent },
  { path: 'detailsFiche', component: FicheDetailsComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}

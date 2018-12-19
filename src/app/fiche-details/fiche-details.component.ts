import { Component, OnInit } from '@angular/core'
import { Joueur } from '../model/joueur'
import { JoueurService } from '../services/joueur.service'

@Component({
  selector: 'app-fiche-details',
  templateUrl: './fiche-details.component.html',
  styleUrls: ['./fiche-details.component.css'],
})
export class FicheDetailsComponent implements OnInit {
  players: Joueur[]
  constructor(private joueurservice: JoueurService) {}

  ngOnInit() {
    this.joueurservice.getPlayer().subscribe(joueur => (this.players = joueur))
  }
}

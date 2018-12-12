import { Component, OnInit } from '@angular/core'
import { Joueur } from '../model/joueur'
import { JoueurService } from '../services/joueur.service'

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.css'],
})
export class FicheComponent implements OnInit {
  constructor(private joueurService: JoueurService) {}

  ngOnInit() {}
}

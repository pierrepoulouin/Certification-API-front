import { Component, OnInit } from '@angular/core'
import { Joueur } from '../model/joueur'
import { JoueurService } from '../services/joueur.service'

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.css'],
})
export class FicheComponent implements OnInit {
  player = new Joueur()
  submitted = false
  constructor(private joueurService: JoueurService) {}

  ngOnInit() {}
  newPlayer(): void {
    this.submitted = false
    this.player = new Joueur()
  }
  save() {
    this.joueurService
      .createNewPlayer(this.player)
      .subscribe(data => console.log(data), error => console.log(error))
    this.player = new Joueur()
  }

  onSubmit() {
    this.submitted = true
    this.save()
  }
}

import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Joueur } from '../model/joueur'

@Injectable({
  providedIn: 'root',
})
export class JoueurService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Envoi d'une requête POST au back end pour créer un nouveau lien
   * @param newPlayer le nouveau lien à sauvegarder
   */
  public createNewPlayer(newPlayer: Joueur): Observable<Joueur> {
    return this.httpClient.post<Joueur>(
      'http://localhost:8080/api/joueur/add',
      newPlayer
    )
  }
}

import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Joueur } from '../model/joueur'

@Injectable({
  providedIn: 'root',
})
export class JoueurService {
  private baseUrl = 'http://localhost:8080/api/joueur'
  constructor(private http: HttpClient) {}

  createPlayer(joueur: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/add`, joueur)
  }
  /**
   * Appel au back end pour récupération des liens du jour avec une requête GET.
   */
  public getPlayer(): Observable<Joueur[]> {
    return this.http.get<Joueur[]>('http://localhost:8080/api/joueur')
  }

  /**
   * Envoi d'une requête POST au back end pour créer un nouveau lien
   * @param newPlayer le nouveau lien à sauvegarder
   */
  public createNewPlayer(newPlayer: Joueur): Observable<Joueur> {
    return this.http.post<Joueur>(
      'http://localhost:8080/api/joueur/add',
      newPlayer
    )
  }
}

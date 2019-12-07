import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get('https://apiformycrudapp.herokuapp.com/game/')
  }
  addGame(game) {
    let body = JSON.stringify(game);
    console.log(body);
    
     return this.http.post('https://apiformycrudapp.herokuapp.com/game/',body,httpOptions)
  }
  getGamebyId(id) {
    var url="https://apiformycrudapp.herokuapp.com/game/getbyId/"+id;
    return this.http.get(url);
  }
  deleteGame(id) {
    var url="https://apiformycrudapp.herokuapp.com/game/delete/"+id;
    return this.http.get(url);
  }
  updateGame(game) {
    let body = JSON.stringify(game);
    console.log(body);
    
     return this.http.post('https://apiformycrudapp.herokuapp.com/game/update/',body,httpOptions)
  }
}

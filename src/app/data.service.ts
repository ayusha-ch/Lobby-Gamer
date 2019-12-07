import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPlayers() {
    return this.http.get('https://apiformycrudapp.herokuapp.com/player/')
  }
  getLogin(user) {
    let body = JSON.stringify(user);
    console.log(body);
    
     return this.http.post('https://apiformycrudapp.herokuapp.com/user/login/',body,httpOptions)
  }
  addPlayer(player) {
     return this.http.post('https://apiformycrudapp.herokuapp.com/player/',player)
  }
  
  getPlayerbyId(id) {
    var url="https://apiformycrudapp.herokuapp.com/player/getbyId/"+id;
    return this.http.get(url);
  }
  deletePlayer(id) {
    var url="https://apiformycrudapp.herokuapp.com/player/delete/"+id;
    return this.http.get(url);
  }
  updatePlayer(player) {  
     return this.http.post('https://apiformycrudapp.herokuapp.com/player/update/',httpOptions)
  }
  joinGame(player) {
    let body = JSON.stringify(player);
    console.log(body);
    
     return this.http.post('https://apiformycrudapp.herokuapp.com/player/update/',body,httpOptions)
  }
}

import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  games: any;
  search:any;
  constructor(private data: GameService) { }

  ngOnInit() {
    this.data.getGames().subscribe(
      data1 => {this.games = data1;console.log("data is here: "+data1); }
    );
  }

deleteGame(id) {
  this.data.deleteGame(id).subscribe(
    this.games = this.games.filter(item => item._id !== id));
}
modelChanged(newObj){
this.search=newObj.currentTarget.value;
  this.data.getGames().subscribe(
    data1 => {this.games = data1;
      this.games = this.games.filter(item => item.title.includes(this.search)) }
  );
  
}

}

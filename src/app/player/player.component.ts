import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  players: any;
  search:any;
  isLogin:any;
  constructor(private data: DataService, private router: Router){}
  ngOnInit() {

    this.isLogin = localStorage.getItem('Auth');
    if(localStorage.getItem('reload')=='1'){
      localStorage.setItem('reload', '0');
      window.location.reload();

    }
    
    this.data.getPlayers().subscribe(
      data1 => {this.players = data1;console.log("data is here: "+data1); }
    );
  }

deletePlayer(id) {
  this.data.deletePlayer(id).subscribe(
    this.players = this.players.filter(item => item._id !== id));
}
modelChanged(newObj){
this.search=newObj.currentTarget.value;
  this.data.getPlayers().subscribe(
    data1 => {this.players = data1;this.players = this.players.filter(item => item.name.includes(this.search)) }
  );
}

}

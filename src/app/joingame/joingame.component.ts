import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { GameService } from '../game.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-joingame',
  templateUrl: './joingame.component.html',
  styleUrls: ['./joingame.component.css']
})
export class JoingameComponent implements OnInit {
  JoinGameForm: FormGroup;
  submitted = false;
  player:any;
  games:any;

  constructor(private _Activatedroute:ActivatedRoute,private game: GameService,private data: DataService,private router: Router,private formBuilder: FormBuilder) { }
  // convenience getter for easy access to form fields
get f() { return this.JoinGameForm.controls; }

  ngOnInit() {
    this.game.getGames().subscribe(
      data1 => {this.games = data1;console.log("data is here: "+data1); }
    );
    this._Activatedroute.paramMap.subscribe(params => { 
      this.data.getPlayerbyId(params.get("id")).subscribe(
        data1 => {this.player = data1;console.log("data is here: "+data1); });
  });
    this.JoinGameForm = this.formBuilder.group({
      _id: [''],
      name: [''],
      rank: [''],
      score: [''],
      time: [''],
      favouriteGame: [''],
      status: [''],
      game: ['', Validators.required]
  });
  }

 joinGame() {
    this.submitted = true;

        // stop here if form is invalid
        if (this.JoinGameForm.invalid) {
            return;
        }
    console.log(this.JoinGameForm.value);
    this.data.joinGame(this.JoinGameForm.value).subscribe(
      data1 => {console.log("post is here: "+data1);
      this.router.navigate(['']);
    }
    );
} 

onReset() {
  this.submitted = false;
  this.JoinGameForm.reset();
  this.router.navigate(['']);
}

}

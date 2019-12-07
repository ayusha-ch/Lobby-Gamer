import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { __values } from 'tslib';
import { GameService } from '../game.service';

@Component({
  selector: 'app-editgame',
  templateUrl: './editgame.component.html',
  styleUrls: ['./editgame.component.css']
})
export class EditgameComponent implements OnInit {

  editGameForm: FormGroup;
  submitted = false;
  constructor(private _Activatedroute:ActivatedRoute,private data: GameService,private router: Router,private formBuilder: FormBuilder) { }
  get f() { return this.editGameForm.controls; }
  editgame() {
    this.submitted = true;

        // stop here if form is invalid
        if (this.editGameForm.invalid) {
            return;
        }
    console.log(this.editGameForm.value);
    this.data.updateGame(this.editGameForm.value).subscribe(
      data1 => {console.log("post is here: "+data1);
      this.router.navigate(['games']);
    }
    );
}

  game:any;
  ngOnInit() {

    this._Activatedroute.paramMap.subscribe(params => { 
      this.data.getGamebyId(params.get("id")).subscribe(
        data1 => {this.game = data1;console.log("data is here: "+data1); });
  });
  this.editGameForm = this.formBuilder.group({
    _id:[''],
    title: ['', Validators.required],
    platform: [''],
    genre: [''],
    rating: [''],
    publisher: [''],
    release: [''],
    status: ['']
});
}
onReset() {
  this.submitted = false;
  this.editGameForm.reset();
  this.router.navigate(['games']);
}
}

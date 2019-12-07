import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addgame',
  templateUrl: './addgame.component.html',
  styleUrls: ['./addgame.component.css']
})
export class AddgameComponent implements OnInit {

  addGameForm: FormGroup;
  submitted = false;

  constructor(private data: GameService, private router: Router,private formBuilder: FormBuilder) { }
    // convenience getter for easy access to form fields
  get f() { return this.addGameForm.controls; }
  addgame() {
    this.submitted = true;

        // stop here if form is invalid
        if (this.addGameForm.invalid) {
            return;
        }
    console.log(this.addGameForm.value);
    this.data.addGame(this.addGameForm.value).subscribe(
      data1 => {console.log("post is here: "+data1);
      this.router.navigate(['games']);
    }
    );
}
  ngOnInit() {
    this.addGameForm = this.formBuilder.group({
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
    this.addGameForm.reset();
    this.router.navigate(['games']);
}

}

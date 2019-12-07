import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { GameService } from '../game.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-editplayer',
  templateUrl: './editplayer.component.html',
  styleUrls: ['./editplayer.component.css']
})
export class EditplayerComponent implements OnInit {
  editPlayerForm: FormGroup;
  submitted = false;
  games:Object;
  fileData: File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;

  constructor(private _Activatedroute:ActivatedRoute,private data: DataService, private game:GameService, private router: Router,private formBuilder: FormBuilder) { }
  get f() { return this.editPlayerForm.controls; }
  editplayer() {
    this.submitted = true;

        // stop here if form is invalid
        if (this.editPlayerForm.invalid) {
            return;
        }
   const formData = new FormData();
        formData.append('file', this.fileData);
        formData.append('name', this.editPlayerForm.value.name);
        formData.append('rank', this.editPlayerForm.value.rank);
        formData.append('score',this.editPlayerForm.value.score);
        formData.append('time', this.editPlayerForm.value.time);
        formData.append('favouriteGame', this.editPlayerForm.value.favouriteGame);
        formData.append('status', this.editPlayerForm.value.status);
        formData.append('filePath', this.editPlayerForm.value.filePath);
    this.data.updatePlayer(formData).subscribe(
      data1 => {console.log("post is here: "+data1);
      this.router.navigate(['']);
    }
    );
}


//File Upload and preview 
fileProgress(fileInput: any) {
  this.fileData = <File>fileInput.target.files[0];
  this.preview();
}

preview() {
  // Show preview 
  var mimeType = this.fileData.type;
  if (mimeType.match(/image\/*/) == null) {
    return;
  }

  var reader = new FileReader();      
  reader.readAsDataURL(this.fileData); 
  reader.onload = (_event) => { 
    this.previewUrl = reader.result; 
  }
}
 


  player:any;
  ngOnInit() {
    this.game.getGames().subscribe(
      data1 => {this.games = data1;console.log("data is here: "+data1); }
    );
    this._Activatedroute.paramMap.subscribe(params => { 
      console.log(params.get("id"));
      this.data.getPlayerbyId(params.get("id")).subscribe(
        data1 => {this.player = data1;console.log("data is here: "+data1); });
  });
  this.editPlayerForm = this.formBuilder.group({
    _id:[''],
    name: ['', Validators.required],
    rank: ['', Validators.required],
    score: [''],
    time: [''],
    favouriteGame: [''],
    status: ['', Validators.required],
    filePath:['']
});
}
onReset() {
  this.submitted = false;
  this.editPlayerForm.reset();
  this.router.navigate(['']);
}
}

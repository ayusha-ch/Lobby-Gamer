import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { GameService } from '../game.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.css']
})
export class AddplayerComponent implements OnInit {
  addPlayerForm: FormGroup;
  submitted = false;
  games:Object;
  fileData: File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;


  constructor(private game: GameService,private data: DataService,private router: Router,private formBuilder: FormBuilder) { }
    // convenience getter for easy access to form fields
  get f() { return this.addPlayerForm.controls; }
  addplayer() {
    this.submitted = true;

        // stop here if form is invalid
        if (this.addPlayerForm.invalid) {
            return;
        }
        
    
        const formData = new FormData();
        formData.append('file', this.fileData);
        formData.append('name', this.addPlayerForm.value.name);
        formData.append('rank', this.addPlayerForm.value.rank);
        formData.append('score',this.addPlayerForm.value.score);
        formData.append('time', this.addPlayerForm.value.time);
        formData.append('favouriteGame', this.addPlayerForm.value.favouriteGame);
        formData.append('status', this.addPlayerForm.value.status);
        formData.append('filePath', this.addPlayerForm.value.filePath);
    this.data.addPlayer(formData).subscribe(
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
 


  ngOnInit() {
    this.game.getGames().subscribe(
      data1 => {this.games = data1;console.log("data is here: "+data1); }
    );
    this.addPlayerForm = this.formBuilder.group({
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
    this.addPlayerForm.reset();
    this.router.navigate(['']);
}

}

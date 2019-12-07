import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogin: any;
  title = 'players-app'; 

  ngOnInit() {
    this.isLogin = localStorage.getItem('Auth');
    console.log(this.isLogin);
  }
  logout(){
    localStorage.setItem('Auth', '0');
    window.location.reload();
    }
}

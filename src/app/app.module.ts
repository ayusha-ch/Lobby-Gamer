import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { LoginComponent } from './login/login.component';
import { GameComponent } from './game/game.component';
import { HttpClientModule } from '@angular/common/http';
import { AddplayerComponent } from './addplayer/addplayer.component';
import { EditplayerComponent } from './editplayer/editplayer.component';
import { AddgameComponent } from './addgame/addgame.component';
import { EditgameComponent } from './editgame/editgame.component';
import { JoingameComponent } from './joingame/joingame.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    LoginComponent,
    GameComponent,
    AddplayerComponent,
    EditplayerComponent,
    AddgameComponent,
    EditgameComponent,
    JoingameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

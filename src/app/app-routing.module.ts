import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlayerComponent} from './player/player.component'
import {GameComponent} from './game/game.component'
import {LoginComponent} from './login/login.component'
import {AddplayerComponent} from './addplayer/addplayer.component'
import {EditplayerComponent} from './editplayer/editplayer.component'
import {AddgameComponent} from './addgame/addgame.component'
import {EditgameComponent} from './editgame/editgame.component'
import {JoingameComponent} from './joingame/joingame.component'
const routes: Routes = [
{
  path:'login',
  component:LoginComponent
},
{
  path:'',
  component:PlayerComponent
},
{
  path:'addplayer',
  component:AddplayerComponent
},
{
  path:'editplayer/:id',
  component:EditplayerComponent
},
{
  path:'games',
  component:GameComponent
},
{
  path:'addgame',
  component:AddgameComponent
},
{
  path:'editgame/:id',
  component:EditgameComponent
},
{
  path:'joingame/:id',
  component:JoingameComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

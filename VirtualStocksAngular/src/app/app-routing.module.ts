import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

const routes: Routes = [{path: 'leaderboard',component:LeaderboardComponent},{
path: 'aboutus',component: AboutusComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

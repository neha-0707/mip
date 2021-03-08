import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { AboutusComponent } from './aboutus/aboutus.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

const routes: Routes = [{path: 'leaderboard',component:LeaderboardComponent},{
path: 'aboutus',component: AboutusComponent}];
=======
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

const routes: Routes = [
  {
    path: 'leaderboard',component:LeaderboardComponent
  }
];
>>>>>>> 4f69da9807aa2c60ed3c44a0f3897f6469137cd7

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

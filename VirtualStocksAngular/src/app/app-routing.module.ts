import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { MoversComponent } from './movers/movers.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [{path: 'leaderboard',component:LeaderboardComponent},
{path: 'aboutus',component: AboutusComponent},
{path: 'portfolio',component:PortfolioComponent},
{path:'movers',component:MoversComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

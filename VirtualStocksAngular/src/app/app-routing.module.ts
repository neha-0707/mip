import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { LoginComponent } from './login/login.component';
import { MoversComponent } from './movers/movers.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RegisterComponent } from './register/register.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [{path: 'leaderboard',component:LeaderboardComponent},
{path: 'aboutus',component: AboutusComponent},
{path: 'portfolio',component:PortfolioComponent},
{path:'movers',component:MoversComponent},
{path:'login', component:LoginComponent},
{path:'transactions',component:TransactionsComponent},
{path:'register',component:RegisterComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

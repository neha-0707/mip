import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthGuard } from './auth.guard';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { LoginComponent } from './login/login.component';
import { MoversComponent } from './movers/movers.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RegisterComponent } from './register/register.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [{path: 'leaderboard',component:LeaderboardComponent},
{path: 'aboutus',component: AboutusComponent},
{path: 'portfolio',component:PortfolioComponent,canActivate:[AuthGuard]},
{path:'movers',component:MoversComponent},
{path:'login', component:LoginComponent},
{path:'search', component:SearchbarComponent},
{path:'transactions',component:TransactionsComponent,canActivate:[AuthGuard]},
{path:'register',component:RegisterComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

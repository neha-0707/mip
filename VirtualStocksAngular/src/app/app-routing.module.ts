import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthGuard } from './auth.guard';
import { GainersComponent } from './gainers/gainers.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { LoginComponent } from './login/login.component';
import { LosersComponent } from './losers/losers.component';
import { MoversComponent } from './movers/movers.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RegisterComponent } from './register/register.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { StockdetailComponent } from './stockdetail/stockdetail.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
{path:'',component:AboutusComponent},
{path: 'leaderboard',component:LeaderboardComponent,canActivate:[AuthGuard]},
{path: 'aboutus',component: AboutusComponent},
{path: 'portfolio',component:PortfolioComponent,canActivate:[AuthGuard]},
{path:'gainers',component:GainersComponent,canActivate:[AuthGuard]},
{path:'losers',component:LosersComponent,canActivate:[AuthGuard]},
{path:'login', component:LoginComponent},
{path:'search', component:SearchbarComponent,canActivate:[AuthGuard]},
{path:'transactions',component:TransactionsComponent,canActivate:[AuthGuard]},
{path:'register',component:RegisterComponent},
{path:'stockdetail',component:StockdetailComponent,canActivate:[AuthGuard]},
{path:'wishlist',component:WishlistComponent,canActivate:[AuthGuard]},
{path:'**',component:PagenotfoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

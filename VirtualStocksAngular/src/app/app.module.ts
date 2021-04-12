import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { SharedService } from './shared.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import {MatTableModule} from '@angular/material/table';
import { MoversComponent } from './movers/movers.component';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { SearchbarComponent } from './searchbar/searchbar.component';
import {  Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { StockdetailComponent } from './stockdetail/stockdetail.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import {TokenInterceptorService} from './token-interceptor.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { GainersComponent } from './gainers/gainers.component';
import { LosersComponent } from './losers/losers.component';

@NgModule({
  declarations: [
    AppComponent,
    LeaderboardComponent,
    AboutusComponent,
    NavbarComponent,
    PortfolioComponent,
    MoversComponent,
    LoginComponent,
    TransactionsComponent,
    RegisterComponent,
    SearchbarComponent,
    StockdetailComponent,
    BuyComponent,
    SellComponent,
    WishlistComponent,
    PagenotfoundComponent,
    GainersComponent,
    LosersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule ,
    MatDialogModule,
    
],
  providers: [SharedService,AuthService,AuthGuard,
  {
    provide:HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent],
  entryComponents:[BuyComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
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
    SearchbarComponent
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
    NgxPaginationModule , ],
  providers: [SharedService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

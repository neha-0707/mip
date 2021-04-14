import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {
  LeaderList:any;
  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.getLeaderBoard();
    this.getList();
  }
  
  getList(){
    this.service.getAll().subscribe(data=>{
      this.LeaderList = data;
      console.log(this.LeaderList);
    });
  }
  getLeaderBoard()
  {
    this.service.updateLeaderboard().subscribe(data=>{
    }); 
  }
}

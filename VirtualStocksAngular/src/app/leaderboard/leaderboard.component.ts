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
    
  }
  
  getList(){
    this.service.getAll().subscribe(data=>{
      this.LeaderList = data;
    this.LeaderList=this.LeaderList.sort((a, b) => ((a.UnrealizedValueCurrent-a.UnrealizedValueInitial) < (b.UnrealizedValueCurrent-b.UnrealizedValueInitial)) ? 1 : -1)
      console.log("sorted",this.LeaderList);

    });
  }
  getLeaderBoard()
  {
    this.service.updateLeaderboard().subscribe(data=>{
      this.getList();
    }); 
  }
}

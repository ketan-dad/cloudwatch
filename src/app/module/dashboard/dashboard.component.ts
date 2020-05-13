import { Component, OnInit } from '@angular/core';
import {compliancedata} from './compliance';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selectedRow =1;
  selectedApp : Array<compliancedata> = [];
   e1 = new compliancedata('s001','Details of S001.........',true);
   e2 = new compliancedata('s002','Details of S002.........',true);
   e3 = new compliancedata('s003','Details of S003.........',false);
   e4 = new compliancedata('s004','Details of S004.........',true);
   e5 = new compliancedata('s005','Details of S005.........',false);
   e6 = new compliancedata('s006','Details of S006.........',true);
   e7 = new compliancedata('s007','Details of S007.........',true);
   e8 = new compliancedata('s008','Details of S008.........',true);

   app001 = [this.e1,this.e2,this.e5];
 

  

  constructor() { }

  ngOnInit(): void {
  }


  onClickApp(row : number){
    this.selectedRow = row;
    if(this.selectedRow==1){ 
      this.app001.splice(0, this.app001.length);
      this.app001.push(this.e1);
      this.app001.push(this.e2);
      this.app001.push(this.e5);
      this.app001.push(this.e7);
      
    }
    else if (this.selectedRow==2){ 
      this.app001.splice(0, this.app001.length);
      this.app001.push(this.e4);
      this.app001.push(this.e2);
      this.app001.push(this.e3);
      }
    else if (this.selectedRow==3){ 
      this.app001.splice(0, this.app001.length);
      this.app001.push(this.e7);
      this.app001.push(this.e8);
      this.app001.push(this.e3);
    }
    else if (this.selectedRow==4){ 
      this.app001.splice(0, this.app001.length);
      this.app001.push(this.e1);
      this.app001.push(this.e2);
      this.app001.push(this.e4);
      this.app001.push(this.e6);
      this.app001.push(this.e7);
    }
   
    console.log(this.app001)
  }

}

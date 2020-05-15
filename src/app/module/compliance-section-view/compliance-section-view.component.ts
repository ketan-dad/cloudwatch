import { Component, OnInit } from '@angular/core';
import { compliancedata } from '../dashboard/compliance';
import { DataService } from '../../../app/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-compliance-section-view',
  templateUrl: './compliance-section-view.component.html',
  styleUrls: ['./compliance-section-view.component.css']
})
export class ComplianceSectionViewComponent implements OnInit {

    
  e1 = new compliancedata('s001','Details of S001.........',true);
  e2 = new compliancedata('s002','Details of S002.........',true);
  e3 = new compliancedata('s003','Details of S003.........',false);
  e4 = new compliancedata('s004','Details of S004.........',true);
  e5 = new compliancedata('s005','Details of S005.........',false);
  e6 = new compliancedata('s006','Details of S006.........',true);
  e7 = new compliancedata('s007','Details of S007.........',true);
  e8 = new compliancedata('s008','Details of S008.........',true);
  app001 : Array<compliancedata> = [this.e1,this.e2];
  
  ngOnInit(): void {
  }

  dataPassed: any;
  subscription: Subscription;
 
  constructor(private ds: DataService) {
    console.log("subscribe to dashboard data") ;
    this.subscription = this.ds.getData().subscribe(x => {
      //this.dataPassed = x;
      console.log("subscribe data:"+x) ;
      this.saveCurrentApp(x);
    });
  }
 
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  private saveCurrentApp(selectedRow:number){

    console.log("Updating app for row number:"+selectedRow) ;
    if(selectedRow==1){ 
      this.app001.splice(0, this.app001.length);
      this.app001.push(this.e1);
      this.app001.push(this.e2);
      this.app001.push(this.e5);
      this.app001.push(this.e7);
      
    }
    else if (selectedRow==2){ 
      this.app001.splice(0, this.app001.length);
      this.app001.push(this.e4);
      this.app001.push(this.e2);
      this.app001.push(this.e3);
      }
    else if (selectedRow==3){ 
      this.app001.splice(0, this.app001.length);
      this.app001.push(this.e7);
      this.app001.push(this.e8);
      this.app001.push(this.e3);
    }
    else if (selectedRow==4){ 
      this.app001.splice(0, this.app001.length);
      this.app001.push(this.e1);
      this.app001.push(this.e2);
      this.app001.push(this.e4);
      this.app001.push(this.e6);
      this.app001.push(this.e7);
    }
   
    

  }


}

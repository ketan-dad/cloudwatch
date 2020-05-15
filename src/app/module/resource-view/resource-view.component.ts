import { Component, OnInit } from '@angular/core';
import{Resource,ComplianceDataOfResource} from '../dashboard/compliance';
import { DataService } from '../../../app/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-resource-view',
  templateUrl: './resource-view.component.html',
  styleUrls: ['./resource-view.component.css']
})
export class ResourceViewComponent implements OnInit {

  

  ngOnInit(): void {
  }

  r1 = new Resource('EC2','2 out of 4','Partily compliance');
  r2 = new Resource('s3','3 out of 3','Fully compliance');
  r3 = new Resource('RDS','2 out of 3','Partialy compliance');
  
  appResources : Array<Resource> = [this.r1,this.r2];
  
  resourceSelectedRow: number =1;
  resourceSelectedName:string = 'EC2';
  subscription: Subscription;
 
  constructor(private ds: DataService) {
    console.log("subscribe to dashboard data") ;
    this.subscription = this.ds.getData().subscribe(x => {
     // this.selectedRow = x;
      console.log("subscribe data:"+x) ;
      this.saveCurrentApp(x);
    });
  }
 
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  OnClickResources(resourceSelectedRow : number,resourceSelectedName:string){
    this.resourceSelectedRow = resourceSelectedRow ;
    this.resourceSelectedName = resourceSelectedName;
  }

  private saveCurrentApp(selectedRow:number){

    console.log("Updating app for row number:"+selectedRow) ;
    if(selectedRow==1){ 
      this.appResources.splice(0, this.appResources.length);
      this.appResources.push(this.r1);
      this.appResources.push(this.r2);
      this.appResources.push(this.r3);
     
    }
    else if (selectedRow==2){ 
      this.appResources.splice(0, this.appResources.length);
      this.appResources.push(this.r1);
      this.appResources.push(this.r2);
      }
    else if (selectedRow==3){ 
      this.appResources.splice(0, this.appResources.length);
      this.appResources.push(this.r1);
      this.appResources.push(this.r3);
    }
    else if (selectedRow==4){ 
      this.appResources.splice(0, this.appResources.length);
      this.appResources.push(this.r1);
      this.appResources.push(this.r2);
      this.appResources.push(this.r3);
    }
   
    

  }


}

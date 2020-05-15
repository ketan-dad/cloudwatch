import { Component, OnInit } from '@angular/core';
import {compliancedata,Applications,ComplianceDataOfResource} from './compliance';
import{ ComplianceSectionViewComponent } from '../compliance-section-view/compliance-section-view.component';
import { ThrowStmt } from '@angular/compiler';
import { DataService } from '../../../app/data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  selectedRow : number = 1;
   s3compdata: Array<ComplianceDataOfResource> = [
       {
        "complianceCheck" : "s3-bucket-login-enabled",
        "bucketName":"dev-data-store",
        "status" : true,
        "lastCkeckedOn" : "April 29 2020 2:00:39 PM"
    },
    {
      "complianceCheck" : "s3-bucket-login-enabled",
      "bucketName":"qa-data-store",
      "status" : true,
      "lastCkeckedOn" : "April 29 2020 2:00:39 PM"
  },
  {
    "complianceCheck" : "s3-bucket-login-enabled",
    "bucketName":"prod-data-store",
    "status" : true,
    "lastCkeckedOn" : "April 29 2020 2:00:39 PM"
},
{
  "complianceCheck" : "s3-bucket-login-enabled",
  "bucketName":"dev-data-store",
  "status" : false,
  "lastCkeckedOn" : "April 29 2020 2:00:39 PM"
},
{
"complianceCheck" : "s3-bucket-login-enabled",
"bucketName":"qa-data-store",
"status" : false,
"lastCkeckedOn" : "April 29 2020 2:00:39 PM"
}] 


   apps : Array<Applications> = [
    {
      "appName" : "App001",
      "comPercentage" : 60,
      "resource" :
      [{
          
          "resourceName" : "s3",
          "outOf" : "3 out 5",
          "resourceStatus" : "Partialy Compliance"   
      
      },
      {
        
        "resourceName" : "EC2",
        "outOf" : "4 out 5",
        "resourceStatus" : "Partialy Compliance"   
    
    },
  {
          
          "resourceName" : "RDS",
          "outOf" : "5 out 5",
          "resourceStatus" : "Fully Compliance"   
      
      }]
  },
  {
    "appName" : "App002",
    "comPercentage" : 80,
    "resource" :
    [{
        
        "resourceName" : "s3",
        "outOf" : "3 out 5",
        "resourceStatus" : "Partialy Compliance"   
    
    },
    {
      
      "resourceName" : "EC2",
      "outOf" : "4 out 5",
      "resourceStatus" : "Partialy Compliance"   
  
  },
{
        
        "resourceName" : "RDS",
        "outOf" : "5 out 5",
        "resourceStatus" : "Fully Compliance"   
    
    }]
},
{
  "appName" : "App003",
  "comPercentage" : 79,
  "resource" :
  [{
     
      "resourceName" : "s3",
      "outOf" : "3 out 5",
      "resourceStatus" : "Partialy Compliance"   
  
  },
  {
    
    "resourceName" : "EC2",
    "outOf" : "4 out 5",
    "resourceStatus" : "Partialy Compliance"   

},
{
     
      "resourceName" : "RDS",
      "outOf" : "5 out 5",
      "resourceStatus" : "Fully Compliance"   
  
  }]
}
]
 
  constructor(private ds: DataService) { }

  ngOnInit(){
    // send message to subscribers via observable subject
    this.ds.sendData(this.selectedRow);
}

sendData(){
  console.log("In send data..."+this.selectedRow)
  this.ds.sendData(this.selectedRow);
}

ngOnDestroy(){
    // clear message
    this.ds.clearData();
}

  onClickApp(row : number){
    this.selectedRow = row;
    this.sendData();
    console.log(this.selectedRow);
    
  }

}

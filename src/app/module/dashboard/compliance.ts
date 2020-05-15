

 export class compliancedata{
    public section:string;
    public secDetail:string;
    public isCompliance:boolean;

    constructor(_section:string,_secDetail:string,_isCompliance:boolean){
        this.section=_section;
        this.secDetail=_secDetail;
        this.isCompliance=_isCompliance;
    }

}

export class Applications{
    public appName:string;
    public comPercentage : number;
    public resource : Resource[];
    constructor(appName:string,comPercentage : number,resource : Resource[]){

        this.appName=appName;
        this.comPercentage = comPercentage;
        this.resource = resource;

    }

}
[{
    "appName" : "",
    "comPercentage" : 79,
    "resource" :
     {
        "complianceDataOfResource" :{
            "complianceCheck" : "",
            "bucketName":"",
            "status" : true,
            "lastCkeckedOn" : ""
                },
         "resourceName" : "",
         "outof" : "",
         "resourceStatus" : ""   
    
     }
}]

export class Resource{
    
    public resourceName : string;
    public outOf : string;
    public resourceStatus : string; 

    constructor(resourceName : string,outOf : string,resourceStatus : string){

this.resourceName = resourceName;
this.outOf = outOf;
this.resourceStatus = resourceStatus;
    }

}

export class ComplianceDataOfResource {
    public complianceCheck :string;
    public bucketName : string;
    public status : boolean;
    public lastCkeckedOn : string;

    constructor(complianceCheck :string,bucketName : string,status : boolean,lastCkeckedOn : string){

        this.complianceCheck = complianceCheck;
        this.bucketName = bucketName;
        this.status = status;
        this.lastCkeckedOn = lastCkeckedOn;
    }


}

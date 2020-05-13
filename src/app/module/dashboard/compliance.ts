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
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../env";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root',
})

export  class ContactUsService{

 environment=environment
    constructor(private http:HttpClient){}
    
    sendMail(payload:any):Observable<any>{
        return this.http.post<any>(environment.emailApiUrl,{body:payload})
    }
}
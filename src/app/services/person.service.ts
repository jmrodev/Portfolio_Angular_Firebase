import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { person } from '../model/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

    public getPerson(): Observable<person>{
      return this.http.get<person>(this.URL+ 'view/persons'); 
    
   }
}

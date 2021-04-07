import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Profile } from '../models/profile';
import { Reply } from '../models/reply';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profileUrl = 'http://localhost:3001/api/v1/profiles';
  profileSubject: Subject<Profile> = new Subject<Profile>();
  profile$: Observable<Profile> = this.profileSubject.asObservable();

  constructor(private http: HttpClient) { }

  getProfiles():void {
    this.http.get<Reply>(this.profileUrl).subscribe(reply => {
      if (reply.success == 0){
        console.log(reply.message);
      } else {
        console.log(reply.message);
        reply.payload.forEach(profile => {
          this.profileSubject.next(profile);
        });
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Profile } from '../modules/shared/models/profile';
import { ProfileService } from '../modules/shared/services/profile.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  profiles:Profile[] = [];

  constructor(private ps: ProfileService) { }

  ngOnInit(): void {
    // Subscribe to the profile object
    this.ps.profile$.subscribe(profile => {
      this.profiles.push(profile);
    });
    this.ps.getProfiles();
  }

}

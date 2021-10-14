import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  develop = {
    "abilities" : [
      {"name": "Git"},
      {"name": "HTML"},
      {"name": "CSS"},
      {"name": "Javascript"}
    ]
  }

  constructor(private _location: Location) { }

  ngOnInit(): void {
  }


  backpage() {
    this._location.back();
  }
}

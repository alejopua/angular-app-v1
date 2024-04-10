import { Component, OnInit } from '@angular/core';
import { ServerFamilyService } from '../server-family.service';

@Component({
  selector: 'app-brother',
  templateUrl: './brother.component.html',
  styleUrls: ['./brother.component.css'],
})
export class BrotherComponent implements OnInit {
  name?: string;

  constructor(private _serverFamily: ServerFamilyService) {}

  ngOnInit(): void {
    this._serverFamily.setBigBrother('Big Brother');
    this.name = this._serverFamily.getBigBrother();
  }

  greeting(): void {
    this._serverFamily.greeting(this._serverFamily.getFather() || '');
  }

  ask() {
    console.log(this._serverFamily.ask());
  }
}

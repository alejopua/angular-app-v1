import { Component, OnInit } from '@angular/core';
import { ServerFamilyService } from '../server-family.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent implements OnInit {
  msjFather: string = 'Mensaje desde el padre';
  receiveMsj?: string;
  name?: string;

  constructor(private _serverFamily: ServerFamilyService) {}

  ngOnInit(): void {
    this._serverFamily.setFather('Father');
    this.name = this._serverFamily.getFather();
  }

  greeting(): void {
    this._serverFamily.greeting(this._serverFamily.getBigBrother() || '');
  }

  ask() {
    console.log(this._serverFamily.ask());
  }

  receiveMsjFromSon($event: string) {
    this.receiveMsj = $event;
  }
}

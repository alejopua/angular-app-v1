import { Component } from '@angular/core';
import { ServerFamilyService } from '../server-family.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent {
  msjFather: string = 'Mensaje desde el padre';
  receiveMsj?: string;

  constructor(private _serverFamily: ServerFamilyService) {}

  receiveMsjFromSon($event: string) {
    this.receiveMsj = $event;
  }
}

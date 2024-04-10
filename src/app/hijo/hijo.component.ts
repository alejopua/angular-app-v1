import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ServerFamilyService } from '../server-family.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
})
export class HijoComponent {
  @Input() receiveSon?: string;
  @Output() sendMsjToFather = new EventEmitter<string>();

  msj?: string;

  constructor(private _serverFamily: ServerFamilyService) {}

  sendMsjToFatherFromSon() {
    this.sendMsjToFather.emit(this.msj);
  }
}

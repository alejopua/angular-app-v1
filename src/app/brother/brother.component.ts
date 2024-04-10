import { Component } from '@angular/core';
import { ServerFamilyService } from '../server-family.service';

@Component({
  selector: 'app-brother',
  templateUrl: './brother.component.html',
  styleUrls: ['./brother.component.css'],
})
export class BrotherComponent {
  constructor(private _serverFamily: ServerFamilyService) {}
}

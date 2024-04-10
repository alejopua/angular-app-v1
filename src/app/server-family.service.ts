import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServerFamilyService {
  nameBigBrother: string = 'Big Brother Pedro';
  nameShortBrother: string = 'Short Brother Alejandro';
  nameFather: string = 'Father Peter';

  constructor() {}

  greeting(family: string) {
    return console.log(`Hello, I am ${family}`);
  }

  ask(): string {
    return 'How are you?';
  }
}

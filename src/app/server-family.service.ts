import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServerFamilyService {
  nameBigBrother?: string;
  nameFather?: string;

  constructor() {}

  getBigBrother(): string {
    return this.nameBigBrother || '';
  }
  setBigBrother(name: string) {
    this.nameBigBrother = name;
  }

  getFather(): string {
    return this.nameFather || '';
  }
  setFather(name: string) {
    this.nameFather = name;
  }

  greeting(family: string): void {
    console.log(`Hello, ${family}`);
  }

  ask(family: string): void {
    console.log(`How are you, ${family}`);
  }
}

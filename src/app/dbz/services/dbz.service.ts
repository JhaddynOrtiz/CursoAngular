import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'krillin',
      power: 800
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 800
    },
    {
      id: uuid(),
      name: 'Veget',
      power: 5000
    }
  ];

  addCharacter( character: Character): void {
    const newCharacter: Character = { ...character, id: uuid() }
    this.characters.push(newCharacter);
  }

  deleteCharacterById( id: string) {
    this.characters = this.characters.filter(x => x.id !== id);
  }
}

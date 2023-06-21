import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() public characterList: Character[] = [{
    id: 'asdasd',
    name: 'trunks',
    power: 10
  }];

  @Output()
  onDeleteId: EventEmitter<string> = new EventEmitter();

  onDeleteById(id: string): void {
    this.onDeleteId.emit(id);
  }

  /* onDeleteCharacter(index: number): void {
    console.log('index', index);
    
  } */

}

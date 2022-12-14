import { Component, Input, OnInit } from '@angular/core';
import { IDeveloper } from 'src/models/IDeveloper';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input() developer: IDeveloper = {} as IDeveloper;

  constructor() { }

  ngOnInit(): void {
  }

}

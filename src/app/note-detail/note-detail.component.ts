import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDeveloper } from 'src/models/IDeveloper';
import { DevelopersService } from '../services/developers.service';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit {

  developer: IDeveloper = {} as IDeveloper;

  constructor(
    private route: ActivatedRoute,
    private developoersService: DevelopersService
  ) { }

  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if(id !== null)
      this.developer = this.developoersService.getDeveloperById( parseInt(id, 10) );
  }

}

import { Component, OnInit } from '@angular/core';
import { IDeveloper } from 'src/models/IDeveloper';
import { DevelopersService } from '../services/developers.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  developersList: Array<IDeveloper> = [];

  constructor(private developerService: DevelopersService) {}

  ngOnInit(): void {
    this.developersList = this.developerService.getAllDevelopers();
    console.log(this.developersList);
  }

}

import { Component, OnInit } from '@angular/core';
import { HarrypotterService } from 'src/app/services/harrypotter.service';

@Component({
  selector: 'app-characterlist',
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.css']
})
export class CharacterlistComponent implements OnInit {
  characters: any[] = [];

  constructor(private hpService: HarrypotterService) {}

  ngOnInit(): void {
    this.hpService.getAllCharacters().subscribe(data => {
      this.characters = data;
    });
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { HarrypotterService } from 'src/app/services/harrypotter.service';

@Component({
  selector: 'app-characterdetails',
  templateUrl: './characterdetails.component.html',
  styleUrls: ['./characterdetails.component.css']
})
export class CharacterdetailsComponent implements OnInit {
  @Input() characterId!: string;
  character: any;

  constructor(private hpService: HarrypotterService) {}

  ngOnInit(): void {
    if (this.characterId) {
      this.hpService.getCharacterById(this.characterId).subscribe(data => {
        this.character = data;
      });
    }
  }
}

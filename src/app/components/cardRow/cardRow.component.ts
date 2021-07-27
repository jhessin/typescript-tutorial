import { Component } from '@angular/core';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'app-card-row',
  templateUrl: './cardRow.component.html',
  styleUrls: ['./cardRow.component.css'],
})
export class CardRowComponent {
  constructor(public gameService: GameService) {}
}

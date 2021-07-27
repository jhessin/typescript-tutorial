import { Component } from '@angular/core';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
})
export class ScoreComponent {
  constructor(public gameService: GameService) {
    console.log(gameService);
  }

  score: number = 10;
}

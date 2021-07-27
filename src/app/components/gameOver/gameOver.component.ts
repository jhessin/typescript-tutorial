import { Component } from '@angular/core';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'app-gameover',
  templateUrl: './gameOver.component.html',
  styleUrls: ['./gameOver.component.css'],
})
export class GameOverComponent {
  constructor(public gameService: GameService) {}
}

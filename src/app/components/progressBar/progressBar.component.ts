import { Component } from '@angular/core';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progressBar.component.html',
  styleUrls: ['./progressBar.component.css'],
})
export class ProgressBarComponent {
  constructor(public gameService: GameService) {}
}

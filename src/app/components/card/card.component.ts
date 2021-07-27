import { Component, Input, OnDestroy } from '@angular/core';
import { GameService } from 'src/app/game.service';
import { MessageService } from 'src/app/message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnDestroy {
  @Input() imageUrl: string;
  @Input() imageName: string;
  classes: string = '';

  private subscription: Subscription;

  constructor(
    private gameService: GameService,
    private messageService: MessageService
  ) {
    this.subscription = this.messageService.Message.subscribe((msg) => {
      if (msg.text === 'CardClicked') {
        if (this.gameService.currentQuestion !== this.imageName) {
          this.classes = 'fadedCard';
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public cardClicked(): void {
    this.gameService.checkAnswer(this.imageName);
  }
}

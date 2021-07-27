import { Injectable } from '@angular/core';
import { Questions } from './mock-questions';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private _score: number = 0;
  private _highScore: number = 0;
  private _currentImages: string[][] = [[], []];
  private _currentQuestion: string;
  private _showModal = false;
  private _correctAnswer = false;
  private _interval = null;
  private _timerDuration = 1000 * 60;
  private _timerSequence = 100;
  private _timerChunk = (100 / this._timerDuration) * this._timerSequence;
  private _timeLeftPercent = 0;
  private _gameEnded = false;

  public get gameEnded(): boolean {
    return this._gameEnded;
  }

  constructor(private messageService: MessageService) {}

  public get timeLeftPercent(): number {
    return this._timeLeftPercent;
  }

  public get showModal(): boolean {
    return this._showModal;
  }

  public get correctAnswer(): boolean {
    return this._correctAnswer;
  }

  public get currentQuestion(): string {
    return this._currentQuestion;
  }

  public get score(): number {
    return this._score;
  }

  public get highScore(): number {
    return this._highScore;
  }

  public get currentImages(): string[][] {
    return this._currentImages;
  }

  public startGame() {
    this._score = 0;
    this._showModal = false;
    this._correctAnswer = false;
    this._gameEnded = false;
    this._timeLeftPercent = 0;
    this.getRandomQuestions();

    this._interval = setInterval(() => {
      if (this._timeLeftPercent < 100) {
        this._timeLeftPercent += this._timerChunk;
      } else {
        clearInterval(this._interval);
        if (this.score > this.highScore) {
          this._highScore = this.score;
        }
        this._gameEnded = true;
      }
    }, this._timerSequence);
  }

  private getRandomQuestions() {
    // randomize array
    Questions.sort(() => 0.5 - Math.random());

    // get first 4 images
    const randomImages = Questions.slice(0, 4);

    // pick one random question
    this._currentQuestion =
      randomImages[Math.floor(Math.random() * randomImages.length)];

    // update images
    this._currentImages = [
      [randomImages[0], randomImages[1]],
      [randomImages[2], randomImages[3]],
    ];
  }

  public checkAnswer(guess: string) {
    if (this._showModal || this._gameEnded) return;
    if (guess === this.currentQuestion) {
      this._correctAnswer = true;
      this._score += 1;
    } else {
      this._correctAnswer = false;
    }
    this._showModal = true;
    this.messageService.sendMessage('CardClicked');

    setTimeout(() => {
      this._showModal = false;
      this.getRandomQuestions();
    }, 1200);
  }
}

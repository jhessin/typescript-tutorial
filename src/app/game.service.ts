import { Injectable } from '@angular/core';
import { Questions } from './mock-questions';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private _score: number = 15;
  private _currentImages: string[][] = [[], []];
  private _currentQuestion: string;

  public get currentQuestion(): string {
    return this._currentQuestion;
  }

  public get score(): number {
    return this._score;
  }

  public get currentImages(): string[][] {
    return this._currentImages;
  }

  public startGame() {
    this._score = 0;
    this.getRandomQuestions();
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
}

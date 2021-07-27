import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private _score: number = 15;

  public get score(): number {
    return this._score;
  }
}

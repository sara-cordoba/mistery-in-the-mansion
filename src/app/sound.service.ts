import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  private audio: HTMLAudioElement = new Audio(
    '/assets/audio/creepy-music-halloween.mp3'
  );
  private _isPlaying = new BehaviorSubject<boolean>(false);

  isPlaying$ = this._isPlaying.asObservable();

  constructor() {
    this.audio.load();
  }

  play() {
    if (!this._isPlaying.value) {
      this.audio.play();
      this._isPlaying.next(true);
    }
  }

  pause() {
    if (this._isPlaying.value) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this._isPlaying.next(false);
    }
  }

  toggleSound() {
    if (this._isPlaying.value) {
      this.pause();
    } else {
      this.play();
    }
  }

  setVolume(volume: number) {
    this.audio.volume = volume / 100;
  }

  getVolume(): number {
    return this.audio.volume * 100;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AudioService } from '../../sound.service';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FormsModule, TranslateModule],
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css'],
})
export class OptionsComponent implements OnInit {
  menuOption: string = '';
  volume: number = 100;
  soundEnabled: boolean = false;

  constructor(
    private audioService: AudioService,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('es');
  }

  ngOnInit(): void {
    this.volume = this.audioService.getVolume();
    this.audioService.isPlaying$.subscribe((isPlaying) => {
      this.soundEnabled = isPlaying;
    });
  }

  onOption(menuOption: string) {
    this.menuOption = menuOption;
  }

  playSound() {
    this.audioService.play();
  }

  stopSound() {
    this.audioService.pause();
  }

  changeVolume(volume: number) {
    this.audioService.setVolume(volume);
  }

  test(event: any) {
    const volume = event.target.value;
    this.changeVolume(volume);
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }
}

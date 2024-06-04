import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { OptionsComponent } from './pages/options/options.component';
import { HomeComponent } from './pages/home/home.component';
import { NgIf } from '@angular/common';
import { AudioService } from './sound.service';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    OptionsComponent,
    HomeComponent,
    NgIf,
    TranslateModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'misteryInTheMansion';
  soundEnabled: boolean = false;
  isOptionsRoute: boolean = false;

  constructor(
    private audioService: AudioService,
    private router: Router,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('es');
    this.isOptionsRoute = this.router.url.includes('options');

    this.router.events.subscribe(() => {
      this.isOptionsRoute = this.router.url.includes('options');
    });

    // Traducir el título de la página
    this.translateTitle();
    this.translate.onLangChange.subscribe(() => {
      this.translateTitle();
    });
  }

  ngOnInit(): void {
    this.audioService.isPlaying$.subscribe((isPlaying) => {
      this.soundEnabled = isPlaying;
    });
  }

  toggleSound() {
    this.audioService.toggleSound();
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }

  translateTitle() {
    this.translate.get('INDEX.title_index').subscribe((title: string) => {
      document.title = title;
    });
  }
}

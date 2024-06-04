import { AfterViewInit, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgIf, CommonModule, TranslateModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  menuOption: string = '';

  constructor(private translate: TranslateService) {}

  onOption(menuOption: string) {
    this.menuOption = menuOption;
  }

  ngAfterViewInit(): void {
    this.setTooltip();

    if ((window as any).bootstrap) {
      const Tooltip = (window as any).bootstrap.Tooltip;

      const tooltipTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
      );
      tooltipTriggerList.forEach((tooltipTriggerEl: HTMLElement) => {
        new Tooltip(tooltipTriggerEl);
      });
    }
  }

  setTooltip(): void {
    this.translate
      .get('HOME.tooltip_home')
      .subscribe((translatedTooltip: string) => {
        const tooltipElement = document.querySelector('.button-play');
        if (tooltipElement) {
          tooltipElement.setAttribute('data-bs-title', translatedTooltip);
          const Tooltip = (window as any).bootstrap.Tooltip;
          new Tooltip(tooltipElement);
        }
      });
  }

  closeWindow() {
    const confirmation = window.confirm(
      this.translate.instant('HOME.confirm_exit')
    );
    if (confirmation) {
      window.location.href = 'https://www.google.com';
    }
  }
}

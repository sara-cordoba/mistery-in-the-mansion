import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-synopsis',
  standalone: true,
  imports: [RouterLink, RouterModule, TranslateModule],
  templateUrl: './synopsis.component.html',
  styleUrl: './synopsis.component.css',
})
export class SynopsisComponent {
  menuOption: string = '';

  onOption(menuOption: string) {
    this.menuOption = menuOption;
  }
}

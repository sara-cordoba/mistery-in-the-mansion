import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-load-game',
  standalone: true,
  imports: [RouterLink, RouterModule, FormsModule, TranslateModule],
  templateUrl: './load-game.component.html',
  styleUrl: './load-game.component.css',
})
export class LoadGameComponent {
  menuOption: string = '';

  onOption(menuOption: string) {
    this.menuOption = menuOption;
  }
}

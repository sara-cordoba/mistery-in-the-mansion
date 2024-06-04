import { Routes } from '@angular/router';
import { OptionsComponent } from './pages/options/options.component';
import { HomeComponent } from './pages/home/home.component';
import { LoadGameComponent } from './pages/load-game/load-game.component';
import { SynopsisComponent } from './pages/home/synopsis/synopsis.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'synopsis', component: SynopsisComponent },
  { path: 'load-game', component: LoadGameComponent },
  { path: 'options', component: OptionsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

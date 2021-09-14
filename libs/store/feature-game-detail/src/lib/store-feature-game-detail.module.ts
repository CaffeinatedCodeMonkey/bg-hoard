import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: GameDetailComponent }
    ]),
    MatCardModule
  ],
  declarations: [
    GameDetailComponent
  ],
  exports: [
    GameDetailComponent,
  ],
})
export class StoreFeatureGameDetailModule {}

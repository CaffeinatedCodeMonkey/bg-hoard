import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { StoreUiSharedModule } from '@bg-hoard/store/ui-shared';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'game/:id', // <---- HERE
        loadChildren: () =>
          import('@bg-hoard/store/feature-game-detail').then(m => m.StoreFeatureGameDetailModule)
      }
    ], { initialNavigation: 'enabledBlocking' }),
    MatCardModule,
    StoreUiSharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
  ],
})
export class AppModule {}

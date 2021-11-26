import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxColorsModule } from 'ngx-colors';
import { AppComponent } from './app.component';
import { BoxPreviewComponent } from './components/box-preview/box-preview.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { BlinderPipe } from './pipes/blinder/blinder.pipe';
import { HexToColorPipe } from './pipes/hex-to-color/hex-to-color.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BlinderPipe,
    SlideshowComponent,
    BoxPreviewComponent,
    HexToColorPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxColorsModule,
    MatIconModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

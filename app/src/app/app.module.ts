import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PlayListComponent } from './play-list/play-list.component';
import { MediaPlayerComponent } from './media-player/media-player.component';
import { SocialNetworksComponent } from './social-networks/social-networks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PlayListComponent,
    MediaPlayerComponent,
    SocialNetworksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
export interface Social {
  href: string,
  class: string,
  image: string,
  title: string,
  alter: string
}
export interface playList {
  title: string,
  current: boolean,
  styleClass: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  headerText = 'Classy Audio Player Widget';
  footerText = '© 206 Classy Audio Player Widget. All Rights Reserved | Design by W3layouts';
  socialObj: Social[] = [
    {
      href: "",
      class: "facebook",
      image: "/assets/images/fb.png",
      title: "facebook",
      alt: "facebook"
    },
    {
      href: "",
      class: "twitter",
      image: "/assets/images/tw.png",
      title: "twitter",
      alt: "twitter"
    },
    {
      href: "",
      class: "googleplus",
      image: "/assets/images/gp.png",
      title: "googleplus",
      alt: "googleplus"
    }

  ]
  playlist: playList[] = [
    {
      title: "Penny Lane",
      current: true,
      styleClass: "jp-playlist-current",
      url: "https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3"
      // url: "/assets/media/Blue Browne.mp3",
      // mp3:"http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3"
    },
    {
      title: "Man Atkeya Beparwah",
      current: true,
      styleClass: "jp-playlist-current",
      url: "https://ia801609.us.archive.org/16/items/nusratcollection_20170414_0953/Man%20Atkiya%20Beparwah%20De%20Naal%20Nusrat%20Fateh%20Ali%20Khan.mp3"
      // url: "/assets/media/Georgia.mp3"
    },
    {
      title: "Perfect",
      current: true,
      styleClass: "jp-playlist-current",
      url: "https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3"
    }
  ]
}

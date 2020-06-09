import { Component, OnInit, Input } from '@angular/core';
import { playList } from '../app.component';
@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.css']
})
export class PlayListComponent implements OnInit {
  @Input list: playList;
  constructor() { }

  ngOnInit(): void {
  }
  styleClass: string = "";
  cur: boolean = true;
  play(i) {
    // for(let n = 0;)
    this.cur = !this.cur;
    if (this.styleClass == ""){this.styleClass="jp-playlist-current";}
    else{this.styleClass="";}
    console.log(i);
    console.log(this.styleClass);
    console.log(this.cur);
  }
}

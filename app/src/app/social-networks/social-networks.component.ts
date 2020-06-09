import { Component, OnInit, Input } from '@angular/core';
import { Social } from "../app.component";
@Component({
  selector: 'app-social-networks',
  templateUrl: './social-networks.component.html',
  styleUrls: ['./social-networks.component.css']
})
export class SocialNetworksComponent implements OnInit {
  @Input social: Social;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { faBookOpen, faHome, faListOl, faQuoteLeft, faTrophy, faUserFriends } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  faHome = faHome;
  faBookOpen = faBookOpen;
  faTrophy = faTrophy;
  faUserFriends = faUserFriends;
  faListOl = faListOl;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {

  openUserMenu() {
    // your method implementation
  }

  search() {
    // access the search term using this.searchInput.nativeElement.value
    // your search logic here
  }
}


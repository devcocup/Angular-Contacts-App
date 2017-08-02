import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  template: `

    <div class=" mb-3">
      <button type="button" class=" btn btn-outline-primary btn-sm " routerLink="/contacts/"> INDEX </button>
      <button type="button" class=" btn btn-outline-success btn-sm "  routerLink="/contacts/new"> ADD </button>
    </div>

    <router-outlet></router-outlet>
  `
})
export class ContactsComponent {}

import { Component, OnInit } from '@angular/core';
import { Contact } from '@app-core/models';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';

import * as fromContacts from '@app-contacts-store'
import * as contactsActions from '@app-contacts-store/actions/contacts-actions'
import * as fromRoot from '@app-root-store';


@Component({
  selector: 'app-contacts-index',
  templateUrl: './contacts-index.component.html',
  styleUrls: ['./contacts-index.component.sass']
})
export class ContactsIndexComponent implements OnInit {

  contacts$: Observable<Contact[]>;

  constructor(public store: Store<fromRoot.State>, private router: Router, private actR: ActivatedRoute) { }

  ngOnInit() {
    // getAllContacts selector from the main store allows us to monitor changes only on id list from the main state
    // without monitoring the rest of the state
    this.contacts$ = this.store.select(fromContacts.getAllContacts);
    this.store.dispatch(new contactsActions.LoadAll());
  }

  editContact(contact: Contact) {
    this.store.dispatch(new contactsActions.SetCurrentContactId(contact.id));
    this.router.navigate(['/contacts', contact.id, 'edit'])
  }

  showContact(contact: Contact) {
    this.store.dispatch(new contactsActions.SetCurrentContactId(contact.id));
    this.router.navigate(['/contacts', contact.id])
  }

  deleteContact(contact: Contact) {
    const r = confirm('Are you sure?');
    if (r) {
      this.store.dispatch(new contactsActions.Delete(contact));
    }
  }

}

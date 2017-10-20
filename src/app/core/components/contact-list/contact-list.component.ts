import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Contact } from '@app-core/models';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactListComponent implements OnInit {


  @Input() contacts: Contact[];
  @Output() onEdit = new EventEmitter<Contact>();
  @Output() onShow = new EventEmitter<Contact>();
  @Output() onDelete = new EventEmitter<Contact>();

  contactsTrackByFn = (index: number, contact: Contact) => contact.id;

  constructor() {}

  ngOnInit() {}


  showDetails(contact: Contact) {
    this.onShow.emit(contact);
  }

  editContact(contact: Contact) {
    this.onEdit.emit(contact)
  }

  deleteContact(contact: Contact) {
    this.onDelete.emit(contact)
  }

}

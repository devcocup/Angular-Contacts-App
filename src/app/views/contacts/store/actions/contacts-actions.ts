


import {Action} from '@ngrx/store';
import { Contact } from '@app-core/models';


export const LOAD_ALL = '[Contacts] LOAD ALL';
export const LOAD_ALL_SUCCESS = '[Contacts] LOAD ALL SUCCESS';

export const LOAD = '[Contacts] LOAD';
export const LOAD_SUCCESS = '[Contacts] LOAD SUCCESS';

export const CREATE = '[Contacts] CREATE';
export const CREATE_SUCCESS = '[Contacts] CREATE SUCCESS';

export const UPDATE = '[Contacts] UPDATE';
export const UPDATE_SUCCESS = '[Contacts] UPDATE SUCCESS';

export const DELETE = '[Contacts] DELETE';
export const DELETE_SUCCESS = '[Contacts] DELETE SUCCESS';

export const SET_CURRENT_CONTACT_ID = '[Contacts] SET CURRENT CONTACT ID';

export class SetCurrentContactId implements Action {
  readonly type = SET_CURRENT_CONTACT_ID;
  constructor(public id: number) {}
}

export class LoadAll implements Action {
  readonly type = LOAD_ALL;
}

export class Load implements Action {
  readonly type = LOAD;
  constructor(public id: number) {}
}

export class Create implements Action {
  readonly type = CREATE;
  constructor(public contact: Contact) {}
}


export class Update implements Action {
  readonly type = UPDATE;
  constructor(public contact: Contact) {}
}

export class Delete implements Action {
  readonly type = DELETE;
  constructor(public id: number) {}
}

export class LoadAllSuccess implements Action {
  readonly type = LOAD_ALL_SUCCESS;
  constructor(public contacts: Contact[]) {}
}

export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS;
  constructor(public contact: Contact) {}
}

export class CreateSuccess implements Action {
  readonly type = CREATE_SUCCESS;
  constructor(public contact: Contact) {}
}

export class UpdateSuccess implements Action {
  readonly type = UPDATE_SUCCESS;
  constructor(public contact: Contact) {}
}

export class DeleteSuccess implements Action {
  readonly type = DELETE_SUCCESS;
  constructor(public id: number) {}
}

export type All =
    | SetCurrentContactId
    | LoadAll
    | Load
    | Create
    | Update
    | Delete
    | LoadAllSuccess
    | LoadSuccess
    | UpdateSuccess
    | CreateSuccess
    | DeleteSuccess

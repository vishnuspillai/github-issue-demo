import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Store, Action } from '@ngrx/store';
import { IssueActions } from './issue.actions';
import { FormBuilder, Validators } from '@angular/forms';
import { IAppStoreState } from '../../../core-modules/app-store';
import * as selector from './issue.selectors';

@Injectable()
export class IssueService {

  constructor(public store: Store<IAppStoreState>,
             public action: IssueActions) { }

  // action dispatcher

  dIssueResults() {
    this.store.dispatch(this.action.getIssues());
  }

  dGetIssueContent(pId: Object) {
    this.store.dispatch(this.action.issueContent(pId));
  }


  // selectors

  sGetIssues() {
    return this.store.select(selector.getIssueResults);
  }

  sGetAssignee() {
    return this.store.select(selector.getAssignee);
  }

  sGetIssueContent() {
    return this.store.select(selector.issueContent);
  }



}

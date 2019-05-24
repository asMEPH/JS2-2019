import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {DeUser} from "../model/de-user";
import {HttpClient} from "@angular/common/http";
import {Post} from "../model/post";
import {LogerService} from "../loger.service";
import {DeSubject} from "../model/de-subject";
import {DeGroup} from "../model/de-group";

@Component({
  selector: 'app-de-admin-panel',
  templateUrl: './de-admin-panel.component.html',
  styleUrls: ['./de-admin-panel.component.less']
})
export class DeAdminPanelComponent implements OnInit {
  users : DeUser[] = [];
  subjects: DeSubject[] = [];
  private groups: DeGroup[] = [];
  username: string;
  nuser: DeUser;

  constructor(private d : DataService,
              private http: HttpClient,
              public loger: LogerService) { }

  ngOnInit() {
    this.loadSubjects();
  }

  loadUsers() {
    this.d.getUsers()
      .subscribe(resp => this.users = resp);
  }

  loadSubjects() {
    this.d.getSubjects()
      .subscribe(resp => this.subjects = resp);
  }

  loadGroups() {
    this.d.getGroups()
      .subscribe(resp => this.groups = resp);
  }


  loadPosts() {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    this.http.get<Post[]>(url).subscribe(res=>{
      console.log(`posts: ${JSON.stringify(res)}`)
    })
  }

  wywolajLogowanieTekstu() {
    this.loger.zaloguj('testowa wiadomość');
  }

  reload() {
    this.loadUsers();
    this.loadGroups();
    this.loadSubjects();
  }
}

import { AngularFireAuth } from '@angular/fire/auth';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title: 'TestAuth';
  constructor() {}

  ngOnInit(): void {}
}

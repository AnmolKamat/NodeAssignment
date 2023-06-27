import { Component,OnInit } from '@angular/core';
import { MainService } from './main.service';
import { FormBuilder } from '@angular/forms';
import { response } from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular';
  options = []
  constructor(private main:MainService,private fb:FormBuilder){}
  ngOnInit() {
  }

}

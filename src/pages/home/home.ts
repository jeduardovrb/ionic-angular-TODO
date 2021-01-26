import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.items = [
      {title: 'todo 1', description: 'tarefa 1'},
      {title: 'todo 2', description: 'tarefa 2'},
      {title: 'todo 3', description: 'tarefa 3'}
    ];
  }

  addItem() {

  }

  viewItem() {

  }

}

import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray,transferArrayItem} from '@angular/cdk/drag-drop';
import * as $ from 'jquery';
/**
 * @title Basic Drag&Drop
 */
@Component({
  selector: 'app-vano',
  templateUrl: 'vano.component.html',
  styleUrls: ['vano.component.css'],
})
export class VanoComponent {

  persoane =[
      {name: "Daniel", age: 24, text: "Daniel here"},
      {name: "Ivan", age: 25, text: "Ivan here"},
      {name: "Kolean", age: 21, text: "Kolean here"}
  ]

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    let nodes = Array.prototype.slice.call( document.getElementById('main').children );
    let element = document.getElementById(ev.target.id);
    ev.dataTransfer.setData("prevIndex",nodes.indexOf( element ));
  }

  drop(ev) {
    ev.preventDefault();
    let prevID = ev.dataTransfer.getData("text");
    let prevIndex = ev.dataTransfer.getData("prevIndex");
    let nodes = Array.prototype.slice.call( document.getElementById('main').children );
    let curID = $(ev.target).parents('.hedges').attr('id');
    let curElem = document.getElementById(curID);
    let prevElem = document.getElementById(prevID);
    let curIndex = nodes.indexOf(curElem);
    console.log(prevID);
    console.log(curID);
    
    if ( prevIndex > curIndex ) {
       $(curID).before(prevElem);
       console.log('before')
    }
    else
    {
       $(curID).after(prevElem);
       console.log('after');
    }
  }

}
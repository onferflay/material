import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray,transferArrayItem} from '@angular/cdk/drag-drop';
import * as $ from 'jquery';
import { Chart } from 'angular-highcharts';
import { moveEmbeddedView } from '@angular/core/src/view';
/**
 * @title Basic Drag&Drop
 */
@Component({
  selector: 'app-vano',
  templateUrl: 'vano.component.html',
  styleUrls: ['vano.component.css'],
})
export class VanoComponent {

  chart1 = new Chart(<any>{
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        data: [1, 2, 3]
      }
    ]
  });

  chart2 = new Chart(<any>{
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        data: [2, 2, 2]
      }
    ]
  });

  chart3 = new Chart(<any>{
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        data: [3, 2, 1]
      }
    ]
  });

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

    $('body').mousemove(function(){
      console.log('privet');
    });

    $(element).addClass('dragging');
    $(element).find('.placeholder').show();
    $('body').trigger("mousemove");
  }

  // moveme(){

  // }

  drop(ev) {
    ev.preventDefault();
    let prevID = ev.dataTransfer.getData("text");
    let prevIndex = ev.dataTransfer.getData("prevIndex");
    let nodes = Array.prototype.slice.call( document.getElementById('main').children );
    let curID = $(ev.target).parents('.hedges').attr('id');
    let curElem = document.getElementById(curID);
    let prevElem = document.getElementById(prevID);
    let curIndex = nodes.indexOf(curElem);
    
    $(prevElem).removeClass('dragging');
    $(prevElem).find('.placeholder').hide();

    if ( prevIndex > curIndex ) { $(curElem).before(prevElem); }
    else { $(curElem).after(prevElem); }
  }

}
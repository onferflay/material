import { Component} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent{

  pid:string;
  start_index : number;

  allowDrop(ev) {
    ev.preventDefault();
    console.log('allowdrop');
  }

  drag(ev) {
    ev.preventDefault();
    console.log(ev.target.id);
  }

  button(){
    console.log('button');
  }

  ura(ev){
    
    let box = document.getElementById(ev.target.id);
    this.pid = $(box).parents('.box').attr('id');
    // let aux = document.getElementById(this.pid);

    // let nodes = Array.prototype.slice.call( document.getElementById('main').children );
    // this.start_index = nodes.indexOf(aux)

    console.log('index = ' + this.start_index);

    $(box).parent().find('.placeholder').show();
    let offset = $(box).parent().offset();
    let difv = ev.pageY - offset.top;
    let difo = ev.pageX - offset.left;

    $(box).addClass('moving')
    $(box).remove();
    $('body').after(box);
    $(box).css('position','fixed');
    $(box).css({ 'top' :offset.top + 4 +'px', 'left' :  offset.left + 4 +'px' });

    $(document).on('mousemove',event => { 
      $(box).css({ 'top' : event.pageY - difv + 4 +'px', 'left' : event.pageX - difo + 4 +'px' });
    });
    
    $(document).on('mouseover',event =>
    { 
      let ebox = document.getElementById($(event.target).parents('.box').attr('id'));
      let box = document.getElementById(this.pid); 

      let nodes = Array.prototype.slice.call( document.getElementById('main').children );

      let start_index = nodes.indexOf(box);
      let event_index = nodes.indexOf(ebox);

      if (start_index < 0 || event_index < 0  || (start_index == event_index) ) return;

      let start_offset = $(box).offset();
      let event_offset = $(ebox).offset();
      let offset_dif = event_offset.left - start_offset.left;

      console.log(offset_dif);
      
      if ( start_index > event_index )
      {
        
        $(box).css('transform','translate3d('+ offset_dif +'px,0,0)');
        for(let i = start_index; i > event_index; i--)
        {
          $(nodes).eq(i-1).css('transform','translate3d(140px,0,0)');
        }
      }
      else
      {
        $(box).css('transform','translate3d('+ offset_dif +'px,0,0)');
        for(let i = start_index; i < event_index; i++)
        {
          $(nodes).eq(i+1).css('transform','translate3d(-140px,0,0)');
        }
      }
    });

  }

  drop(ev) {
    ev.preventDefault();
    console.log('drop');
  }

}

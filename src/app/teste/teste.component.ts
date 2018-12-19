import { Component} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent{

  allowDrop(ev) {
    ev.preventDefault();
    console.log('allowdrop');
  }

  drag(ev) {
    ev.preventDefault();
    console.log(ev.target.id);

    // $(ev.target.id).css()
    // $(document).on('mousemove',event => {console.log('da'); console.log('nu') })
    // $(document).mousemove( ()=> console.log('daniel'));
  }

  button(){
    console.log('button');
  }

  ura(ev){
    
    var box = document.getElementById(ev.target.id);
    $(box).parent().find('.placeholder').show();
    let offset = $(box).parent().offset();
    let difv = ev.pageY - offset.top;
    let difo = ev.pageX - offset.left;
    let curid = ev.target.id

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
      console.log(event.target.id);
      // if ( curid != event.target.id ) {
      //   console.log('diferit');
      // }
      // else
      // {
      //   console.log('acelasi');
      // } 
    });

  }

  drop(ev) {
    ev.preventDefault();
    console.log('drop');
  }

}

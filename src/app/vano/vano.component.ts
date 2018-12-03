import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray,transferArrayItem} from '@angular/cdk/drag-drop';

/**
 * @title Basic Drag&Drop
 */
@Component({
  selector: 'app-vano',
  templateUrl: 'vano.component.html',
  styleUrls: ['vano.component.css'],
})
export class VanoComponent {
make = ['privet','vano','kak dela?','ideom v zal'];
makee = ['1','2','3','4'];
done = ['poka','krasava','bicuha!'];

drop(event: CdkDragDrop<string[]>) {
  if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  } else {
    transferArrayItem(event.previousContainer.data,
                      event.container.data,
                      event.previousIndex,
                      event.currentIndex);
  }
  console.log(event.container.data);
}

}
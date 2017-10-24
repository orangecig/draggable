import {Draggable} from '../../../scripts/vendor/draggable';

export default function ExampleHome() {
  const containers = document.querySelectorAll('.Example--pageHome');
  const draggable = new Draggable(containers, {
    appendTo: '.Example--pageHome',
  });

  // --- Drag states --- //
  draggable.on('drag:start', evt => {
    console.log('Drag: Start');
    console.log(evt.source);
  });

  draggable.on('drag:stop', evt => {
    console.log('Drag: Stop');
  });

  return draggable;
}

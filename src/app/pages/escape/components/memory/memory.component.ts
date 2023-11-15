import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.scss']
})
export class MemoryComponent {
  @Input() modalChoice: string[] = [];
  @Input() modalText: string[] = [];

  public toggleMemory(action: string): void {
    const dialog = document.querySelector('#memory-modal') as HTMLDialogElement;
    dialog.scrollTo(0,0);
    action === 'open' ? dialog.showModal() : dialog.close();
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {
  private modals: any[] = [];

  constructor() { }

  add(modal: any) {
    this.modals.push(modal);
  }

  remove(id: string) {
    if (this.modals && this.modals.length > 0) {
      this.modals = this.modals.filter(modal => modal.id !== id);
    }
  }

  open(id: string) {
    const modal: any =  this.modals.filter(modal => modal.id === id);
    modal.open();
  }

  close(id: string) {
    const modal: any =  this.modals.filter(modal => modal.id === id);
    modal.close();
  }
}

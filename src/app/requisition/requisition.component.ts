import { Component, OnInit } from '@angular/core';
import {NetworkService} from '../services/network.service';
import { urls } from 'src/constants/contants';

@Component({
  selector: 'app-requisition',
  templateUrl: './requisition.component.html',
  styleUrls: ['./requisition.component.scss']
})
export class RequisitionComponent implements OnInit {
  reqHeaders: String[];
  showModal: boolean;
  constructor(
    private networkService: NetworkService
  ) {
    this.showModal = false;
    this.reqHeaders = [
      'Req_No', 'LineItem_No', 'Item_Code', 'Item_Description', 'Material_Group', 'Store_ID',
      'Store_Location', 'Quantity', 'Measure', 'Req_Creation_Date', 'Req_Creation_Date_Text', 'Req_TimeStamp' 
    ]
   }

  ngOnInit() {
    this.getItemCode();
  }

  toggleModal = () => {
    this.showModal = !this.showModal;
  }

  getItemCode() {
    this.networkService.get(urls.CREATE_USER).subscribe(
      (resp) => {
        console.log(resp);
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '.././data-transfer.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  textData = '';
  constructor(private dataTransferService: DataTransferService) { }

  ngOnInit() {
  }

  updataTextFromInput(text) {
    this.dataTransferService.updateSharedDataText(text.target.value);
  }

}

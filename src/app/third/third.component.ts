import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '.././data-transfer.service';
@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit {
  textData = '';
  constructor(private dataTransferService: DataTransferService) { }

  ngOnInit() {
    this.dataTransferService.shareData.subscribe(sharedText => this.textData = sharedText);
  }

}

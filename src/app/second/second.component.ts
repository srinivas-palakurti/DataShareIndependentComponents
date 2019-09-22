import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../data-transfer.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  text: string;

  constructor(private dataTransferService: DataTransferService) { }

  ngOnInit() {
    this.dataTransferService.shareData.subscribe(data => this.text = data);
  }

}

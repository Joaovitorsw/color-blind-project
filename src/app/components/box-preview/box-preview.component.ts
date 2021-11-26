import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cbp-box-preview',
  templateUrl: './box-preview.component.html',
  styleUrls: ['./box-preview.component.scss'],
})
export class BoxPreviewComponent implements OnInit {
  @Input() color: string;
  @Input() selected: string;
  constructor() {}

  ngOnInit(): void {}
}

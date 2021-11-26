import { Component } from '@angular/core';

const object: any = {
  normal: '0',
  achromatopsia:
    '0.213  0.715  0.072  0.000  0.000    0.213  0.715  0.072  0.000  0.000 0.213  0.715  0.072  0.000  0.000 0.000  0.000  0.000  1.000  0.000',
  deuteranopia:
    '0.367  0.861 -0.228  0.000  0.000 0.280  0.673  0.047  0.000  0.000 -0.012  0.043  0.969  0.000  0.000 0.000  0.000  0.000  1.000  0.000',
  protanopia:
    '0.152  1.053 -0.205  0.000  0.000 0.115  0.786  0.099  0.000  0.000 -0.004 -0.048  1.052  0.000  0.000 0.000  0.000  0.000  1.000  0.000',
  tritanopia:
    '1.256 -0.077 -0.179  0.000  0.000 -0.078  0.931  0.148  0.000  0.000 0.005  0.691  0.304  0.000  0.000 0.000  0.000  0.000  1.000  0.000',
};

@Component({
  selector: 'cbp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'color-blind-project';
  color: string;
  selected: string;
  actuallyFilter: any;
  filter: any;

  constructor() {
    this.selected = 'normal';
    this.actuallyFilter = object[this.selected];
  }

  setSelectOption(value: string) {
    this.selected = value;
    this.actuallyFilter = object[this.selected];
    this.filter = document.querySelector('#colorFilter');
    this.filter.innerHTML = `<feColorMatrix type="matrix" values="${this.actuallyFilter}"></feColorMatrix>`;
  }
}

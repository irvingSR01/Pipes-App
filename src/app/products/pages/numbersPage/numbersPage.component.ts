import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';



@Component({
  selector: 'app-numbers-page',
  standalone: true,
  imports: [
    CommonModule,
    PanelModule,
    CardModule
  ],
  templateUrl: './numbersPage.component.html',
  styleUrl: './numbersPage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumbersPageComponent {
  public totalSells: number = 2567789.5567;
  public percent: number = 0.4856;
}

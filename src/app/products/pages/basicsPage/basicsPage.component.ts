import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PanelModule } from 'primeng/panel'
import { CardModule } from 'primeng/card'
import { DividerModule } from 'primeng/divider'

@Component({
  selector: 'app-basics-page',
  standalone: true,
  imports: [
    CommonModule,
    PanelModule,
    CardModule,
    DividerModule
  ],
  templateUrl: './basicsPage.component.html',
  styleUrl: './basicsPage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicsPageComponent {
  public nameLower: string = 'irving';
  public nameUpper: string = 'IRVING';
  public fullName: string = 'iRvINg saNCheZ'

  public customDate: Date = new Date();
}

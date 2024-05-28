import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ButtonModule } from 'primeng/button'
import { MenuItem } from 'primeng/api';
import { PanelModule } from 'primeng/panel';
import { SplitButtonModule } from 'primeng/splitbutton'
import { TableModule } from 'primeng/table';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { ToolbarModule } from 'primeng/toolbar';
import { Color, Hero } from '../../interfaces/hero.interface';
import { CanFlyPipe } from '../../pipes/canFly.pipe';
import { SortByPipe } from '../../pipes/sortBy.pipe';


@Component({
  selector: 'products-order',
  standalone: true,
  imports: [
    ButtonModule,
    CommonModule,
    PanelModule,
    SplitButtonModule,
    TableModule,
    ToggleCasePipe,
    ToolbarModule,
    CanFlyPipe,
    SortByPipe
  ],
  templateUrl: './order.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderComponent {
  public items: MenuItem[] = [];

  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero;

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.green
    },
    {
      name: 'Linterna verde',
      canFly: true,
      color: Color.green
    },
  ];

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero) {
    this.orderBy = value;
  }
}

import { CommonModule, KeyValuePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PanelModule } from 'primeng/panel'
import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button'
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  standalone: true,
  imports: [
    CommonModule,
    PanelModule,
    FieldsetModule,
    ButtonModule,
  ],
  templateUrl: './uncommonPage.component.html',
  styleUrl: './uncommonPage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = 'Irving';
  public gender: 'male' | 'female' = 'male';
  public isChangedPerson: boolean = false;
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    if (this.isChangedPerson) {
      this.name = 'Irving';
      this.gender = 'male';
    } else {
      this.name = 'Diana';
      this.gender = 'female';
    }
    this.isChangedPerson = !this.isChangedPerson
  }

  // i18n Plural
  public clients: string[] = ['Diana', 'Maria', 'Fernando', 'Eduardo', 'Juan', 'Sofia'];
  public clientsMap = {
    '=0': 'no tenemos clientes esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Irving',
    age: 24,
    address: 'Xalapa, Veracruz'
  }

  // async pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:', value) )
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa')
    }, 3500);
  })
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent {
  warningStrongMessage = 'Warning!';
  warningMessage = 'Better check yourself, you\'re not looking too good.';
}

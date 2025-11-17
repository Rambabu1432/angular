import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header.component/header.component';
import { MiddleComponent } from './middle-component/middle-component';
import { FooterComponent } from './footer.component/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent],

  templateUrl: './app.html',
  styleUrls:['./app.css'],
})
export class App {
  protected readonly title = signal('first-project');
}

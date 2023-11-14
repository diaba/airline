import { Component } from '@angular/core';
import {
  ActivatedRoute,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { InfyAirlinesService } from './infy-airlines.service';
import { AirlinesListComponent } from './airlines-list/airlines-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    HttpClientModule,
    RouterLink,
    AirlinesListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [InfyAirlinesService],
})
export class AppComponent {
  title = 'airline';
}

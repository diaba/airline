import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { InfyAirlinesService } from '../infy-airlines.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-airlines-list',
  templateUrl: './airlines-list.component.html',
  standalone: true,
  imports: [CommonModule, HttpClientModule, AirlinesListComponent, AsyncPipe],
  providers: [InfyAirlinesService],
  styleUrls: ['./airlines-list.component.css'],
})
export class AirlinesListComponent implements OnInit {
  constructor(
    private infyAirlinesService: InfyAirlinesService,
    private router: Router,
    private http: HttpClient
  ) {}
  airlinesArray$ = this.http.get<any[]>('http://localhost:3000/airlines/');
  public errorMessage: string = '';

  ngOnInit(): void {}

  getAirlines() {
    /*
      1. Invoke the getAirlines() method of InfyAirlinesService which returns an observable as a response
      2. In success case, assign the response value to airlinesArray property
      3. In error case, set the errorMessage as "Something went wrong"
      4. This method should be invoked on load of the component
    */
    // this.infyAirlinesService.getAirlines().subscribe(
    //   (data) => {
    //     this.airlinesArray.push(data);
    //   },
    //   (err) => {
    //     this.errorMessage = 'Something went wrong';
    //   }
    // );
  }

  showBookingForm(airlinesId: any) {
    /* Code here to navigate to the URL /book-ticket/:airlinesId page */
    // this.router.navigateByUrl('/book-ticket/', airlinesId);
  }
}

// template: `
//     <li *ngFor="let user of users$ | async">{{ user.airlinesName }}</li>
//   `,
//   imports: [
//     HttpClientModule, // <==
//     NgFor,
//     AsyncPipe,
//   ],
// })
// export class AppComponent {
//   users$ = this.http.get<any[]>('http://localhost:3000/airlines/'); // <==
//   constructor(private http: HttpClient) {} // <==
// }

import { Component, OnInit } from '@angular/core';
import { ThemeService } from './core/services/theme.service';
import { SessionService } from './core/services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myEMS';
  theme: string;

  constructor(private themeService: ThemeService,
    private sessionService: SessionService){
      var theme = this.sessionService.getItem("selected-theme");
    if (theme != null && theme.length > 0) {
      this.theme = theme;
      this.themeService.selectTheme(theme);
    } else {
      this.theme = "theme-teal";
    }

   
    
    }
    ngOnInit(): void {
      this.themeService.theme.subscribe((val: string) => {
        this.theme = val;
      });
      
    }
    ngOnDestroy() {
      this.themeService.theme.observers.forEach(function (element) { element.complete(); });
      //this.loaderService.status.observers.forEach(function (element) { element.complete(); });
    }
}

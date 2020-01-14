import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuDataService } from 'src/app/core/services/menu-data.service';
import { UserContextService } from 'src/app/core/services/user-context.service';
import { SessionService } from 'src/app/core/services/session.service';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { User } from 'src/app/core/models/user.model';
import { notification } from 'src/app/core/models/navigation.model';
import { ThemeService } from 'src/app/core/services/theme.service';
import { UserIdleService } from 'angular-user-idle';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User;

  displayNotifications: boolean;

  notifications: notification[];
  
  constructor(
    private router: Router,
    private userContextService: UserContextService,
    private menuDataService: MenuDataService,
    private sessionService: SessionService,
    private routeStateService: RouteStateService,
    private themeService: ThemeService,
    private userIdle: UserIdleService,
    ) {

      this.displayNotifications = false;
     }

  ngOnInit() {
    this.user = this.sessionService.getItem("currentUser");
    this.notifications = [];
    for (var i = 1; i <= 5; i++) {
      var notificationObj = new notification("Message " + i, new Date(), null)
      this.notifications.push(notificationObj);
    }

    //Start watching for user inactivity.
    this.userIdle.startWatching();

    this.userIdle.onIdleStatusChanged().subscribe(count=>{console.log(count)}
      );
    // Start watching when user idle is starting.
    this.userIdle.onTimerStart().subscribe(count=>{console.log(count)});

    // Start watch when time is up.
    this.userIdle.onTimeout().subscribe(() => {
      this.logout();
    });
  }

  logout() {
    //this.userIdle.stopWatching();
    this.routeStateService.removeAll();
    this.userContextService.logout();
    this.sessionService.removeItem('active-menu');
    this.router.navigate(['/login']);
  }

  showNotificationSidebar() {
    this.displayNotifications = true;
  }

  selectTheme(theme: string) {
    this.sessionService.setItem("selected-theme", theme);
    this.themeService.selectTheme(theme);
  }

  toggleMenu(){
    this.menuDataService.toggleMenuBar.next(true);
  }

}

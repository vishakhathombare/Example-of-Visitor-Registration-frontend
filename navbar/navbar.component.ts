import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router, RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProfileDialog } from '../profile-dialog/profile-dialog';
import { MatMenu, MatMenuModule } from "@angular/material/menu";
import { ChangePasswordDialog } from '../change-password-dialog/change-password-dialog';
import { ViewProfileDialog } from '../view-profile-dialog/view-profile-dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterModule,
    MatMenuModule,
    MatDialogModule,
]
})
export class NavbarComponent {
  

  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private router: Router,
    private dialog: MatDialog
  ) {}

  
  logout(): void {
    console.log('Logging out...');
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  openProfileDialog() {
    this.dialog.open(ProfileDialog, {
      width: '400px'
    });
  }

    openViewProfileDialog(): void {
    this.dialog.open(ViewProfileDialog, { 
    width: '400px'
     });
  }

  openChangePasswordDialog() {
    this.dialog.open(ChangePasswordDialog, {
      width: '400px'
    });
  }
   




}


  

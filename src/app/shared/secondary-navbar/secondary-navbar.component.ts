import { Component, OnInit, HostListener, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { NavService } from '../../services/nav.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-secondary-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './secondary-navbar.component.html',
  styleUrls: ['./secondary-navbar.component.css']
})
export class SecondaryNavbarComponent implements OnInit {
  @ViewChild('navContainer') navContainer!: ElementRef;
  
  navigationData: any[] = [];
  activeDropdown: string | null = null;
  isMobile: boolean = window.innerWidth <= 768;
  showMobileMenu: boolean = false;

  constructor(
    private navService: NavService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.navigationData = this.navService.getNavigationData();
    this.checkMobileView();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkMobileView();
    if (!this.isMobile) {
      this.closeMobileMenu();
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.isMobile) {
      const target = event.target as HTMLElement;
      if (!target.closest('.nav-item')) {
        this.activeDropdown = null;
      }
    }
  }

  checkMobileView() {
    this.isMobile = window.innerWidth <= 768;
  }

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
    if (this.showMobileMenu) {
      this.renderer.addClass(document.body, 'nav-open');
    } else {
      this.renderer.removeClass(document.body, 'nav-open');
      this.activeDropdown = null;
    }
  }

  closeMobileMenu() {
    this.showMobileMenu = false;
    this.activeDropdown = null;
    this.renderer.removeClass(document.body, 'nav-open');
  }

  closeDropdownAndMenu() {
    this.activeDropdown = null;
    if (this.isMobile) {
      this.closeMobileMenu();
    }
  }

  toggleDropdown(category: string, event: Event) {
    event.preventDefault();
    event.stopPropagation();
    
    if (this.isMobile) {
      if (this.activeDropdown === category) {
        this.activeDropdown = null;
      } else {
        this.activeDropdown = category;
        // Ensure the dropdown is visible by scrolling to it
        setTimeout(() => {
          const dropdown = document.querySelector('.dropdown-menu.show');
          if (dropdown) {
            dropdown.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }, 100);
      }
    } else {
      this.activeDropdown = category;
    }
  }

  scrollLeft() {
    this.navContainer.nativeElement.scrollBy({
      left: -200,
      behavior: 'smooth'
    });
  }

  scrollRight() {
    this.navContainer.nativeElement.scrollBy({
      left: 200,
      behavior: 'smooth'
    });
  }
}
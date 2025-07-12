import { Component, Input } from '@angular/core';
import { NavLink } from './nav-link';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'pl-navbar',
	standalone: true,
	imports: [CommonModule, RouterModule],
	templateUrl: './navbar.html',
	styleUrl: './navbar.css',
})
export class Navbar {
	@Input({ required: false }) links: NavLink[] = [
		{ label: 'Home', route: '/' },
		// Add more default links here if needed
	];
}

// Angular
import { AfterViewInit, Component, OnInit } from '@angular/core';
// Layout
import { LayoutConfigService, ToggleOptions } from '../../../core/_base/layout';
import { HtmlClassService } from '../html-class.service';

@Component({
	selector: 'kt-brand',
	templateUrl: './brand.component.html',
})
export class BrandComponent implements OnInit, AfterViewInit {
	// Public properties
	headerLogo: string;
	headerStickyLogo: string;

	toggleOptions: ToggleOptions = {
		target: 'body',
		targetState: 'kt-aside--minimize',
		togglerState: 'kt-aside__brand-aside-toggler--active'
	};

	/**
	 * Component constructor
	 *
	 * @param layoutConfigService: LayoutConfigService
	 * @param htmlClassService: HtmlClassService
	 */
	constructor(private layoutConfigService: LayoutConfigService, public htmlClassService: HtmlClassService) {
	}

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit(): void {
		this.headerLogo = "./assets/media/logos/logo-light.svg";//this.layoutConfigService.getLogo();
		this.headerStickyLogo = "./assets/media/logos/logo-light.svg";//this.layoutConfigService.getStickyLogo();
	}

	/**
	 * On after view init
	 */
	ngAfterViewInit(): void {
	}
}

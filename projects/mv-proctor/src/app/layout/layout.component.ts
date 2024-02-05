import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

import { IAppConfig, Layout, Theme } from './models';

@Component({
    selector: 'vt-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
    private _layout$ = new BehaviorSubject<Layout>('empty-layout');
    private _config: IAppConfig = { layout: 'empty-layout' };
    private _destroyRef = inject(DestroyRef);
    private _activatedRoute = inject(ActivatedRoute);
    private _router = inject(Router);
    private _document = inject(DOCUMENT);

    get layout$() {
        return this._layout$.asObservable();
    }

    constructor() {
        this.initRouterEvents();
    }

    private _updateAppConfig() {
        // Get the current activated route
        let route = this._activatedRoute;
        while (route.firstChild) {
            route = route.firstChild;
        }

        this._updateLayout(route);
        this._updateTheme(route);
    }

    private _updateLayout(route: ActivatedRoute): void {
        this._layout$.next(this._config.layout as Layout);

        const layoutFromQueryParam = route.snapshot.queryParamMap.get('layout') as Layout;
        if (layoutFromQueryParam) {
            this._layout$.next(layoutFromQueryParam);
            if (this._config) {
                this._config.layout = layoutFromQueryParam;
            }
        }

        const paths = route.pathFromRoot;

        paths.forEach((path) => {
            if (path.routeConfig && path.routeConfig.data && path.routeConfig.data['layout']) {
                this._layout$.next(path.routeConfig.data['layout'] as Layout);
            }
        });
    }

    private _updateTheme(route: ActivatedRoute): void {
        let { theme } = route.snapshot.data as IAppConfig;
        // Add class name for the currently selected theme
        if (!theme) {
            // Find the class name for the previously selected theme and remove it
            const paths = route.pathFromRoot;

            paths.forEach((path) => {
                if (path.routeConfig && path.routeConfig.data && path.routeConfig.data['theme']) {
                    theme = path.routeConfig.data['theme'] as Theme;
                }
            });
        }
        this._document.body.classList.forEach((className: string) => {
            if (className.startsWith('theme-')) {
                this._document.body.classList.remove(className);
            }
        });

        this._document.body.classList.add(theme || '');
    }

    initRouterEvents() {
        // Subscribe to NavigationEnd event
        this._router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                takeUntilDestroyed(this._destroyRef),
            )
            .subscribe(() => {
                // Update the layout
                this._updateAppConfig();
            });
    }
}

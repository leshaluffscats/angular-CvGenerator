import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs';
import { AUTH } from 'src/app/shared/constants/routing-paths.consts';
import { AuthApiService } from 'src/app/shared/services/api/auth/auth.api.service';
import { ThemeService } from 'src/app/shared/services/theme/theme.service';
import { AuthFacade } from 'src/app/store/auth/auth.facade';
import { CommonFacade } from 'src/app/store/common/common.facade';

@UntilDestroy()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public isDark: boolean;

  constructor(
    private commonFacade: CommonFacade,
    private themeService: ThemeService,
    private translateService: TranslateService,
    private authFacade: AuthFacade,
    private authApi: AuthApiService,
    private router: Router,
  ) {}

  public toggleTheme(): void {
    this.commonFacade
      .toggleTheme()
      .pipe(untilDestroyed(this), take(1))
      .subscribe(isDark => {
        this.isDark = isDark;
        if (this.isDark) {
          this.themeService.switchTheme('dark-blue');
        } else {
          this.themeService.switchTheme('light-blue');
        }
      });
  }

  public changeLanguage(): void {
    this.translateService.use(
      this.translateService.currentLang === 'ru' ? 'en' : 'ru',
    );
  }

  public logout(): void {
    this.authApi
      .logout()
      .pipe(untilDestroyed(this))
      .subscribe(() => {
        this.authFacade.removeToken();
        this.router.navigate([AUTH.path]);
      });
  }
}

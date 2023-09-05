import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs';
import { ThemeService } from 'src/app/shared/services/theme/theme.service';
import { CommonFacade } from 'src/app/store/common/common.facade';

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
  ) {}

  public toggleTheme(): void {
    this.commonFacade
      .toggleTheme()
      .pipe(take(1))
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
    console.log(this.translateService.currentLang);
    this.translateService.use(
      this.translateService.currentLang === 'en' ? 'ru' : 'en',
    );
  }
}

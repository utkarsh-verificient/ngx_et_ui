export type Layout = 'frame-layout' | 'pt-layout' | 'ta-layout' | 'empty-layout';

export type Theme = 'theme-proctortrack';

export interface IAppConfig {
    layout?: Layout;
    theme?: Theme;
}

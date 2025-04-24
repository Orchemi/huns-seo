export const GA_CTA_EVENTS = {
	onClickBottomBanner: 'click_cta_bottom_banner',
	onClickListening: 'click_cta_listening',
	onClickNavigation: 'click_cta_navigation',
	onClickGuide: 'click_cta_guide',
	onClickAppDownload: 'click_cta_app_download',
} as const;

export type GaCtaEvent = (typeof GA_CTA_EVENTS)[keyof typeof GA_CTA_EVENTS];

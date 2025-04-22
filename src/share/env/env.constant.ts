import { BASE_CONFIG } from '@/config/base.config';

export const ENV = {
	DV: 'development',
	PR: 'production',
} as const;

export type EnvType = 'production' | 'development';

export const ENV_TYPE: EnvType = (process?.env?.NEXT_PUBLIC_ENV ??
	ENV.DV) as EnvType;

export const isDevMode = ENV_TYPE === ENV.DV;

export const filePrefix = isDevMode ? '' : BASE_CONFIG.URL;

export const HOST = {
	[ENV.DV]: 'http://localhost:3000',
	[ENV.PR]: BASE_CONFIG.URL,
} as const;

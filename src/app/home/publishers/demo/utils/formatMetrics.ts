
// src/app/home/publishers/demo/utils/formatMetrics.ts

/**
 * Format traffic for table display
 * Shows "<100" when traffic < 100 or 0
 * Shows formatted number otherwise
 */
export function formatTrafficTable(traffic?: number): string {
	if (!traffic || traffic === 0 || traffic < 100) {
		return '<100';
	}
	return traffic.toLocaleString();
}

/**
 * Format referring domains for table display
 * Shows "<100" when domains < 100 or 0
 * Shows formatted number otherwise
 */
export function formatReferringDomainsTable(domains?: number): string {
	if (!domains || domains === 0 || domains < 100) {
		return '<100';
	}
	return domains.toLocaleString();
}

/**
 * Format domain age
 * Always show "0y" if 0 or missing
 */
export function formatDomainAge(years?: number): string {
	return years && years > 0 ? `${years}y` : '0y';
}
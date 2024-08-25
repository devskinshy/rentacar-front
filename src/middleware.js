import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales } from './config';

const intlMiddleware = createMiddleware({
	// A list of all locales that are supported
	locales,

	// Used when no locale matches
	defaultLocale,
});

export default function middleware(request) {
	const { pathname } = request.nextUrl;

	// Regular expression to match the supported locales
	const localeRegex = new RegExp(`^/(${locales.join('|')})(/.*)?$`);

	// Regular expression to match all other paths
	const otherPathsRegex = /^(?!.*(api|_next|_vercel|\..*)).+$/;

	// Check if the request should be handled
	const shouldHandle =
		pathname === '/' ||
		localeRegex.test(pathname) ||
		otherPathsRegex.test(pathname);

	return shouldHandle ? intlMiddleware(request) : null;
}

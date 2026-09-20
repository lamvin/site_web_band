import { getRequestConfig } from 'next-intl/server';

export const defaultLocale = 'fr';

export default getRequestConfig(async () => {
    return {
        locale: defaultLocale,
        messages: (await import('../messages/fr.json')).default
    };
});

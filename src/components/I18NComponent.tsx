import React from 'react';

// the hook
import { useTranslation } from 'react-i18next';

function I18NCompnent() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return <>
    <h1>{t('appWelcomeMessage')}</h1>
        <button onClick={() => changeLanguage('ar')}>ar</button>
        <button onClick={() => changeLanguage('de')}>de</button>
        <button onClick={() => changeLanguage('en')}>en</button>
    </>
}

export {I18NCompnent}
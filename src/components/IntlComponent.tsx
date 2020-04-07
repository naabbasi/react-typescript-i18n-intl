import React, { useState } from 'react';
import { IntlProvider, FormattedMessage } from "react-intl";
import {locales} from '../intl/messages';
import { Button } from 'primereact/button';

const IntlComponent = () => {
    const [locale, setLocale] = useState("en");

    const handleSelect = (e : any) => {
        setLocale(e.target.value);
    };

    return <><select onChange={(e)=>handleSelect(e)} defaultValue={locale}>
            {["en", "es", "fr", "de"].map(l => (
              <option key={l}>{l}</option>
            ))}
        </select>

        <IntlProvider locale={locale} messages={locales[locale]}>
        <p>
            <FormattedMessage id="greeting" values={{ locale }} />
            <br />
            <FormattedMessage id="time" values={{ t: Date.now() }} />
            <br />
            <FormattedMessage id="date" values={{ d: Date.now() }} />
            <br/>
            <Button label={locales[locale]['greeting']} icon="pi pi-check"/>
        </p>
        </IntlProvider>
    </>
}

export {IntlComponent}

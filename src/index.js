import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import JobsList from "./components/jobslist";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

const lang = navigator.language.split(/[-_]/)[0];
const messages = lang === "es" ? localeEsMessages : localeEnMessages;
ReactDOM.render(
    
    <IntlProvider locale={lang} messages={messages}>
            <JobsList/>
    </IntlProvider>, document.getElementById("root")
);

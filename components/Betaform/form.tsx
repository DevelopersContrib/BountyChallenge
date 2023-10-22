import React, {useEffect} from "react";


const HubspotContactForm = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src='https://js.hsforms.net/forms/v2.js';
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            // @TS-ignore
            if (window.hbspt) {
                // @TS-ignore
                window.hbspt.forms.create({
                    portalId: '42816889',
                    formId: '9eec10c7-827a-4a25-88fa-122040066603',
                    target: '#hubspotForm'
                })
            }
        });
    }, []);

    return (
        <div>
            <div id="hubspotForm"></div>
        </div>
    );

}

export default HubspotContactForm;
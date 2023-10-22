import React from 'react';
import Script from 'next/script';

const VNOC_newsletter: React.FC = () => {
  return (
    <div>
       
        <div className="widget1">
        <Script src="https://manage.vnoc.com/widgets/leads?domain=vnoc.com&c=black&class=widget1"/>
        </div>
    </div>
  );
};

export default VNOC_newsletter;
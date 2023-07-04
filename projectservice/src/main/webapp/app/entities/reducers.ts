import aboutUs from 'app/entities/projectservice/about-us/about-us.reducer';
import banner from 'app/entities/projectservice/banner/banner.reducer';
import contact from 'app/entities/projectservice/contact/contact.reducer';
import filesAboutUs from 'app/entities/projectservice/files-about-us/files-about-us.reducer';
import filesBanner from 'app/entities/projectservice/files-banner/files-banner.reducer';
import filesPartner from 'app/entities/projectservice/files-partner/files-partner.reducer';
import outstanding from 'app/entities/projectservice/outstanding/outstanding.reducer';
import partner from 'app/entities/projectservice/partner/partner.reducer';
import quote from 'app/entities/projectservice/quote/quote.reducer';
import serviceProvide from 'app/entities/projectservice/service-provide/service-provide.reducer';
import supportOnline from 'app/entities/projectservice/support-online/support-online.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const entitiesReducers = {
  aboutUs,
  banner,
  contact,
  filesAboutUs,
  filesBanner,
  filesPartner,
  outstanding,
  partner,
  quote,
  serviceProvide,
  supportOnline,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
};

export default entitiesReducers;

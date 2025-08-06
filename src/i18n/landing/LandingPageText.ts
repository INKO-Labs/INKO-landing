export interface LandingPageText {
  header: {
    title: [string, string];
    subTitle: [string, string];
    betaTestingButtonLabel: string;
  };
  features: {
    title: string;
    items: {
      title: string;
      text: string;
    }[];
  };
  services: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  betaTesting: {
    title: string;
    text: [string, string];
    form: {
      label: string;
      placeholder: string;
      success: string;
      fail: string;
    };
  };
  footer: {
    title: string;
    address: string;
    copyright: string;
  };
}

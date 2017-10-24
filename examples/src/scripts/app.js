import MobileNav from '../components/MobileNav';

import ExampleHome from '../components/Example/Home';

const navActivator = document.getElementById('MobileNavActivator');

if (navActivator) {
  const mobileNav = new MobileNav(navActivator);
}

ExampleHome();

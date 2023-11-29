import { roboto } from './fonts';
import Header from './components/Header/Header';

import {
  faFacebook,
  faInstagram,
  faVk,
} from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import 'styles/globals.scss';

const { library } = require('@fortawesome/fontawesome-svg-core');

library.add(faArrowRight, faInstagram, faFacebook, faVk);

export const metadata = {
  title: 'YourTour',
  description: 'Сhoose your tour',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <div className="page-layout">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}

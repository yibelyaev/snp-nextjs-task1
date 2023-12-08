'use client'

import {useState, useEffect} from "react";
import Link from 'next/link';
import Image from 'next/image';
import cx from 'classnames'

import {navigation} from "stubs/navigation";

import s from './Header.module.scss';

const Header = () => {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [isWindowScrollPosition, setIsWindowScrollPosition] = useState(0);

  const handlerScrollWindow = () => {
    setIsWindowScrollPosition(window.scrollY)
  }

  useEffect(() => {
    if (isWindowScrollPosition > 450) {
      setIsHeaderSticky(true)
    } else {
      setIsHeaderSticky(false)
    }

    window.addEventListener('scroll', handlerScrollWindow)


    return () => {
      window.removeEventListener('scroll', handlerScrollWindow)
    }

  }, [isWindowScrollPosition])

  return (
    <header className={cx(s.header, {[s.sticky]: isHeaderSticky})}>
      <div className={s.container}>
        <div className={s.wrapper}>
          <a href="/">
            <Image
              className={s.logo}
              src="/images/logotype.svg"
              width={182}
              height={31}
              alt="Логотип сайта."
            />
          </a>
          <nav className={s.nav}>
            <ul className={s.list}>
              {navigation.map((link) =>
                  <li key={link.text}>
                    <Link className={s.link} href={link.path}>
                      {link.text}
                    </Link>
                  </li>
              )}
            </ul>
          </nav>
          <a className={s.link} href="tel:+79999999999">
            +7 999 999 99 99
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;

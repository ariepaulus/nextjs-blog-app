//* Use <Link></Link> instead of <a></a> to stay in an SPA with no re-loading of the page while 'navigating to different pages'
import Link from 'next/link';

import Logo from './logo';
import styles from './main-navigation.module.css';

function MainNavigation() {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href='/posts'>Posts</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

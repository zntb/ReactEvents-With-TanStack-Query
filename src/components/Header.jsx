import BeatLoader from 'react-spinners/BeatLoader';
import { useIsFetching } from '@tanstack/react-query';

export default function Header({ children }) {
  const fetching = useIsFetching();

  return (
    <>
      <div id="main-header-loading">
        {fetching > 0 && <BeatLoader color="#3661d7" />}
      </div>
      <header id="main-header">
        <div id="header-title">
          <h1>React Events</h1>
        </div>
        <nav>{children}</nav>
      </header>
    </>
  );
}

import Logo from './Logo';
import DarkMode from './DarkMode';
import NavSearch from './NavSearch';
import LinksDropdown from './LinksDropdown';

function Navbar() {
  return (
    <nav className="border-b border-gray-200 dark:border-gray-700">
      <div className="container flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8">
        <Logo />
        <NavSearch />
        <div className="flex gap-4 items-center">
          <DarkMode />
          <LinksDropdown />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;

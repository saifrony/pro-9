import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav>
       <Link to='/'>home</Link>
       <Link to='/quiz'>Quiz</Link>
       <Link to='/question'>Question</Link>
        
      </nav>
    </div>
  );
};

export default Header;
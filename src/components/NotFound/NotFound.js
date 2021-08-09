import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <section className="not-found">
      <h1 className="not-found__title">404</h1>
      <h2 className="not-found__sub-title">Страница не найдена</h2>
      <Link to="/" className="not-found__link">Назад</Link>
    </section>  
  );
};

export default NotFound;
import Home from '@mui/icons-material/Home';
import { useParams } from 'react-router-dom';

export const getRoutes = () => {
  const origin = window.location.origin;
  const routes = window.location.href.replace(origin, '')?.split('/').slice(2);
  return routes;
};
export const Breadcrumb = () => {
  const routes = getRoutes();

  return (
    <div className="flex gap-3 text-sm">
      <a href="/admin#/patients">
        <div className="flex items-center gap-1">
          <Home /> <span>Home</span>
        </div>
      </a>
    </div>
  );
};

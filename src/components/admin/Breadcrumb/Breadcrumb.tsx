import Home from '@mui/icons-material/Home';

export const Breadcrumb = () => {
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

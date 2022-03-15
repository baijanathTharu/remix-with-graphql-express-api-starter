import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Home Page</h1>
      <div>
        <Link to='/about'>Go to About</Link>
      </div>
      <div>
        <a href='http://localhost:4000/graphql'>Graphql Api</a>
      </div>
    </div>
  );
}

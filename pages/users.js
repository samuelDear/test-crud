import Link from 'next/link';
import { Header, HeadPage } from '../components';

const Users = () => {
  return (
    <>
      <HeadPage title="CMS - Users" />
      <Header />
      <main>
        <p>hola</p>
        <Link href="/users/asdada">
          <a>Go to users/[pid].js</a>
        </Link>
      </main>
    </>
  );
};

export default Users;

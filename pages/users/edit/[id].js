import { useRouter } from 'next/router';

const Users = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log(id, router.query);

  return (
    <>
      <main>
        <p>hola</p>
      </main>
    </>
  );
};

export default Users;

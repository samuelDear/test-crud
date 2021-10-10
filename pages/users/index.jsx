import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header, HeadPage } from '../../components';
import { userService } from '../../services/users.service';
import classes from '../../styles/pages/Users.module.css';

const Users = () => {
  const [users, setUsers] = useState([
    {
      id: 10,
      name: 'samu',
      email: 'hola@email.com',
    },
  ]);

  useEffect(async () => {
    try {
      const users = await userService.getAllUsers();
      setUsers(users);
    } catch (error) {
      // eslint-disable-next-line
      alert('Error in request');
    }
  }, []);

  return (
    <>
      <HeadPage title="CMS - Users" />
      <Header />
      <main className={classes.mainBox}>
        <h1 className={classes.titlePage}>Users</h1>
        <Link href="/users/create">
          <button
            type="button"
            className={`mb-4 ${classes.addUser} ${classes.btnCommon}`}>
            Create User
          </button>
        </Link>
        <div className="table-auto w-full">
          <div className={`${classes.rowBox} border-b-2 border-gray-400`}>
            <div className={`w-2/12 ${classes.tableHeader}`}>ID</div>
            <div className={`w-3/12 ${classes.tableHeader}`}>Name</div>
            <div className={`w-3/12 ${classes.tableHeader}`}>Email</div>
            <div className={`w-5/12`}></div>
          </div>
          {users &&
            users.map((user, index) => (
              <div
                className={`${classes.rowBox} ${
                  index % 2 == 0 ? classes.rowOdd : ''
                }`}
                key={user.id}>
                <div
                  className={`text-center w-2/12 flex justify-center items-center ${classes.cellBox}`}>
                  <span>{user.id}</span>
                </div>
                <div
                  className={`text-center w-3/12 flex justify-center items-center ${classes.cellBox}`}>
                  <span>{user.name}</span>
                </div>
                <div
                  className={`text-center w-3/12 flex justify-center items-center ${classes.cellBox}`}>
                  <span>{user.email}</span>
                </div>
                <div
                  className={`w-5/12 ${classes.optionCell} ${classes.cellBox}`}>
                  <Link href={`/users/edit/${user.id}`}>
                    <button
                      className={`${classes.btnCommon} ${classes.editUser}`}>
                      Edit
                    </button>
                  </Link>
                  <button
                    className={`${classes.btnCommon} ${classes.deleteUser}`}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          {users && !users.length && <p className="p-2">No Users To Display</p>}
        </div>
        <p className={classes.quantityText}>Quantity: {users.length}</p>
      </main>
    </>
  );
};

export default Users;

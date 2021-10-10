import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header, HeadPage, Modal } from '../../components';
import { userService } from '../../services/users.service';
import classes from '../../styles/pages/Users.module.css';
import DELETE_IC from '../../public/images/icon/delete-black-ic.svg';
import EDIT_IC from '../../public/images/icon/edit-black-ic.svg';
import VIEW_IC from '../../public/images/icon/visibility-black-ic.svg';

const Users = () => {
  const [showModal, setShowModal] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [deleteUser, setDeleteUser] = useState({});
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

  const handleDeleteUser = async id => {
    try {
      setDeleting(true);
      await userService.deleteUser(id);
      setUsers(users => users.filter(u => u.id !== id));
      setShowModal(false);
      setDeleting(false);
    } catch (error) {
      // eslint-disable-next-line
      alert('Error in request');
      setDeleting(false);
    }
  };

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
        <div className={`${classes.tableBox} table-auto w-full`}>
          <div className={`${classes.rowBox} border-b-2 border-gray-400`}>
            <div className={`w-2/12 ${classes.tableHeader}`}>ID</div>
            <div className={`w-3/12 ${classes.tableHeader}`}>Name</div>
            <div className={`w-4/12 ${classes.tableHeader}`}>Email</div>
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
                  className={`text-center w-4/12 flex justify-center items-center ${classes.cellBox}`}>
                  <span>{user.email}</span>
                </div>
                <div
                  className={`w-5/12 ${classes.optionCell} ${classes.cellBox}`}>
                  <Link href={`/users/${user.id}`}>
                    <button
                      className={`${classes.btnCommon} ${classes.editUser}`}>
                      <Image
                        src={VIEW_IC}
                        alt="Eye Icon"
                        title={`View User ${user.name}`}
                        width={20}
                      />
                    </button>
                  </Link>
                  <Link href={`/users/edit/${user.id}`}>
                    <button
                      className={`${classes.btnCommon} ${classes.editUser}`}>
                      <Image
                        src={EDIT_IC}
                        alt="Edit Icon"
                        title={`Edit User ${user.name}`}
                        width={20}
                      />
                    </button>
                  </Link>
                  <button
                    onClick={() => {
                      setDeleteUser(user);
                      setShowModal(true);
                    }}
                    className={`${classes.btnCommon} ${classes.deleteUser}`}>
                    <Image
                      src={DELETE_IC}
                      alt="Trash Icon"
                      title={`Delete User ${user.name}`}
                      width={20}
                    />
                  </button>
                </div>
              </div>
            ))}
          {users && !users.length && <p className="p-2">No Users To Display</p>}
        </div>
        <p className={classes.quantityText}>Quantity: {users.length}</p>
      </main>
      {showModal && (
        <Modal
          closeModal={() => {
            setShowModal(false);
            setDeleteUser({});
          }}>
          <div className={`flex flex-col items-center`}>
            <h1 className={classes.titleModalDelete}>Delete User</h1>
            <p className={classes.dscModalDelete}>
              are you sure to delete the user {deleteUser?.name}?
            </p>
            <button
              type="button"
              disabled={deleting}
              onClick={() => handleDeleteUser(deleteUser?.id)}
              className={`${classes.deleteModalBtn} ${classes.btnModal}`}>
              Delete
            </button>
            <button
              type="button"
              disabled={deleting}
              className={`${classes.backBtn} ${classes.btnModal}`}
              onClick={() => {
                setShowModal(false);
                setDeleteUser({});
              }}>
              Back
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Users;

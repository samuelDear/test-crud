import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header, HeadPage } from '../../components';
import { userService } from '../../services/users.service';
import classes from '../../styles/pages/users/View.module.css';

export async function getServerSideProps({ params }) {
  const user = await userService.getUserById(params.id);

  return {
    props: { user },
  };
}

const EditUser = ({ user }) => {
  return (
    <>
      <HeadPage title="CMS - View" />
      <Header />
      <main className={`w-full ${classes.mainBox}`}>
        <div className={`${classes.userBox}`}>
          <h1 className={`${classes.pageTitle}`}>User {user.name}</h1>
          <div className={`flex flex-col mb-4`}>
            <label className={`font-bold uppercase`}>ID:</label>
            <span className={`ml-2 text-gray-500`}>{user.id}</span>
          </div>
          <div className={`flex flex-col mb-4`}>
            <label className={`font-bold uppercase`}>Name:</label>
            <span className={`ml-2 text-gray-500`}>{user.name}</span>
          </div>
          <div className={`flex flex-col mb-4`}>
            <label className={`font-bold uppercase`}>Email:</label>
            <span className={`ml-2 text-gray-500`}>{user.email}</span>
          </div>
          <div className={`w-full flex justify-between items-center mt-12`}>
            <Link href="/users">
              <button
                type="button"
                className={`${classes.btnCommon} ${classes.backBtn}`}>
                Back
              </button>
            </Link>

            <Link href={`/users/edit/${user.id}`}>
              <button
                type="button"
                className={`${classes.btnCommon} ${classes.editBtn}`}>
                Edit
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default EditUser;

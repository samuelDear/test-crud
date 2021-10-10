import { useState } from 'react';
import { useRouter } from 'next/router';
import { Header, HeadPage } from '../../components';
import { userService } from '../../services/users.service';
import classes from '../../styles/pages/users/Create.module.css';

const CreateUser = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    email: '',
    successMsg: '',
    errorMsg: '',
  });
  const { name, email, successMsg, errorMsg } = form;

  const handleSubmit = async e => {
    e.preventDefault();
    const params = {
      name,
      email,
    };

    try {
      userService.createUser(params);
      setForm(prevState => ({
        ...prevState,
        successMsg: 'User created',
      }));

      setTimeout(() => {
        router.push('/users');
      }, 3000);
    } catch (error) {
      setError('Error in request');
    }
  };

  const setError = msg => {
    setForm(prevState => ({
      ...prevState,
      errorMsg: msg,
    }));
    setTimeout(() => {
      setForm(prevState => ({
        ...prevState,
        errorMsg: '',
      }));
    }, 3000);
  };

  return (
    <>
      <HeadPage title="CMS - Create" />
      <Header />
      <main className={`w-full ${classes.mainBox}`}>
        <form onSubmit={handleSubmit} className={`${classes.formBox}`}>
          <h1 className={`text-center ${classes.title}`}>Create New User</h1>
          {successMsg !== '' || errorMsg ? (
            <span
              className={`${
                successMsg !== '' ? classes.successMsg : classes.errorMsg
              }`}>
              {successMsg !== '' ? successMsg : errorMsg}
            </span>
          ) : null}
          <div className={`${classes.inputLabel}`}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Name..."
              value={name}
              onChange={({ target: { value } }) => {
                setForm(prevState => ({
                  ...prevState,
                  name: value,
                }));
              }}
              className={`${classes.inputBox}`}
              autoComplete="off"
            />
          </div>
          <div className={`${classes.inputLabel}`}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Email..."
              value={email}
              onChange={({ target: { value } }) => {
                setForm(prevState => ({
                  ...prevState,
                  email: value,
                }));
              }}
              className={`${classes.inputBox}`}
              autoComplete="off"
            />
          </div>
          <button
            type="submit"
            className={`${classes.saveBtn}`}
            disabled={
              email === '' ||
              name === '' ||
              !/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
                email,
              )
            }>
            Guardar
          </button>
        </form>
      </main>
    </>
  );
};

export default CreateUser;

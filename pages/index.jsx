import Image from 'next/image';
import { useRouter } from 'next/router';
import { Header, HeadPage } from '../components';
import classes from '../styles/pages/index.module.css';
import HOME_ICON from '../public/images/userGuide.svg';

const Home = () => {
  const router = useRouter();

  return (
    <>
      <HeadPage title="CMS - HOME" />
      <Header />
      <main className={classes.mainBox}>
        <div className="w-full md:w-5/12 m-4 flex flex-col justify-center">
          <h1 className={classes.titlePage}>
            Your Mobile Office to make faster you medical consultation
          </h1>
          <p className={classes.dscProduct}>
            Will you make your medical consultation faster? With TraumApp you
            can manage everything you need such as patients, histories and
            medical appointments. This and more tools for helping you make
            faster.
          </p>
          <div className="flex flex-col items-start lg:items-center justify-start lg:flex-row">
            <button
              type="button"
              onClick={() => router.push('/users')}
              className={`rounded-full py-4 px-8 font-bold ${classes.principalButton}`}>
              Edit Users
            </button>
            <button
              type="button"
              className={`rounded-full py-4 px-8 font-bold ${classes.secundaryButton}`}>
              Watch Demo
            </button>
          </div>
        </div>
        <div className="w-11/12 m-auto sm:w-8/12 md:w-5/12 m-4 flex flex-col justify-center">
          <Image
            src={HOME_ICON}
            title="Home Image"
            alt="Home Image"
            id="homeLogo"
          />
        </div>
      </main>
    </>
  );
};

export default Home;

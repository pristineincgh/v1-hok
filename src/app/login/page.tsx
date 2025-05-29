import { Metadata } from 'next';
import LoginForm from '@/components/login/LoginForm';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Login',
  description:
    'Access your secure account. Log in to manage your profile, view your dashboard, and more.',
};

const LoginPage = () => {
  return (
    <div className="h-screen grid xl:grid-cols-5 overflow-hidden">
      <section className="xl:col-span-3 relative hidden xl:block">
        <div className="w-[50rem] h-[50rem] 2xl:w-[55rem] 2xl:h-[55rem] min-[2048px]:!w-[70rem] min-[2048px]:!h-[70rem] rounded-full bg-radial from-purple-600 to-purple-950 absolute -top-[10rem] -left-20 2xl:-top-[16rem] 2xl:-left-16 min-[2048px]:!-top-[14rem] min-[2048px]:!-left-[7rem]">
          <div className="h-full grid place-content-center gap-1 pt-24 space-y-2">
            <div className="text-center text-lg bg-background w-fit px-4 py-2 rounded text-purple-800 font-semibold">
              House of Keren
            </div>
            <div className="text-justify space-y-2">
              <h1 className="text-background font-bold tracking-tight text-6xl">
                Customer Engagement
              </h1>
              <p className="text-lg text-muted max-w-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas odit repellendus fuga cupiditate deserunt facere
                quisquam. Dolorem sint ex minima?
              </p>
            </div>
          </div>
        </div>
        <div className="w-[25rem] h-[25rem] rounded-full bg-radial from-purple-600 to-purple-950 absolute -bottom-20 -left-36" />
        <div className="w-[18rem] h-[18rem] rounded-full bg-radial from-purple-600 to-purple-950 absolute bottom-4 left-[30rem] min-[2048px]:left-[35rem] min-[2048px]:bottom-[2rem] grid place-content-center">
          <div className="relative z-20 mix-blend-lighten">
            <Image
              src="/images/login/service.png"
              width={170}
              height={170}
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="xl:col-span-2 relative bg-radial from-purple-600 to-purple-950 xl:from-transparent xl:to-transparent flex items-center justify-center xl:justify-start px-8">
        <div className="xl:hidden absolute inset-0 bg-[url('/images/login/dark-pattern.png')] bg-cover bg-no-repeat bg-center mix-blend-multiply opacity-70" />
        <div className="relative z-10 flex flex-col gap-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-background xl:text-foreground">
              Welcome Back
            </h2>
            <p className="xl:text-lg text-muted xl:text-muted-foreground">
              Please enter your credentials to access your account.
            </p>
          </div>

          <LoginForm />
        </div>
        <div className="hidden xl:block w-[20rem] h-[20rem] rounded-full bg-radial from-purple-600 to-purple-950 absolute -bottom-48 -right-[10rem] min-[2048px]:!-bottom-32 min-[2048px]:!-right-[7rem]" />
      </section>
    </div>
  );
};
export default LoginPage;

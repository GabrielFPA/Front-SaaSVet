import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-zinc-50 font-sans dark:bg-black p-4">
      <main className="flex w-full max-w-md flex-col items-center justify-center gap-8 rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-900 sm:items-center">
        {/*<Image*/}
        {/*  className="dark:invert"*/}
        {/*  src="/next.svg"*/}
        {/*  alt="Next.js logo"*/}
        {/*  width={100}*/}
        {/*  height={20}*/}
        {/*  priority*/}
        {/*/>*/}
        <div className="text-center text-lg">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Vet
          </h1>
        </div>
        <form action="/" method="POST">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
              type={"email"}
              id={"email"}
              placeholder={"Insira seu email"}
              className={"mt-1 mb-4 p-3 border border-gray-300 rounded-lg w-full focus:ring focus:ring-blue-500 focus:border-blue-500 text-black"}
          />
          <br/>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
            <input
                type={"password"}
                id={"password"}
                placeholder={"Insira seu senha"}
                className={"mt-1 mb-6 p-3 border border-gray-300 rounded-lg w-full focus:ring focus:ring-blue-500 focus:border-blue-500 text-black"}
            />
          <br/>
         <button /*type="submit"*/
          className="flex flex-col gap-4 text-base font-medium sm:flex-row"

         >

         </button>
          <Link href="/">
            <p className="text-center text-blue-500 hover:underline mt-4 text-sm">
              Não possui uma conta? Registre-se
            </p>
          </Link>
        </form>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}

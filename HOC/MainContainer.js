import NavLink from "../components/NavLink";
import Head from "next/head";

const MainContainer = ({children, head, keywords}) => {
  return (
    <>
      <Head>
        <meta name="keywords" content={"new site" + keywords}/>
        <title>{head}</title>
      </Head>
      <div className="navbar">
        <NavLink href={'/'} text={"Главная"} />
        <NavLink href={'/users'} text={"Пользователи"} />
      </div>
      <div>{children}</div>
    </>
  )
}

export default MainContainer;

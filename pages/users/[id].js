import {useRouter} from "next/router";
import MainContainer from "../../HOC/MainContainer";

export default ({user}) => {
  const { query } = useRouter();
  return (
    <MainContainer head={user.name} >
      <div>
        <h1>Пользователь с id {query.id}</h1>
        <h3>{user.name}</h3>
      </div>
    </MainContainer>
  )
}

export async function getServerSideProps({params}) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await response.json();
  return {
    props: {user}, // will be passed to the page component as props
  }
}

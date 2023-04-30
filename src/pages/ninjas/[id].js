export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  // if you don't use await, it gives an error, as "response" is currently a promise, not a pure object.
  const paths = data.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });
  // we have to return an array of objects, containing parameters (params) which will be used as the route parameter for that specific object. (the route parameter replaces [id])
  return {
    //return a path, which is an array of objects where each object represents a route
    paths: paths,
    fallback: false,
  };
};

/*
next has to make a separate fetch request 10 times, as there are 10 possible paths.
it uses the getStaticProps function, with a argument called "context". this context refers to the current value of the [id] which has been clicked or reached. using this id, it will generate a fetch/get request, and after getting the data, it will create a HTML webpage and return it
*/
export const getStaticProps = async (context) => {
    
    const res = await fetch('https://jsonplaceholder.typicode.com/users/'+context.params.id);
    //context.params.id --> context refers to the object being returned by the getStaticPaths function, which contains params: ninja.id
    const data = await res.json();

    return{
        props:
        {
            ninja: data
        }
    }


};

const Details = ({ninja}) => {
  return(
    <>
    <h1>Details about {ninja.name} </h1>
    <p>
       <strong> username : {ninja.username} </strong>
       <br />
       city: {ninja.address.city}

    </p>
    
    </>
  )
};

export default Details;

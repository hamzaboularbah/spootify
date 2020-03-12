const Home = () => {
  const loginURL = `${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_API_DOMAIN} : ${process.env.REACT_APP_API_PORT}/login`;
  window.location = loginURL;
  return null;
};

export default Home;

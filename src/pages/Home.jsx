import Sides from "../components/Sides";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

import PropTypes from "prop-types";

function Home({ theme }) {
  return (
    <>
      <Sides theme={theme} />
      <Menu />
      <Footer />
    </>
  );
}

Home.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Home;

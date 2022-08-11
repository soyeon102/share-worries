import Layout from "../components/layout/Layout";
import MainButton from "../components/MainButton";

const Home = () => {
  return (
    <Layout>
      <MainButton writePage={true} text="고민 기록하기" />
      <MainButton listPage={true} text="다른사람 고민 둘러보기" />
    </Layout>
  );
};

export default Home;

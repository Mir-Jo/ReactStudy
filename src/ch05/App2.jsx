function App(props){
  return(
    <Layout
      width={2560}
      height={1440}
      header={
        <Header title="소플의 블로그입니다." />
      }
      footer={
        <Footer />
      }
      />
  );
}
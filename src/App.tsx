import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row $type="vertical">
          <Row $type="horizontal">
            <Heading>The Wild Oasis</Heading>
            <div>
              <Heading>Check in and out</Heading>
              <Button
                $variation="danger"
                $sizes="medium"
                onClick={() => alert("check in")}
              >
                Check in
              </Button>
              <Button
                $variation="primary"
                $sizes="medium"
                onClick={() => alert("check out")}
              >
                Check out
              </Button>
            </div>
          </Row>
          <Row $type="vertical">
            <Heading as="h1">Form</Heading>
            <form>
              <Input type="number" placeholder="Number of guest's" />
              <Input type="number" placeholder="Number of guest's" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;

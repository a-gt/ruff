import FileSidebar from "./FileSidebar";
import Navbar from "./Navbar";
import { Container, Wrapper } from "./LayoutStyles";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <Container>
        <FileSidebar />
        <Wrapper>{children}</Wrapper>
      </Container>
    </div>
  );
}

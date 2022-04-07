import styled from "styled-components";
import Tree from "../FileTree";

const structure = [
  {
    type: "folder",
    name: "rapid",
    open: true,
    children: [
      {
        type: "folder",
        name: "uber",
        open: true,
        children: [
          {
            type: "folder",
            name: "fast",
            open: true,
            children: [{ type: "folder", name: "files", bold: true }],
          },
        ],
      },
    ],
  },
];

const StyledSide = styled.div`
  width: 20vw;
  height: 100%;
  z-index: 1;
`;

export default function FileSidebar() {
  return (
    <StyledSide>
      <Tree data={structure} />
    </StyledSide>
  );
}

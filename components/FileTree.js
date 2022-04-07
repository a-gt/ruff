import { useState } from "react";
import styled from "styled-components";
import { AiOutlineFile, AiOutlineFolder } from "react-icons/ai";
import { DiJavascript1, DiCss3Full, DiHtml5, DiReact } from "react-icons/di";
import { AiOutlineFileImage } from "react-icons/ai";
import { FILE_ICONS } from "../lib/icons";

const StyledTree = styled.div`
  font-size: 1.15rem;
  line-height: 1.5;
`;

const StyledFile = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    margin-left: 5px;
  }
`;

const StyledFolder = styled.div`
  padding-left: 20px;

  .folder--label {
    display: flex;
    align-items: center;
    cursor: pointer;

    span {
      margin-left: 5px;
    }
  }

  .folder--arrow {
    display: flex;
    align-items: center;
    margin-left: -3px;
  }
`;

const StyledArrowSVG = styled.svg`
  transform: rotate(${(p) => (p.isOpen ? 90 : 0)}deg);
  transition: transform 200ms ease-in-out;
`;

const Collapsible = styled.div`
  height: ${(p) => (p.isOpen ? "auto" : "0")};
  overflow: hidden;
`;

const File = ({ name }) => {
  let ext = name.split(".")[1];

  return (
    <StyledFile>
      {FILE_ICONS[ext] || <AiOutlineFile />}
      <span>{name}</span>
    </StyledFile>
  );
};

const Folder = ({ name, children, bold, open }) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <StyledFolder>
      <div className="folder--label" style={bold ? { fontWeight: "bold" } : {}}>
        <div className="folder--arrow" onClick={handleToggle}>
          <StyledArrowSVG
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            version="1.1"
            isOpen={isOpen}
          >
            <path
              d="M10 6l-1.4 1.4 4.6 4.6-4.6 4.6 1.4 1.4 6-6z"
              fill="currentColor"
            />
          </StyledArrowSVG>
        </div>
        <AiOutlineFolder />
        <span>{name}</span>
      </div>
      <Collapsible isOpen={isOpen}>{children}</Collapsible>
    </StyledFolder>
  );
};

const TreeRecursive = ({ data }) => {
  return data.map((item, i) => {
    if (item.type === "folder") {
      return (
        <Folder
          name={item.name}
          key={i}
          bold={item.bold ?? false}
          open={item.open ?? false}
        >
          <TreeRecursive data={item.children ?? []} />
        </Folder>
      );
    }

    return <File name={item.name} key={i} />;
  });
};

const Tree = ({ data, children }) => {
  const isImparative = data && !children;

  return (
    <StyledTree>
      {isImparative ? <TreeRecursive data={data} /> : children}
    </StyledTree>
  );
};

Tree.File = File;
Tree.Folder = Folder;

export default Tree;

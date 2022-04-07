import { useState } from "react";
import styled from "styled-components";
import { AiOutlineFile, AiOutlineFolder } from "react-icons/ai";
import { DiJavascript1, DiCss3Full, DiHtml5, DiReact } from "react-icons/di";
import { AiOutlineFileImage } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import moment from "moment";
import { FILE_ICONS } from "../lib/icons";

function humanFileSize(bytes, si = false, dp = 1) {
  const thresh = si ? 1000 : 1024;

  if (Math.abs(bytes) < thresh) {
    return bytes + " B";
  }

  const units = si
    ? ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
    : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
  let u = -1;
  const r = 10 ** dp;

  do {
    bytes /= thresh;
    ++u;
  } while (
    Math.round(Math.abs(bytes) * r) / r >= thresh &&
    u < units.length - 1
  );

  return bytes.toFixed(dp) + " " + units[u];
}

const Container = styled.div`
  font-size: 1.15rem;
  line-height: 1.15;
  margin: 10px 50px;

  .selected {
    color: #fff;
    background: #0070f3;
    border-color: #0070f3;
    border-radius: 4px !important;

    #checkbox {
      opacity: 1;
    }

    &:hover {
      background: rgba(0, 112, 243, 0.15);
    }
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  padding-right: 10px;

  .label {
    margin-left: 52px;
  }

  .right {
    #size {
      width: 100px;
    }
    span {
      display: inline-block;
      text-align: right;
      padding: 0 8px 16px;
    }
  }

  span {
    opacity: 0.4;
    cursor: pointer;
    transition: all 200ms ease-in-out;
  }

  span:hover {
    color: #0070f3;
    opacity: 1;
  }
`;

const File = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  padding: 7px 10px;
  cursor: pointer;

  .label {
    margin-left: 12px;
  }

  .right {
    #size {
      width: 100px;
    }
    span {
      display: inline-block;
      text-align: right;
      padding: 0 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      transform: translateY(2px);
    }
  }

  transition: all 200ms ease-in-out;

  #checkbox {
    vertical-align: middle;
    transform: translate(-20px, 3px);
    position: absolute;
    z-index: 2;
    background: rgba(0, 112, 243, 0.05);
    border: 1px solid #0070f3;
    border-radius: 4px;
    height: 15px;
    width: 15px;
    opacity: 0;
    transition: all 200ms ease-in-out;
    color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
  }

  .checked {
    color: #0070f3 !important;
    background: #fff !important;
  }

  :hover {
    color: #0070f3;
    background: rgba(0, 112, 243, 0.05);
    border-color: #0070f3;
    border-radius: 4px;

    #checkbox {
      opacity: 1;
    }
  }
`;

const FileIconContainer = styled.span`
  display: inline-block;
  width: 30px;
  transform: translateY(2px);
`;

const FileIcon = ({ name }) => {
  let ext = name.split(".")[1];

  return (
    <FileIconContainer>
      {FILE_ICONS[ext] || <AiOutlineFile />}
    </FileIconContainer>
  );
};

const FolderIcon = () => {
  return (
    <FileIconContainer>
      <AiOutlineFolder />
    </FileIconContainer>
  );
};

const Checkbox = ({ onClick }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    //e.preventDefault();
    setChecked(!checked);
    onClick(e);
  };

  return (
    <span
      id="checkbox"
      className={checked ? "checked" : ""}
      onClick={handleChange}
    >
      <BsCheckLg />
    </span>
  );
};

export default function FileList({ data }) {
  return (
    <Container>
      <Header>
        <span className="label">Name</span>
        <div className="right">
          <span>Last Modified</span>
          <span id="size">Size</span>
        </div>
      </Header>
      {data.map((item, i) => {
        const [selected, setSelected] = useState(false);
        return (
          <File key={i} className={selected ? "selected" : ""}>
            <span className="label">
              <Checkbox
                onClick={() => {
                  setSelected(!selected);
                }}
              />
              {item.type == "folder" ? (
                <FolderIcon />
              ) : (
                <FileIcon name={item.name} />
              )}
              {item.name}
            </span>
            <div className="right">
              <span>{moment(item.modified).fromNow()}</span>
              <span id="size">{humanFileSize(item.size)}</span>
            </div>
          </File>
        );
      })}
    </Container>
  );
}

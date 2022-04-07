import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: stretch;
  flex-direction: row;
  overflow: hidden;
  flex: 0 0 auto;
  order: 1;
  background: #fafafa;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  z-index: 1;

  #flowbar {
    overflow: hidden;
    flex: 1 1 auto;
    order: 2;
    height: 48px;

    #crumbbar {
      overflow: hidden;
      height: 48px;
      font-size: 16px;
      padding: 0 8px;
    }

    #crumbbar a,
    #crumbbar a:active,
    #crumbbar a:visited {
      color: rgba(0, 0, 0, 0.87);
      cursor: pointer;
      text-decoration: none;
    }

    #crumbbar a.active,
    #crumbbar a:active.active,
    #crumbbar a:visited.active {
      font-weight: bold;
    }

    #crumbbar a:hover,
    #crumbbar a:active:hover,
    #crumbbar a:visited:hover {
      color: #0070f3;
      background: rgba(0, 112, 243, 0.05);
    }

    #crumbbar a:focus,
    #crumbbar a:active:focus,
    #crumbbar a:visited:focus {
      outline: 0;
    }

    #crumbbar .crumb {
      transition: all 0.2s ease-in-out;
      display: inline-block;
    }

    #crumbbar .seperator {
      width: 24px;
      height: 24px;
      margin-top: 12px;
      line-height: 48px;
      display: inline-block;
      vertical-align: top;
    }

    #crumbbar .crumb:first-of-type .seperator {
      width: 0;
    }

    #crumbbar .label {
      line-height: 48px;
      display: inline-block;
      vertical-align: top;
      padding: 0 8px;
    }

    #crumbbar .hint {
      width: 20px;
      height: 20px;
      padding: 16px 0 0 0;
      line-height: 48px;
      display: inline-block;
      vertical-align: top;
      position: relative;
      top: -2px;
    }
  }

  #backlink {
    transition: all 0.2s ease-in-out;
    display: block;
    flex: 0 0 auto;
    order: 99;
    text-align: center;
    padding: 6px 12px;
    height: 48px;
  }

  #backlink,
  #backlink:active,
  #backlink:visited {
    color: rgba(0, 0, 0, 0.26);
    cursor: pointer;
    text-decoration: none;
  }

  #backlink:hover {
    color: #0070f3;
    background: rgba(0, 112, 243, 0.05);
  }

  #backlink:focus {
    outline: 0;
  }

  #backlink div {
    line-height: 18px;
    white-space: nowrap;
  }
`;

export default function Navbar() {
  return (
    <StyledNav>
      <div id="sidebar-toggle" className="tool"></div>
      <div id="download" className="tool hidden"></div>
      <div id="search" className="tool"></div>
      <div id="flowbar">
        <div id="crumbbar">
          <a className="crumb" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              heigth="24"
              className="seperator"
            >
              <path
                d="M10 6l-1.4 1.4 4.6 4.6-4.6 4.6 1.4 1.4 6-6z"
                fill="currentColor"
              />
            </svg>
            <span className="label">rapid</span>
          </a>
          <a className="crumb" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              heigth="24"
              className="seperator"
            >
              <path
                d="M10 6l-1.4 1.4 4.6 4.6-4.6 4.6 1.4 1.4 6-6z"
                fill="currentColor"
              />
            </svg>
            <span className="label">uber</span>
          </a>
          <a className="crumb" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              heigth="24"
              className="seperator"
            >
              <path
                d="M10 6l-1.4 1.4 4.6 4.6-4.6 4.6 1.4 1.4 6-6z"
                fill="currentColor"
              />
            </svg>
            <span className="label">fast</span>
          </a>
          <a className="crumb" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              heigth="24"
              className="seperator"
            >
              <path
                d="M10 6l-1.4 1.4 4.6 4.6-4.6 4.6 1.4 1.4 6-6z"
                fill="currentColor"
              />
            </svg>
            <span className="label active">files</span>
          </a>
        </div>
      </div>

      <a id="backlink" href="/" title="powered by ruff">
        <div>powered</div>
        <div>by ruff</div>
      </a>
    </StyledNav>
  );
}

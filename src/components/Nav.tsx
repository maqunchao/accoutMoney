import styled from "styled-components";
import { Link } from "react-router-dom";
import Icon from "./Icon";

//treeShaking 不适用于require

const NavWrapper = styled.nav`
  /* border: 1px solid blue; */
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
    display: flex;
    flex-direction: row;
    align-items: center;

    > li {
      width: 33.3333%;
      text-align: center;
      > a {
        display: flex;
        flex-direction: column;
        padding: 4px 0;
        align-items: center;
        .icon {
          width: 22px;
          height: 22px;
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/tags">
            <Icon name="tag" />
            标签页
          </Link>
        </li>
        <li>
          <Link to="/money">
            <Icon name="money" />
            记账页
          </Link>
        </li>
        <li>
          <Link to="/statistics">
            <Icon name="chart" />
            统计页
          </Link>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;

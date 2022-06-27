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
    /* flex-direction: row; */

    > li {
      width: 33.3333%;
      text-align: center;
      padding: 4px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon {
        width: 22px;
        height: 22px;
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Icon name="tag" />
          <Link to="/tags">标签页</Link>
        </li>
        <li>
          <Icon name="money" />

          <Link to="/money">记账页</Link>
        </li>
        <li>
          <Icon name="chart" />

          <Link to="/statistics">统计页</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;

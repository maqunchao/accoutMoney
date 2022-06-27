import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
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
        &.selected{
          color:red;
          .icon{
            fill:red;
          }
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
          <NavLink 
            to="/tags"
            className={({ isActive }) => (isActive ? 'selected' : 'unselected')}

          >
            <Icon name="tag" />
            标签页1
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/money"
            className={({ isActive }) => (isActive ? 'selected' : 'unselected')}
          >
            <Icon name="money" />
            记账页
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/statistics"
            className={({ isActive }) => (isActive ? 'selected' : 'unselected')}
          >
            <Icon name="chart" />
            统计页
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;

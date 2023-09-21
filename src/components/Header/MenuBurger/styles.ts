import styled from 'styled-components';

export const MenuBurger = styled.label`
  position: relative;
  width: 2.5rem;
  height: 1.875rem;
  background: transparent;
  display: block;
  cursor: pointer;

  & input {
    display: none;
  }

  & span {
    display: block;
    position: absolute;
    height: 0.25rem;
    width: 100%;
    background: var(--dark);
    border-radius: 0.5rem;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }

  & span:nth-of-type(1) {
    top: 0px;
    transform-origin: left center;
  }

  & span:nth-of-type(2) {
    top: 50%;
    transform: translateY(-50%);
    transform-origin: left center;
  }

  & span:nth-of-type(3) {
    top: 100%;
    transform-origin: left center;
    transform: translateY(-100%);
  }

  & input:checked ~ span:nth-of-type(1) {
    transform: rotate(45deg);
    top: 0px;
    left: 0.3125rem;
  }

  & input:checked ~ span:nth-of-type(2) {
    width: 0%;
    opacity: 0;
  }

  & input:checked ~ span:nth-of-type(3) {
    transform: rotate(-45deg);
    top: 1.75rem;
    left: 0.3125rem;
  }
`;

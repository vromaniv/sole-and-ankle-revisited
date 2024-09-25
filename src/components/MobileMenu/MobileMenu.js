import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <StyledDialogOverlay isOpen={isOpen} onDismiss={onDismiss}>
      <StyledDialogContent>
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </StyledDialogContent>
    </StyledDialogOverlay>
  );
};

const StyledDialogOverlay = styled(DialogOverlay)`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background: var(--background-dialog-overlay);
`;

const StyledDialogContent = styled(DialogContent)`
  position: absolute;
  right: 0;
  height: 100%;
  width: 300px;
  max-width: 100%;
  background: #fff;
  padding: 26px 16px 32px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Footer = styled(Nav)`
  gap: 14px;
`;

const FooterLink = styled.a`
  font-size: 0.875rem;
  text-decoration: none;
  color: var(--color-gray-700);
`;

export default MobileMenu;

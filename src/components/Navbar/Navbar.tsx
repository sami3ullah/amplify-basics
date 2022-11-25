import React from "react";
import { Navbar, Dropdown, Avatar } from "flowbite-react";

const Nav = () => {
  return (
    <Navbar fluid={true} rounded={true} className="bg-secondary">
      <Navbar.Brand href="/">
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Prognosus
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          className="bg-darkgrey"
          arrowIcon={false}
          inline={true}
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded={true}
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie secondary</span>
            <span className="block text-sm font-medium truncate">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;

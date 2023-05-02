import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";

export const Header_Navbar = () => {
  const collapseItems = [
    "Home",
    "Servicios",
    "Profesionales"
  ];

  return (

    <Navbar variant="sticky" disableShadow css={{
      $$navbarBackgroundColor: "transparent",
      $$navbarBlurBackgroundColor: "transparent"
    }}>
      <Navbar.Toggle showIn="xs"/>
      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        {/*<AcmeLogo />*/}
        <Text b color="inherit" hideIn="xs">
          Mauvet
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="primary"
        hideIn="xs"
        variant="underline"
      >
        <Navbar.Link isActive href="#home">Home</Navbar.Link>
        <Navbar.Link href="#servicios">
          Servicios
        </Navbar.Link>
        <Navbar.Link href="#">Profesionales</Navbar.Link>
        <Navbar.Link href="#">Company</Navbar.Link>
      </Navbar.Content>
      <Navbar.Collapse >
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem
            key={item}
            activeColor="warning"
            css={{
              color: index === collapseItems.length - 1 ? "$primary" : "",
            }}
            isActive={index === 2}
          >
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href={`#${item.toLowerCase()}`}
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  )
}
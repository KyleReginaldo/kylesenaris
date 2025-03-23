import { AppShell, Navbar, Header } from "@mantine/core";
import { HeaderMenu } from "./HeaderMenu";
import { FooterMenu } from "./FooterMenu";

export default function AppShellMain({
  children,
}: {
  children: React.ReactNode;
}) {
  // Navbar and Header will not be rendered when hidden prop is set
  return (
    <AppShell
      padding={0}
      footer={<FooterMenu />}
      header={
        <HeaderMenu
          links={[
            {
              link: "#overview",
              label: "Overview",
            },
            {
              link: "#stacks",
              label: "Tech Stacks",
            },
            {
              link: "#testimonials",
              label: "Testimonials",
            },
            {
              link: "#experience",
              label: "Experience",
            },
            {
              link: "#showcase",
              label: "Showcase",
              special: true,
            },
            // {
            //   link: "#testimonials",
            //   label: "Testimonials",
            // },
          ]}
        />
      }
    >
      {children}
    </AppShell>
  );
}

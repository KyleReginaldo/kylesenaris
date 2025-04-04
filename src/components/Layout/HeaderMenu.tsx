import {
  Burger,
  Container,
  createStyles,
  Flex,
  Group,
  Header,
  Paper,
  rem,
  Text,
  Transition,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ToggleTheme } from "../Buttons/ToggleTheme";

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

interface HeaderResponsiveProps {
  links: { link: string; label: string; special?: boolean }[];
}

export function HeaderMenu({ links }: HeaderResponsiveProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const router = useRouter();
  useEffect(() => {
    setActive(router.asPath.replace("/", ""));
  }, []);

  const items = links.map((link) =>
    link.special ? (
      <a
        key={link.label}
        href={link.link}
        className={cx(classes.link)}
        onClick={(event) => {
          setActive(link.link);
          close();
        }}
      >
        {link.label}
      </a>
    ) : (
      <a
        key={link.label}
        href={link.link}
        className={cx(classes.link)}
        onClick={(event) => {
          setActive(link.link);
          close();
        }}
      >
        {link.label}
      </a>
    )
  );

  return (
    <Header height={HEADER_HEIGHT}>
      <Container className={classes.header}>
        <Group>
          <ToggleTheme />
          <Flex justify="center" direction={"column"}>
            <Text weight={"bold"}>Kyle Reginaldo</Text>
            {/* <Text size={"xs"}>as a Software Engineer</Text> */}
          </Flex>
        </Group>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}

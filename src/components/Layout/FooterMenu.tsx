import {
  ActionIcon,
  Container,
  createStyles,
  Flex,
  Group,
  rem,
  Text,
} from "@mantine/core";
import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";
import Link from "next/link";
import { ToggleTheme } from "../Buttons/ToggleTheme";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function FooterMenu() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group>
          <ToggleTheme />
          <Flex justify="center" direction={"column"}>
            <Text weight={"bold"}>Kyle Reginaldo</Text>
            {/* <Text size={"xs"}>as a Software Engineer</Text> */}
          </Flex>
        </Group>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon
            size="lg"
            component={Link}
            target="_blank"
            href="https://www.instagram.com/emeriiiie_/"
          >
            <IconBrandInstagram size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            component={Link}
            target="_blank"
            href="https://www.facebook.com/kyle.reginaldo.94"
          >
            <IconBrandFacebook size="1.05rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}

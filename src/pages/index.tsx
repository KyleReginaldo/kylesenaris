import {
  BackgroundImage,
  Badge,
  Blockquote,
  Box,
  Button,
  Container,
  createStyles,
  Divider,
  Flex,
  Grid,
  Group,
  Image,
  rem,
  Space,
  Tabs,
  Text,
  Timeline,
  Title,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { IconGitBranch, IconGitCommit } from "@tabler/icons-react";
import Head from "next/head";

import { useMediaQuery } from "@mantine/hooks";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
const useStyles = createStyles((theme) => ({
  fadeOut: {
    background:
      "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(26, 27, 30, 1))",
  },
  leftGradient: {
    position: "absolute",
    zIndex: 10,
    left: 0,
    top: 0,
    bottom: 0,

    background:
      theme.colorScheme === "dark"
        ? "linear-gradient(90deg, rgba(26,27,30,1) 0%, rgba(26,27,30,1) 52%, rgba(26,27,30,0) 100%)"
        : "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 52%, rgba(255,255,255,0) 100%)",
  },

  rightGradient: {
    position: "absolute",
    zIndex: 10,
    right: 0,
    top: 0,
    bottom: 0,

    background:
      theme.colorScheme === "dark"
        ? "linear-gradient(270deg, rgba(26,27,30,1) 0%, rgba(26,27,30,1) 52%, rgba(26,27,30,0) 100%)"
        : "linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 52%, rgba(255,255,255,0) 100%)",
  },

  bottomGradient: {
    position: "absolute",
    zIndex: 10,
    bottom: 0,
    left: 0,
    right: 0,
    background:
      theme.colorScheme === "dark"
        ? "linear-gradient(0deg, rgba(26,27,30,1) 0%, rgba(26,27,30,1) 52%, rgba(26,27,30,0) 100%)"
        : "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 52%, rgba(255,255,255,0) 100%)",
  },
  slideItem: {
    "&:hover": {
      // boxShadow: theme.shadows.md,
      transform: "scale(1.05)",
      cursor: "pointer",
    },
  },
  item: {
    display: "flex",
    dataAos: "flip-left",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: theme.radius.md,
    height: rem(90),
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease, transform 100ms ease",

    "&:hover": {
      // boxShadow: theme.shadows.md,
      transform: "scale(1.05)",
    },
  },
}));

//Projects Showcase
const slide1 = [
  { name: "Github", imageLink: "/assets/mockup/washup1.png" },
  { name: "Postman", imageLink: "/assets/mockup/washup2.png" },
  { name: "Figma", imageLink: "/assets/mockup/washup3.png" },
];

const slide2 = [{ name: "VSCode", imageLink: "/assets/mockup/cleanup1.png" }];

const slide3 = [
  { name: "Github", imageLink: "/assets/mockup/attendance1.png" },
  { name: "Postman", imageLink: "/assets/mockup/attendance2.png" },
  { name: "Figma", imageLink: "/assets/mockup/altswitch1.png" },
  { name: "VSCode", imageLink: "/assets/mockup/altswitch2.png" },
];

// Stacks
const frameworks = [
  { name: "Flutter", imageLink: "/assets/stacks/flutter.png" },
  { name: "Nestjs", imageLink: "/assets/stacks/nest.png" },
];

const services = [
  { name: "Supabase", imageLink: "/assets/stacks/supabase.png" },
  { name: "Firebase", imageLink: "/assets/stacks/firebase.png" },
  { name: "SendGrid", imageLink: "/assets/stacks/sendgrid.png" },
  { name: "Twilio", imageLink: "/assets/stacks/twilio.png" },
  { name: "Stripe", imageLink: "/assets/stacks/stripe.png" },
];

const tools = [
  { name: "Github", imageLink: "/assets/stacks/git.png" },
  { name: "Docker", imageLink: "/assets/stacks/docker.png" },
  { name: "Cloud Run", imageLink: "/assets/stacks/cloudrun.png" },
  { name: "Postman", imageLink: "/assets/stacks/postman.png" },
  { name: "Figma", imageLink: "/assets/stacks/figma.png" },
  { name: "VSCode", imageLink: "/assets/stacks/vscode.png" },
];

const languages = [
  { name: "Typescript", imageLink: "/assets/stacks/ts.png" },
  { name: "Javascript", imageLink: "/assets/stacks/js.png" },
  { name: "Python", imageLink: "/assets/stacks/py.png" },
  { name: "Dart", imageLink: "/assets/stacks/dart.png" },
];

export default function Home() {
  const router = useRouter();
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const theme = useMantineTheme();
  const [checked, setChecked] = useState(false);
  const { classes } = useStyles();
  const largeScreen = useMediaQuery("(min-width: 62em)");
  return (
    <>
      <Head>
        <title>Kyle Reginaldo</title>
        <meta name="description" content="Kyle Reginaldo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" color="red" />
      </Head>

      {/* <div id="comment-section">
        <CommentCard
          postedAt={""}
          body={""}
          author={{
            name: "",
            image: "",
          }}
        />
      </div> */}

      <BackgroundImage
        sx={{ position: "relative" }}
        src={
          theme.colorScheme === "dark"
            ? "assets/bg/dark.jpg"
            : "assets/bg/light.jpg"
        }
        radius="sm"
      >
        <Container size={"md"}>
          <div id="overview">
            <Grid justify="space-between" align="center" h={{ md: "100vh" }}>
              <Grid.Col span={"auto"}>
                <Flex
                  direction={"column"}
                  align={"start"}
                  data-aos="fade-right"
                >
                  <Title order={6} color="red">
                    Introduction
                  </Title>
                  <Space h={10} />
                  <Title>Kyle Reginaldo</Title>
                  <Space h={10} />
                  <Text>
                    👋 Hello, I'm Kyle, a developer expert at creating mobile
                    apps using Flutter and building backends with NestJS. My
                    expertise extends to navigating Firebase, Supabase, and
                    Google Cloud Platform (GCP). Explore Kyle Reginaldo to see
                    how I seamlessly integrate mobile and backend solutions for
                    a comprehensive digital experience.
                  </Text>
                  <Space h={10} />
                  <Flex gap={10}>
                    {" "}
                    <Button
                      component="a"
                      variant="outline"
                      color="red"
                      href="https://www.facebook.com/kyle.reginaldo.94"
                      target="_blank"
                    >
                      Contact Me
                    </Button>{" "}
                    <Button
                      component="a"
                      color="red"
                      href="kylesenaris.pdf"
                      download
                    >
                      Download CV
                    </Button>
                  </Flex>
                </Flex>
              </Grid.Col>
              <Grid.Col span={12} md={6} style={{ minHeight: rem(120) }}>
                <Flex direction={"column"} align={"end"} data-aos="fade-left">
                  {/* <Image
                    src={"assets/intro_right_pic_2.png"}
                    alt={"Developer"}
                    width={"50vh"}
                  /> */}
                  {/* <Space h={10} /> */}
                  {/* <Blockquote
                    data-aos="zoom-in"
                    color="red"
                    cite="– Matthew Reilly"
                  >
                    <Text size={"sm"}>
                    We didn't come this far just to come this far
                    </Text>
                  </Blockquote> */}
                </Flex>
              </Grid.Col>
            </Grid>
          </div>
        </Container>
        <Box
          h={{ base: "3%", md: "10%" }}
          className={classes.bottomGradient}
        ></Box>
        {/* <Box w={"10%"} className={classes.rightGradient}></Box> */}
      </BackgroundImage>

      <div id="stacks">
        <Container size={"md"} mt={{ base: 50, md: 0 }}>
          <Flex
            direction={"column"}
            h={{ md: "100vh" }}
            justify={"start"}
            data-aos="fade-right"
          >
            <Flex justify={"space-between"}>
              <Title>Tech Stacks</Title>
              {/* <Flex direction={"column"} align={"end"}>
                <Switch
                  checked={checked}
                  onChange={(event) => setChecked(event.currentTarget.checked)}
                  onLabel="Scroll"
                  offLabel="No Scroll"
                />
              </Flex> */}
            </Flex>
            <Space h={10} />
            <Text>
              Here are my technical stacks from my two years working in the
              Philippines as a software engineer. I keep learning from others
              and adjusting to new technologies.
            </Text>
            <Space h={10} />
            {/* {checked && (
              <div className={classes.fadeOut}>
                <Splide
                  options={{
                    type: "loop",
                    gap: "10px",
                    drag: false,
                    arrows: false,
                    direction: "rtl",
                    pagination: false,
                    perPage: 5,
                    pauseOnHover: true,
                    pauseOnFocus: true,
                    autoScroll: {
                      pauseOnHover: true,
                      pauseOnFocus: true,
                      rewind: false,
                      speed: 1,
                    },
                  }}
                  extensions={{ AutoScroll }}
                >
                  {frameworks.map((item) => (
                    <SplideSlide>
                      <Image
                        data-aos="zoom-in"
                        src={item.imageLink}
                        width={"4em"}
                        height={"4rem"}
                      />
                    </SplideSlide>
                  ))}
                </Splide>{" "}
                <Space h={10} />
                <Splide
                  options={{
                    type: "loop",
                    gap: "10px",
                    drag: false,
                    arrows: false,
                    pagination: false,
                    perPage: 5,
                    pauseOnHover: true,
                    pauseOnFocus: true,
                    autoScroll: {
                      pauseOnHover: true,
                      pauseOnFocus: true,
                      rewind: false,
                      speed: 1,
                    },
                  }}
                  extensions={{ AutoScroll }}
                >
                  {tools.concat(services).map((item) => (
                    <SplideSlide>
                      <Image
                        data-aos="zoom-in"
                        src={item.imageLink}
                        width={"4em"}
                        height={"4rem"}
                      />
                    </SplideSlide>
                  ))}
                </Splide>{" "}
                <Space h={10} />
                <Splide
                  options={{
                    type: "loop",
                    gap: "10px",
                    drag: false,
                    arrows: false,
                    direction: "rtl",
                    pagination: false,
                    perPage: 5,
                    pauseOnHover: true,
                    pauseOnFocus: true,
                    autoScroll: {
                      pauseOnHover: true,
                      pauseOnFocus: true,
                      rewind: false,
                      speed: 1,
                    },
                  }}
                  extensions={{ AutoScroll }}
                >
                  {languages.map((item) => (
                    <SplideSlide>
                      <Image
                        data-aos="zoom-in"
                        src={item.imageLink}
                        width={"4em"}
                        height={"4rem"}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
            )} */}
            <Tabs defaultValue="all">
              <Tabs.List>
                <Tabs.Tab
                  rightSection={
                    <Badge
                      w={16}
                      h={16}
                      sx={{ pointerEvents: "none" }}
                      variant="filled"
                      size="xs"
                      color="red"
                      p={0}
                    >
                      {
                        [...frameworks, ...languages, ...tools, ...services]
                          .length
                      }
                    </Badge>
                  }
                  value="all"
                >
                  All
                </Tabs.Tab>
                <Tabs.Tab
                  rightSection={
                    <Badge
                      w={16}
                      h={16}
                      color="red"
                      sx={{ pointerEvents: "none" }}
                      variant="filled"
                      size="xs"
                      p={0}
                    >
                      {frameworks.length}
                    </Badge>
                  }
                  value="frameworks"
                >
                  Frameworks
                </Tabs.Tab>
                <Tabs.Tab
                  rightSection={
                    <Badge
                      w={16}
                      h={16}
                      color="red"
                      sx={{ pointerEvents: "none" }}
                      variant="filled"
                      size="xs"
                      p={0}
                    >
                      {languages.length}
                    </Badge>
                  }
                  value="languages"
                >
                  Languages
                </Tabs.Tab>
                <Tabs.Tab
                  rightSection={
                    <Badge
                      w={16}
                      h={16}
                      color="red"
                      sx={{ pointerEvents: "none" }}
                      variant="filled"
                      size="xs"
                      p={0}
                    >
                      {tools.length}
                    </Badge>
                  }
                  value="tools"
                >
                  Tools
                </Tabs.Tab>
                <Tabs.Tab
                  rightSection={
                    <Badge
                      w={16}
                      h={16}
                      color="red"
                      sx={{ pointerEvents: "none" }}
                      variant="filled"
                      size="xs"
                      p={0}
                    >
                      {services.length}
                    </Badge>
                  }
                  value="services"
                >
                  Services
                </Tabs.Tab>
              </Tabs.List>
              <Tabs.Panel value="all">
                <Group
                  spacing={20}
                  mt={20}
                  position={largeScreen ? "left" : "center"}
                >
                  {[...frameworks, ...languages, ...tools, ...services].map(
                    (item) => (
                      <UnstyledButton
                        key={item.name}
                        className={classes.item}
                        px={15}
                      >
                        <Image
                          data-aos="zoom-in"
                          src={item.imageLink}
                          width={"4em"}
                          height={"4rem"}
                        />
                        <Text size="sm" mt={7} data-aos="zoom-in">
                          {item.name}
                        </Text>
                      </UnstyledButton>
                    )
                  )}
                </Group>
              </Tabs.Panel>
              <Tabs.Panel value="frameworks">
                <Group mt={20} position={largeScreen ? "left" : "center"}>
                  {frameworks.map((item) => (
                    <UnstyledButton
                      key={item.name}
                      className={classes.item}
                      px={15}
                    >
                      <Image
                        data-aos="zoom-in"
                        src={item.imageLink}
                        width={"4em"}
                        height={"4rem"}
                      />
                      <Text size="xs" mt={7} data-aos="zoom-in">
                        {item.name}
                      </Text>
                    </UnstyledButton>
                  ))}
                </Group>
              </Tabs.Panel>
              <Tabs.Panel value="languages">
                <Group mt={20} position={largeScreen ? "left" : "center"}>
                  {languages.map((item) => (
                    <UnstyledButton
                      key={item.name}
                      className={classes.item}
                      px={15}
                    >
                      <Image
                        data-aos="zoom-in"
                        src={item.imageLink}
                        width={"4em"}
                        height={"4rem"}
                      />
                      <Text size="xs" mt={7} data-aos="zoom-in">
                        {item.name}
                      </Text>
                    </UnstyledButton>
                  ))}
                </Group>
              </Tabs.Panel>
              <Tabs.Panel value="tools">
                <Group mt={20} position={largeScreen ? "left" : "center"}>
                  {tools.map((item) => (
                    <UnstyledButton
                      key={item.name}
                      className={classes.item}
                      px={15}
                    >
                      <Image
                        data-aos="zoom-in"
                        src={item.imageLink}
                        width={"4em"}
                        height={"4rem"}
                      />
                      <Text size="xs" mt={7} data-aos="zoom-in">
                        {item.name}
                      </Text>
                    </UnstyledButton>
                  ))}
                </Group>
              </Tabs.Panel>
              <Tabs.Panel value="services">
                <Group mt={20} position={largeScreen ? "left" : "center"}>
                  {services.map((item) => (
                    <UnstyledButton
                      key={item.name}
                      className={classes.item}
                      px={15}
                    >
                      <Image
                        data-aos="zoom-in"
                        src={item.imageLink}
                        width={"4em"}
                        height={"4rem"}
                      />
                      <Text size="xs" mt={7} data-aos="zoom-in">
                        {item.name}
                      </Text>
                    </UnstyledButton>
                  ))}
                </Group>
              </Tabs.Panel>
            </Tabs>
          </Flex>
        </Container>
      </div>

      <div id="testimonials">
        <Container size={"md"} mt={{ base: 50, md: 0 }}>
          <Flex direction={"column"} justify={"start"} data-aos="fade-right">
            <Title>Testimonials</Title>
            <Space h={10} />
            <Text>
              Here are the testimonials from my previous colleagues and clients.
              with the Big Company Owners and Experts in the field of Software
              Engineering.
            </Text>
            <Space h={10} />
            <Grid>
              <Grid.Col span={12} sm={6} md={4}>
                <Blockquote
                  data-aos="zoom-in"
                  cite="– Kathlyn Jordan | UI/UX Designer"
                  color="red"
                >
                  As a freelance UI/UX designer,{" "}
                  <Text color="red" span weight={"bold"}>
                    Kyle
                  </Text>{" "}
                  has been an invaluable resource for me. He helped me to
                  generate new ideas and explore different design options with
                  my clients.
                </Blockquote>
              </Grid.Col>
              <Grid.Col span={12} sm={6} md={4}>
                <Blockquote
                  data-aos="zoom-in"
                  cite="– Karl Reginaldo | Full Stack Developer"
                  color="red"
                >
                  Introducing my little brother to Flutter and sharing some
                  essential techniques with him has been a rewarding experience.
                  It's been a pleasure to see his growth in mobile app
                  development, and I'm proud to have been a part of his learning
                  journey. His dedication and progress are truly commendable.
                </Blockquote>
              </Grid.Col>
              <Grid.Col span={12} sm={6} md={4}>
                <Blockquote
                  data-aos="zoom-in"
                  cite="– Jannray Mostajo | Mobile App Developer"
                  color="red"
                >
                  <Text color="red" span weight={"bold"}>
                    Kyle
                  </Text>{" "}
                  has been a great help in building mobile apps and teaching me
                  important developer skills. His commitment to on-time project
                  delivery and attention to detail make him a strong candidate
                  for a project manager role.
                </Blockquote>
              </Grid.Col>
              <Grid.Col span={12} sm={6} md={4}>
                <Blockquote
                  data-aos="zoom-in"
                  cite="– Kimberly Bay | Graphic Designer"
                  color="red"
                >
                  In terms of his thinking, Sir{" "}
                  <Text color="red" span weight={"bold"}>
                    kyle
                  </Text>{" "}
                  is quite imaginative. He explains his concept to me using
                  examples from the actual world so that I will know what to
                  design.
                </Blockquote>
              </Grid.Col>
            </Grid>
          </Flex>
        </Container>
      </div>
      <div id="experience">
        <Container size={"md"} mt={{ base: 50, md: 0 }}>
          <Flex direction={"column"} justify={"start"} data-aos="fade-right">
            <Title>Experience</Title>
            <Space h={10} />
            <Text>
              Here is my timeline presenting experience over the past two years.
              Since I was 19, my developer journey has been productive. My prior
              job and coworkers have taught me a lot and given me a lot of
              experience.
            </Text>
            <Divider my={10} label="Professional Experience" />
            <Timeline
              active={4}
              bulletSize={24}
              lineWidth={2}
              w={{ md: "50%" }}
              color="red"
            >
              <Timeline.Item
                data-aos="fade-left"
                bullet={<IconGitBranch size={12} />}
                title="Celebreak"
              >
                <Text color="dimmed" size="sm">
                  using Flutter, I developed a mobile app.
                </Text>
                <Text size="xs" mt={4}>
                  Full-time · less than 1 year experience
                </Text>
                <Text size="xs" mt={4}>
                  Barcelona, Spain
                </Text>
                <Group mt={4}>
                  <Badge size="xs" color="red">
                    Mobile App
                  </Badge>
                </Group>
              </Timeline.Item>

              <Timeline.Item
                data-aos="fade-right"
                bulletSize={18}
                bullet={<IconGitCommit size={12} />}
                title="Software Engineer"
                lineVariant="dashed"
              >
                <Text size="xs" mt={4}>
                  June 2023 - Feb 2024
                </Text>
              </Timeline.Item>

              <Timeline.Item
                data-aos="fade-left"
                bulletSize={18}
                bullet={<IconGitCommit size={12} />}
                title="Flutter Developer"
              >
                <Text size="xs" mt={4}>
                  June 2023 - Feb 2024
                </Text>
              </Timeline.Item>

              <Timeline.Item
                data-aos="fade-right"
                bullet={<IconGitBranch size={12} />}
                title="Avyan Global | Avyan Holdings"
              >
                <Text color="dimmed" size="sm">
                  as a Mobile Developer, I developed a mobile app using Flutter
                  for their clients.
                </Text>
                <Text size="xs" mt={4}>
                  Part-time · 3 months exp
                </Text>
                <Text size="xs" mt={4}>
                  Pasig City, Philippines
                </Text>
                <Group mt={4}>
                  <Badge size="xs" color="red">
                    Mobile App
                  </Badge>
                </Group>
              </Timeline.Item>
            </Timeline>
            <Divider
              my={10}
              label="Freelance Experience"
              labelPosition="right"
              data-aos="fade-left"
            />
            <Flex justify={"end"}>
              <Timeline
                align="right"
                active={10}
                bulletSize={24}
                lineWidth={2}
                w={{ md: "50%" }}
                color="red"
              >
                <Timeline.Item
                  data-aos="fade-left"
                  bullet={<IconGitBranch size={12} />}
                  title="Crypto App"
                >
                  <Text color="dimmed" size="sm">
                    I was given the opportunity to create a blockchain-based
                    mobile app by Avyan Global. I gained a better understanding
                    of blockchain through this endeavor.
                  </Text>
                  <Text size="xs" mt={4}>
                    1 & 1/2 months
                  </Text>
                  <Group mt={4} position="right">
                    <Badge size="xs" color="red">
                      Blockchain
                    </Badge>
                    <Badge size="xs" color="red">
                      Figma
                    </Badge>
                    <Badge size="xs" color="red">
                      NodeJS
                    </Badge>
                    <Badge size="xs" color="red">
                      Biometrics
                    </Badge>
                    <Badge size="xs" color="red">
                      Flutter
                    </Badge>
                    <Badge size="xs" color="red">
                      Asana
                    </Badge>
                    <Badge size="xs" color="red">
                      Android and iOS
                    </Badge>
                  </Group>
                </Timeline.Item>
                <Timeline.Item
                  data-aos="fade-left"
                  bullet={<IconGitBranch size={12} />}
                  title="Attendance Management App"
                >
                  <Text color="dimmed" size="sm">
                    This app is for students who are enrolled in a particular
                    school. They may use this app to check their attendance and
                    see how many times they have been absent.
                  </Text>
                  <Text size="xs" mt={4}>
                    1 month exp
                  </Text>
                  <Group mt={4} position="right">
                    <Badge size="xs" color="red">
                      Mobile App
                    </Badge>
                    <Badge size="xs" color="red">
                      Flutter
                    </Badge>
                    <Badge size="xs" color="red">
                      Android Only
                    </Badge>
                  </Group>
                </Timeline.Item>
                <Timeline.Item
                  data-aos="fade-right"
                  bullet={<IconGitBranch size={12} />}
                  title="Booking App"
                >
                  <Text color="dimmed" size="sm">
                    Using this app, you may schedule laundry service for your
                    clothes. You may also track the status of your laundry
                    through this app.
                  </Text>
                  <Text size="xs" mt={4}>
                    2 months exp
                  </Text>
                  <Group mt={4} position="right">
                    <Badge size="xs" color="red">
                      Firebase
                    </Badge>
                    <Badge size="xs" color="red">
                      Figma
                    </Badge>
                    <Badge size="xs" color="red">
                      Android and iOS
                    </Badge>
                    <Badge size="xs" color="red">
                      Flutter
                    </Badge>
                  </Group>
                </Timeline.Item>
              </Timeline>
            </Flex>
          </Flex>
        </Container>
      </div>

      <div id="showcase">
        <Container size={"md"} mt={{ base: 50, md: 0 }}>
          <Flex direction={"column"} justify={"start"} data-aos="fade-right">
            <Title>Showcase</Title>
            <Space h={10} />
            <Text>These are all the projects I've worked on since 2022.</Text>
            <Divider my={10} label="Professional Experience" />
            <Box w={"100%"} sx={{ position: "relative" }}>
              <Splide
                options={{
                  type: "loop",
                  gap: "10px",
                  drag: "free",
                  arrows: false,
                  pagination: false,
                  pauseOnHover: true,
                  pauseOnFocus: true,
                  perPage: 3,
                  autoScroll: {
                    pauseOnHover: true,
                    pauseOnFocus: true,
                    rewind: false,
                    speed: 1,
                  },
                }}
                extensions={{ AutoScroll }}
              >
                {slide1.map((item) => (
                  <SplideSlide>
                    <Image
                      className={classes.slideItem}
                      src={item.imageLink}
                      alt={item.name}
                      height={150}
                      width={150}
                    />
                  </SplideSlide>
                ))}
              </Splide>
              <Space h={20} />
              <Splide
                options={{
                  type: "loop",
                  gap: "10px",
                  drag: "free",
                  direction: "rtl",
                  arrows: false,
                  pagination: false,
                  pauseOnHover: true,
                  pauseOnFocus: true,
                  perPage: 3,
                  autoScroll: {
                    pauseOnHover: true,
                    pauseOnFocus: true,
                    rewind: false,
                    speed: 1,
                  },
                }}
                extensions={{ AutoScroll }}
              >
                {slide2.map((item) => (
                  <SplideSlide>
                    <Image
                      className={classes.slideItem}
                      src={item.imageLink}
                      alt={item.name}
                      height={150}
                      width={150}
                    />
                  </SplideSlide>
                ))}
              </Splide>
              <Space h={20} />
              <Splide
                options={{
                  type: "loop",
                  gap: "10px",
                  drag: "free",
                  arrows: false,
                  pagination: false,
                  pauseOnHover: true,
                  pauseOnFocus: true,
                  perPage: 3,
                  autoScroll: {
                    pauseOnHover: true,
                    pauseOnFocus: true,
                    rewind: false,
                    speed: 1,
                  },
                }}
                extensions={{ AutoScroll }}
              >
                {slide3.map((item) => (
                  <SplideSlide>
                    <Image
                      className={classes.slideItem}
                      src={item.imageLink}
                      alt={item.name}
                      height={150}
                      width={150}
                    />
                  </SplideSlide>
                ))}
              </Splide>
              <Box w={"10%"} className={classes.leftGradient}></Box>
              <Box w={"10%"} className={classes.rightGradient}></Box>
            </Box>
          </Flex>
        </Container>
      </div>
    </>
  );
}

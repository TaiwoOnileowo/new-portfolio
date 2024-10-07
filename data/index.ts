import paypips from "@/assets/paypips.png";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "With every project, I push my work to new horizons, always putting quality first",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm open to remote work from all over the world",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Up-to-date with the latest technologies and trends.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Skilled and creative Frontend Developer.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working on a chrome extension",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/learnactbent.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "3D Merch Picker",
    des: "A 3D merch picker that allows users to view and come up with a merch in a 3D environment.",
    img: "/merchpicker.png",
    iconLists: ["/re.svg", "/tail.svg", "/three.svg", "/framer.svg"],
    link: "/ui.apple.com",
  },
];

export const workExperience = [
  {
    id: 4,
    title: "Lead Frontend Developer at Link Vault",
    desc: "CEO and developer at Link Vault, a chrome extension that helps you easily save, access and organize your links and tabs.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 1,
    title: "Frontend Developer at Qhub",
    desc: "Developed the LMS platform for Qhub, a platform for organizations to train their employees.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Developer at Paypips ",
    desc: "Designed and developed the website and dashboard for Paypips, an organization that help forex traders to easily manage their telegram group.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Lead Developer at Sparksites Studios",
    desc: "CEO and developer at Sparksites Studios, a web development agency that helps businesses to create a strong online presence.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
import learnact from "@/assets/learnact.png";
import hoobank from "@/assets/hoobank.png";
import intask from "@/assets/intask.png";
import deapshoppingcenter from "@/assets/deapshoppingcenter.png";
import wiseupsolutions from "@/assets/wiseupsolutions.png";
import space from "@/assets/space.png";
export const products = [
  {
    title: "InTaks",
    link: "https://intaskweb.netlify.app/",
    thumbnail: intask,
  },
  {
    title: "The Learnact",
    link: "https://thelearnact.com/",
    thumbnail: learnact,
  },
  {
    title: "Paypips",
    link: "https://www.paypipsbot.com/",
    thumbnail: paypips,
  },

  {
    title: "Deap Shopping Center",
    link: "https://deapshoppingcenter.netlify.app/",
    thumbnail: deapshoppingcenter,
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Wise Up Solutions",
    link: "https://wiseupsolutions.com.ng/",
    thumbnail: wiseupsolutions,
  },
  {
    title: "Hoobank",
    link: "https://h00bankweb.netlify.app/",
    thumbnail: hoobank,
  },
  {
    title: "Space Website",
    link: "https://spacet0urism.netlify.app/",
    thumbnail: space,
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },
];

export const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

export const companies = [
  {
    id: 1,
    name: "PayPips",
    img: "/paypips.svg",
    nameImg: "/pname.svg",
  },
  {
    id: 2,
    name: "QHub",
    img: "/qlogo.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
];

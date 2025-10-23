const drawerOpen = ref(false);
const navLinks = [
  { path: "/", label: "Core Values" },
  { path: "/services", label: "Services" },
  { path: "/about-us", label: "About Us" },
  { path: "/contact-us", label: "Contact Us" },
];

export default function drawerComp() {
  const toggleDrawer = (status: boolean) => (drawerOpen.value = status);

  return {
    // CONSTS
    navLinks,
    // REFS
    drawerOpen,
    // METHODS
    toggleDrawer,
  };
}

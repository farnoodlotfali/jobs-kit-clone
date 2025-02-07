import PanelLayout from "@/layouts/panelLayout";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <PanelLayout>{children}</PanelLayout>;
};

export default Layout;

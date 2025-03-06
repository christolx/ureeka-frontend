interface NavigationItem {
    title: string;
    href?: string;
    description?: string;
    items?: { title: string; href: string }[];
  }
  
  const navigationItems: NavigationItem[] = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Product",
      description: "Managing a small business today is already tough.",
      items: [
        { title: "Reports", href: "/reports" },
        { title: "Statistics", href: "/statistics" },
        { title: "Dashboards", href: "/dashboards" },
        { title: "Recordings", href: "/recordings" },
      ],
    },
    {
      title: "Company",
      description: "Managing a small business today is already tough.",
      items: [
        { title: "About us", href: "/about" },
        { title: "Fundraising", href: "/fundraising" },
        { title: "Investors", href: "/investors" },
        { title: "Contact us", href: "/contact" },
      ],
    },
  ];
  
  const Footer: React.FC = () => {
    return (
      <footer className="bg-[#6E826D] text-white text-center py-6 mt-16">
        <div className="max-w-5xl mx-auto">
          <div className="w-full py-10 lg:py-20 text-background">
            <div className="container mx-auto">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="flex gap-8 flex-col items-start">
                  <div className="flex gap-2 flex-col">
                    <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                      TWBlocks™
                    </h2>
                    <p className="text-lg max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                      Managing a small business today is already tough.
                    </p>
                  </div>
                  <div className="flex gap-20 flex-row">
                    <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                      <p>1 Tailwind Way</p>
                      <p>Menlo Park</p>
                      <p>CA 94025</p>
                    </div>
                    <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                      <a href="/terms">Terms of service</a>
                      <a href="/privacy">Privacy Policy</a>
                    </div>
                  </div>
                </div>
                <div className="grid lg:grid-cols-3 gap-10 items-start">
                  {navigationItems.map((item) => (
                    <div
                      key={item.title}
                      className="flex text-base gap-1 flex-col items-start"
                    >
                      <div className="flex flex-col gap-2">
                        {item.href ? (
                          <a href={item.href} className="flex justify-between items-center text-xl">
                            {item.title}
                          </a>
                        ) : (
                          <p className="text-xl">{item.title}</p>
                        )}
                        {item.items &&
                          item.items.map((subItem) => (
                            <a
                              key={subItem.title}
                              href={subItem.href}
                              className="flex justify-between items-center text-background/75"
                            >
                              {subItem.title}
                            </a>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
interface NavigationItem {
    title: string;
    href?: string;
    description?: string;
    items?: { title: string; href: string }[];
  }
  
  const navigationItems: NavigationItem[] = [
    {
      title: "Navigate",
      items: [
        { title: "Home", href: "/" },
        { title: "About Us", href: "/aboutus" },
        { title: "Campaigns", href: "/campaigns" },
        { title: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      items: [
        { title: "Reports", href: "/reports" },
        { title: "Statistics", href: "/statistics" },
        { title: "Dashboards", href: "/dashboards" },
        { title: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Get Involved",
      items: [
        { title: "Donate", href: "/donate" },
        { title: "Fundraising", href: "/fundraising" },
        { title: "Volunteer", href: "/volunteer" },
        { title: "Partner", href: "/partner" },
      ],
    },
  ];
  
  const Footer: React.FC = () => {
    return (
      <footer className="bg-[#6E826D] text-white text-center py-6 mt-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="w-full py-10 lg:py-20 text-background">
            <div className="container mx-auto">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="flex gap-8 flex-col sm:items-center lg:items-start">
                  <div className="flex gap-2 flex-col text-center lg:text-left">
                    <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
                      <b>FoodFund</b>
                    </h2>
                    <p className="text-lg max-w-lg leading-relaxed tracking-tight text-background/75">
                      Feeding <span className="font-medium"><i>HOPE</i></span>, one meal at a time.
                    </p>
                  </div>
                  <div className="flex flex-row sm:flex-row justify-center lg:justify-start gap-10 sm:gap-5">
                    <div className="flex flex-col text-sm leading-relaxed tracking-tight text-background/75">
                      <p>Jl H Saidi 5/8</p>
                      <p>Sumatera Utara</p>
                      <p>Medan 20112</p>
                    </div>
                    <div className="flex flex-col text-sm leading-relaxed tracking-tight text-background/75">
                      <a href="/terms">Terms of service</a>
                      <a href="/privacy">Privacy Policy</a>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-10 items-start text-left">
                  {navigationItems.map((item) => (
                    <div key={item.title} className="flex text-base gap-1 flex-col items-start">
                      <div className="flex flex-col gap-2">
                        {item.href ? (
                          <a href={item.href} className="text-xl">
                            {item.title}
                          </a>
                        ) : (
                          <p className="text-xl font-medium">{item.title}</p>
                        )}
                        {item.items &&
                          item.items.map((subItem) => (
                            <a key={subItem.title} href={subItem.href} className="text-background/75">
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
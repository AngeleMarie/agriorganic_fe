export default function Footer() {
    const footerSections = [
      { 
                links: ['AGRIORGANIC Farm Ltd - Est 2024', 'KG 655 ST, Kigali, Rwanda'] 
      },
      { 
        title: 'Our Company', 
        links: ['Search', 'Privacy Statement', 'Join Our Affiliate', 'Tortum Blog'] 
      },
      { 
        title: 'Support', 
        links: ['FAQ', 'Help Center', 'Reach Out', 'Sitemap'] 
      },
      { 
        title: 'Legal', 
        links: ['Terms of Service', 'Privacy Policy', 'Cookie Policy'] 
      },
    ];
  
    return (
      <footer className="bg-blackie text-white py-10">
        <div className="container mx-auto">
          <div className="flex justify-between">
            {footerSections.map((section, index) => (
              <div key={index}>
            
                {index === 0 && (
                  <img src="agriorganic.png" alt="Agriorganic Logo" className="mb-4 h-24 w-32" />
                )}
                <h3 className="font-semibold mb-4">{section.title}</h3>
                <ul>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="mb-2">
                      <a href="#" className="hover:underline">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-8 text-center">
            <p><span>Copyright</span>&copy; 2024 Agriorganic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  
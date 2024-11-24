import { FaXTwitter } from "react-icons/fa6";
import { LuLinkedin } from "react-icons/lu";
import { Facebook } from "lucide-react";

export default function Footer() {
    const footerSections = [
        { 
            links: [] 
        },
        { 
            title: 'Our Company', 
            links: ['Search', 'Privacy Statement', 'Join Our Affiliate', 'Tortum Blog'] 
        },
        { 
            title: 'Reach Out', 
            links: ['+250787641599', 'agriorganicfarmltd5@gmail.com'] 
        },
        { 
            title: 'Support', 
            links: ['Help Center', 'Reach Out', 'Sitemap'] 
        },
        { 
            title: 'Legal', 
            links: ['Terms of Service', 'Privacy Policy', 'Cookie Policy'] 
        }
    ];

    return (
        <footer className="bg-blackie text-white py-10">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 px-12 md:grid-cols-5 gap-12">
                    {footerSections.map((section, index) => (
                        <div key={index} className="flex-1 min-w-[220px]">
                            {index === 0 && (
                                <div className="mb-8 mr-12">
                                    <img src="/agriorganic.png" alt="Agriorganic Logo" className="mb-4 h-24 w-32  md:mx-0" />
                                    <p className="text-sm mb-4 text-left">AGRIORGANIC Farm Ltd - Est 2024</p>
                                    <p className="text-sm mb-4 text-left">Gatagara, Musanze, Rwanda</p>
                                    {/* Social media icons */}
                                    <div className="flex  space-x-4 mt-4 md:justify-start">
                                        <div 
                                            className="bg-[#266937] rounded-full p-2 shadow-md hover:bg-white hover:text-[#266937]" 
                                            onClick={() => window.open('https://www.linkedin.com/company/agriorganic-farm-ltd/posts/?feedView=all', '_blank')}
                                        >
                                            <LuLinkedin className="w-6 h-6 cursor-pointer" />
                                        </div>
                                        <div 
                                            className="bg-[#266937] rounded-full p-2 shadow-md hover:bg-white hover:text-[#266937]" 
                                            onClick={() => window.open('https://twitter.com/Agri_Rwanda/', '_blank')}
                                        >
                                            <FaXTwitter className="w-6 h-6 cursor-pointer" />
                                        </div>
                                        <div 
                                            className="bg-[#266937] rounded-full p-2 shadow-md hover:bg-white hover:text-[#266937]" 
                                            onClick={() => window.open('https://www.facebook.com/profile.php?id=61553567904876', '_blank')}
                                        >
                                            <Facebook className="w-6 h-6 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className="">
                            <div className="">
                            <h3 className="font-semibold mb-4">{section.title}</h3>
                            <ul>
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex} className="mb-2">
                                        <a href="/" className="hover:underline">{link}</a>
                                    </li>
                                ))}
                            </ul>
                            </div>
                            </div>
                         

                        </div>
                    ))}
                </div>
                <div className="w-5/6 my-4 border-t-2 border-white/20 h-1 mx-auto"></div>
                <div className=" pt-8 text-center">
                    <p><span>Copyright</span>&copy; 2024 Agriorganic. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

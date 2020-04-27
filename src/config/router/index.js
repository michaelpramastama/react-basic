import Home from '../../containers/layout/pages/home';
import Contact from '../../containers/layout/pages/contact';
import About from '../../containers/layout/pages/about';
const pageRoutes = () => {
    return [
        {
            path: "/about",
            link: "/about",
            icon: "about",
            name: "Navigasi about",
            component: About
        },
        {
            path: "/contact",
            link: "/contact",
            icon: "video contact",
            name: "Navigasi contact",
            component: Contact
        },
        {
            path: "/home",
            link: "/home",
            icon: "home",
            name: "Navigasi home",
            component: Home
        }
    ];
};

export default pageRoutes();
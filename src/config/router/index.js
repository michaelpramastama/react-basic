import Home from '../../containers/layout/pages/home';
import Contact from '../../containers/layout/pages/contact';
import About from '../../containers/layout/pages/about';
import Tableku from '../../containers/layout/pages/table';
const pageRoutes = () => {
    return [
        {
            path: "/table",
            link: "/table",
            icon: "about",
            name: "Table",
            component: Tableku
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
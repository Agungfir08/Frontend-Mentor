import Image from 'next/image';
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarMenu,
} from '../ui/sidebar';
import Logo from '@/assets/images/logo.svg';
import HomeIcon from '@/assets/images/icon-home.svg';
import ArchivedIcon from '@/assets/images/icon-archive.svg';
import MenuSidebar from './menu-sidebar';

const HomeSidebar = () => {
    return (
        <Sidebar collapsible="none" className="space-y-4">
            <SidebarHeader className="py-3 ">
                <Image src={Logo} alt="logo" />
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu>
                    <MenuSidebar href="/all-notes">
                        <Image
                            src={HomeIcon}
                            alt="home icon"
                            className="size-5"
                        />
                        All Notes
                    </MenuSidebar>
                    <MenuSidebar href="/archived-notes">
                        <Image
                            src={ArchivedIcon}
                            alt="archived icon"
                            className="size-5"
                        />
                        Archived Notes
                    </MenuSidebar>
                </SidebarMenu>
            </SidebarContent>
        </Sidebar>
    );
};

export default HomeSidebar;

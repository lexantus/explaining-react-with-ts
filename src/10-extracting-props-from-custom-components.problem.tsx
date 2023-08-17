import { ComponentProps } from 'react';
// Imagine NavBar is an external library!

export const NavBar =(props: {
    title: string;
    links: string[];
    children: React.ReactNode;
}) => {
    return <div>Some content</div>;
};

// Your app:

type NavBarProps = ComponentProps<typeof NavBar>;


import { FC } from "react";

interface MobileMenuProps {
    toggleMenu: () => void;
}

const MobileMenuButton: FC<MobileMenuProps> = ({ toggleMenu }) => {
    return (
        <svg
            onClick={toggleMenu}
            width="18"
            height="18"
            viewBox="0 0 32 32"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0"
            className="cursor-pointer block xl:hidden"
        >
            <path
                d="M1.524 8.667h28.952c0.842 0 1.524-0.682 1.524-1.524s-0.682-1.524-1.524-1.524h-28.952c-0.842 0-1.524 0.682-1.524 1.524s0.682 1.524 1.524 1.524v0zM1.524 18.141h28.952c0.842 0 1.524-0.682 1.524-1.524s-0.682-1.524-1.524-1.524h-28.952c-0.842 0-1.524 0.682-1.524 1.524s0.682 1.524 1.524 1.524v0zM1.524 27.615h28.952c0.842 0 1.524-0.682 1.524-1.524s-0.682-1.524-1.524-1.524h-28.952c-0.842 0-1.524 0.682-1.524 1.524s0.682 1.524 1.524 1.524v0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
            ></path>
        </svg>
    );
};

export default MobileMenuButton;

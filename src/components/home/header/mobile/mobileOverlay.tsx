import { FC } from "react";

interface MobileOverlayProps {
    isOpen: boolean;
    handleOverlayClick: () => void;
}

const MobileOverlay: FC<MobileOverlayProps> = ({
    isOpen,
    handleOverlayClick,
}) => {
    return (
        isOpen && (
            <div
                className="fixed inset-0 bg-black opacity-50 z-40"
                onClick={handleOverlayClick}
            />
        )
    );
};

export default MobileOverlay;

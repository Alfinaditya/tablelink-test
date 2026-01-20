import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
	const [visible, setVisible] = useState(isOpen);
	const [animateOpen, setAnimateOpen] = useState(false);

	if (isOpen && !visible) {
		setVisible(true);
	}

	if (!isOpen && animateOpen) {
		setAnimateOpen(false);
	}

	useEffect(() => {
		if (isOpen) {
			requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					setAnimateOpen(true);
				});
			});
		} else {
			const timeout = setTimeout(() => {
				setVisible(false);
			}, 200);
			return () => clearTimeout(timeout);
		}
	}, [isOpen]);

	useEffect(() => {
		if (!isOpen) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [isOpen, onClose]);

	if (!isOpen && !visible) return null;

	return createPortal(
		<div
			className={cn(
				`fixed inset-0 z-1000 flex items-center justify-center bg-black/40 transition-opacity duration-200 ease-in-out`,
				animateOpen ? "opacity-100" : "opacity-0",
			)}
			onClick={onClose}
		>
			<div
				role="dialog"
				aria-modal="true"
				onClick={(e) => e.stopPropagation()}
				className={cn(
					`relative w-[90%] max-w-md rounded-lg bg-white p-6 shadow-2xl transition-all duration-200 ease-in-out`,
					animateOpen
						? "scale-100 translate-y-0 opacity-100"
						: "scale-95 translate-y-2 opacity-0",
				)}
			>
				<div className="flex items-center justify-between">
					<Button
						onClick={onClose}
						variant={"ghost"}
						size={"icon"}
						className="rounded-full absolute right-4 top-4"
					>
						<XIcon />
					</Button>
					<h1 className="font-bold text-xl">{title}</h1>
				</div>
				<div className="mt-5">{children}</div>
			</div>
		</div>,
		document.body,
	);
};

import React, { PropsWithChildren } from 'react';
import { ModalMain, ModalDialog, ModalContent, Screen } from './styles';

interface ModalProps {
	toggleModal: () => void;
}

function Modal({ toggleModal, children }: PropsWithChildren<ModalProps>) {
	return (
		<ModalMain>
			<ModalDialog>
				<ModalContent>
					{children}
				</ModalContent>
			</ModalDialog>
			<Screen
				onClick={(e: React.MouseEvent) => {
					e.preventDefault();
					if (toggleModal) {
						toggleModal();
					}
				}}
			/>
		</ModalMain>
	);
}

export default Modal;

import React, { PropsWithChildren } from 'react';
import { ModalContainer, ModalChildren, Screen } from './styles';

interface ModalProps {
	toggleModal: () => void;
}

function Modal({ toggleModal, children }: PropsWithChildren<ModalProps>) {
	return (
		<ModalContainer>
			<ModalChildren>
				{children}
			</ModalChildren>
			<Screen
				onClick={(e: React.MouseEvent) => {
					e.preventDefault();
					if (toggleModal) {
						toggleModal();
					}
				}}
			/>
		</ModalContainer>
	);
}

export default Modal;

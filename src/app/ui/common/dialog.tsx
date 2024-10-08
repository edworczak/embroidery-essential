import type { ReactNode } from 'react';
import { useEffect, useRef } from 'react';
import CardButtons from '@/app/ui/common/card-buttons';
import TapeLabel from '@/app/ui/common/tape-label';

type ModalProps = {
  isOpen: boolean;
  cancelLabel?: string;
  submitLabel?: string;
  cancelDisabled?: boolean;
  submitDisabled?: boolean;
  onClose: () => void;
  onCancel?: () => void;
  onSubmit?: () => void;
  children?: ReactNode;
};

function Dialog({
                 isOpen,
                 cancelLabel,
                 submitLabel,
                 cancelDisabled,
                 submitDisabled,
                 onClose,
                 onCancel,
                 onSubmit,
                 children,
               }: ModalProps) {
  const containerRef = useRef<HTMLDialogElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') handleClose();
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (containerRef.current?.contains(target) && !modalRef.current?.contains(target)) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleClose = () => {
    onClose();
  };

  return (
    <dialog open={isOpen} ref={containerRef}>
      <div className="fixed h-screen w-screen z-30 bg-white/[0.8] flex justify-center items-center top-0 left-0">
        <div>
          <div className="card p-6 flex flex-col justify-center text-center">
            <TapeLabel label="nowy projekt" cssClasses="-top-6 -left-6"/>
            <div ref={modalRef}>
              {children}
            </div>
            {onCancel && <button onClick={onCancel} disabled={cancelDisabled}>{cancelLabel}</button>}
            {onSubmit && <button onClick={onSubmit} disabled={submitDisabled}>{submitLabel}</button>}
          </div>
          <CardButtons buttons={[{ id: 'cancel', label: 'cancel', onClick: onCancel }, { id: 'save', label: 'save', onClick: onSubmit}]} />
        </div>
      </div>
    </dialog>
  );
}

export default Dialog;

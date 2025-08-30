import {Button, Modal as GUIModal, type ModalProps as GUIModalProps} from '@gravity-ui/uikit';
import {CircleXmarkFill} from '@gravity-ui/icons';

interface ModalProps extends GUIModalProps {
    title: string;
}
export const Modal = ({title, children, ...props}: ModalProps) => {
    return (
        <GUIModal {...props}>
            <div
                style={{
                    padding: '16px',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                        marginBottom: '16px',
                        gap: '10px',
                    }}
                >
                    <div style={{width: 40, height: 40}} />
                    <div style={{flex: 1, alignSelf: 'center'}}>
                        <Text variant="header-1">{title}</Text>
                    </div>
                    <Button
                        view="flat"
                        style={{
                            width: 40,
                            height: 40,
                        }}
                        onClick={() => {}}
                    >
                        <div
                            style={{
                                flex: 1,
                                width: 40,
                                height: 40,
                                justifyContent: 'center',
                                alignItems: 'center',
                                display: 'flex',
                            }}
                        >
                            <CircleXmarkFill />
                        </div>
                    </Button>
                </div>

                {children}
            </div>
        </GUIModal>
    );
};

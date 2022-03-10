import { ReactNode } from 'react';

interface IProps {
    isLoading: boolean;
    children: ReactNode;
}
export const Loading = ({ children, isLoading }: IProps): JSX.Element => {
    return (
        <div>
            {isLoading ? (
                <>
                    <div
                        className="spinner-border"
                        role="status"
                        style={{ margin: '0 auto', display: 'flex', justifyContent: 'center', width: '3em', height: '3em' }}
                    ></div>

                    <div className="sr-only">
                        Завантаження до 10 секунд (тому-що сайт використовує безкоштовний хостинг )
                    </div>
                </>
            ) : (
                <>{children}</>
            )}
        </div>
    );
};

import React from 'react';
import { Sticky } from 'react-sticky';

export const Navigation = (): JSX.Element => {
    return (
        <Sticky topOffset={320}>
            {({
                style,
                isSticky,

                // the following are also available but unused in this example
            }) => (
                <nav
                    style={style}
                    className={`navbar navbar-expand-lg navbar-light ${isSticky ? 'sticky' : ''}`}
                    id="mainNav"
                >
                    <div className="container px-4 px-lg-5">
                        <a className="navbar-brand" href="/">
                            ОСББ Парус Смарт
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarResponsive"
                            aria-controls="navbarResponsive"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            Menu
                            <i className="fas fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ms-auto py-4 py-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link px-lg-3 py-3 py-lg-4" href="/">
                                        Новини
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link px-lg-3 py-3 py-lg-4" href="/documents">
                                        Документи
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-lg-3 py-3 py-lg-4" href="/faq">
                                        Часті питання
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-lg-3 py-3 py-lg-4" href="/feedback">
                                        Опитування
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-lg-3 py-3 py-lg-4" href="/contact">
                                        Контакти
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            )}
        </Sticky>
    );
};

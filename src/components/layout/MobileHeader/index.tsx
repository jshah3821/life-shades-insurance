import React from 'react';
// import classes from "./mobileheader.module.scss";
type OffcanvasExampleProps = {
    tabIndex?: any;
};


const MobileHeader: React.FC<OffcanvasExampleProps> = ({ tabIndex }) => {
    return (
        <>
            <div>
                <a
                    className="btn btn-primary"
                    data-bs-toggle="offcanvas"
                    href="#offcanvasExample"
                    role="button"
                    aria-controls="offcanvasExample"
                >
                    Link with href
                </a>
                <button
                    className="btn btn-primary"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample"
                    aria-controls="offcanvasExample"
                >
                    Button with data-bs-target
                </button>

                <div
                    className="offcanvas offcanvas-start"
                    tabIndex={tabIndex}
                    id="offcanvasExample"
                    aria-labelledby="offcanvasExampleLabel"
                >
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                            Offcanvas
                        </h5>
                        <button
                            type="button"
                            className="btn-close text-reset"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body">
                        <div>
                            Some text as placeholder. In real life, you can have the elements you have chosen. Like text, images, lists,
                            etc.
                        </div>
                        <div className="dropdown mt-3">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                                Dropdown button
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileHeader;
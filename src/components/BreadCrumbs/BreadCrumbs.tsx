import * as React from 'react';
import { Link } from "react-router-dom";
import "./BreadCrumbs.scss"

interface BreadCrumbLink {
    link: string;
    text: string;
}

interface BreadCrumbsProps {
    linksArray: BreadCrumbLink[];
}

const BreadCrumbs: React.FC<BreadCrumbsProps>  = ({ linksArray }) => {
    return (
        <div className="breadcrumbs__wrapper">
            <Link to="/" className="breadcrumbs__link">Home</Link>
            {
                linksArray.map((link, index) => (
                    <Link key={ index } to={ link.link } className="breadcrumbs__link">{ link.text }</Link>)
                )
            }
        </div>
    );
};


export default BreadCrumbs;

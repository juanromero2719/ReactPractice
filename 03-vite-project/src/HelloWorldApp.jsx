import { Fragment } from "react";

export const HelloWorldApp = () => {
    return (<h1>Hello World!</h1>);
}

// export const FirstApp = () => {
//     return (
//         <Fragment>
//             <h1>Sebastian</h1>
//             <p>Soy un subtitulo</p>
//         </Fragment>
//     );
// }

const nombre = 'Sebastian';
 
export const FirstApp = ({title, subtitle}) => {

    return (
        <>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </>
    );
}
 
import React, { Fragment } from "react";

import { extractMainTitle } from '../../util'

const MainTitle = ({option}) => {
    return (
        <Fragment>
            {extractMainTitle(option)}
        </Fragment>
    )
}

export default MainTitle
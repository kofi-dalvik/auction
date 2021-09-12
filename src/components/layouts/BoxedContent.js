import { memo } from "react";

function BoxedContent({className, children}) {
    return (
        <div className="row justify-content-center v-stretch">
            <div className="col-lg-9 col-md-11 col-sm-11 col-12 v-stretch">
                <div className={className}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default memo(BoxedContent);

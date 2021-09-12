import { memo } from "react";

function BoxedContent({className, children}) {
    return (
        <div className="row justify-content-center v-stretch">
            <div className="col-lg-8 col-md-10 col-sm-12 col-12 v-stretch">
                <div className={className}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default memo(BoxedContent);

import React,{forwardRef} from 'react'
function ForwardRefChild(props,ref)
{
    return(
        <div>
            <input ref={ref} type="text" />
        </div>
    )
}

export default forwardRef(ForwardRefChild);
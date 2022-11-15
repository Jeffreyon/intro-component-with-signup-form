import React from "react";
import icon from "./icon-error.svg";
import Error from "./ErrorText";

function InputBox({ error, errorText, ...rest }, ref) {
    return (
        <div className="mb-4">
            <div className="relative">
                <input
                    className={
                        "w-full p-4 rounded-md border border-slate-200 font-semibold placeholder:text-slate-600" +
                        (error && " border-2 border-rose-500")
                    }
                    ref={ref}
                    {...rest}
                />
                {error && (
                    <img
                        className="absolute right-0 top-0 py-4 mr-6"
                        src={icon}
                        alt=""
                    />
                )}
            </div>
            <Error error={error} errorText={errorText} />
        </div>
    );
}

export default React.forwardRef(InputBox);

import React from "react";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min";

const Toast = () => {
    const toastTrigger = document.getElementById("liveToastBtn");
    const toastLiveExample = document.getElementById("liveToast");
    if (toastTrigger) {
        toastTrigger.addEventListener("click", () => {
            const toast = new bootstrap.Toast(toastLiveExample);

            toast.show();
        });
    }
    return (
        <div>
            <div className="d-grid mt-5">
                <button className="btn btn-lg btn-primary rounded shadow-sm" id="liveToastBtn">
                    Activity Completed
                </button>
            </div>
            <div className="toast-container position-fixed bottom-0 end-0 p-3">
                <div
                    id="liveToast"
                    className="toast align-items-center text-bg-primary border-0"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true">
                    <div className="d-flex">
                        <div className="toast-body">Congratulations!! Activity Completed.</div>
                        <button
                            type="button"
                            className="btn-close btn-close-white me-2 m-auto"
                            data-bs-dismiss="toast"
                            aria-label="Close"></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Toast;

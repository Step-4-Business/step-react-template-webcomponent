import r2wc from "@r2wc/react-to-web-component"
import StepCustomMFE from "./StepApp"

customElements.define(
    "mia_template_project_id_placeholder",
    r2wc(StepCustomMFE, {
        props: {
            theme: "string",
            auth: "string",
            company: "string",
            customer: "string",
            grants: "string",
            legal: "string"
        }
    })
)

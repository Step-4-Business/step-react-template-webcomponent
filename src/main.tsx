import React from "react"
import ReactDOM from "react-dom/client"
import { MicrofrontendWrapper } from "@step/microfrontend-wrapper"
import { Theme } from "@step/design-system"
import "./index.ts"
import { IAuth0WrapperProps, useCommonData } from "@step/frontend-auxiliaries"

interface IComponentToTestProps {
    authorizationProps: Omit<IAuth0WrapperProps, "children">
}

export const ComponentToTest: React.FC<IComponentToTestProps> = ({ authorizationProps }) => {
    const data = useCommonData()

    return (
        <mia_template_project_id_placeholder
            auth={JSON.stringify(authorizationProps)}
            theme={JSON.stringify(Theme)}
            company={JSON.stringify(data.company)}
            customer={JSON.stringify(data.customer)}
            grants={JSON.stringify(data.grants)}
            legal={JSON.stringify(data.legal)}
            isLegalRepresentatice={JSON.stringify(data.isLegalRepresentative)}
        />
    )
}

export const ComponentWrapper: React.FC = () => {
    const authorizationProps = {
        domain: "insert-me",
        clientId: "insert-me",
        authorizationParams: {
            audience: "insert-me",
            scope: "insert-me",
            redirect_uri: window.location.origin + "/login/callback"
        }
    }

    return (
        <MicrofrontendWrapper authorizationProps={authorizationProps}>
            <ComponentToTest authorizationProps={authorizationProps} />
        </MicrofrontendWrapper>
    )
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ComponentWrapper />
    </React.StrictMode>
)

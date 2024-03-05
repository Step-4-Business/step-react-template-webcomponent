import { Auth0Wrapper, IAuth0WrapperProps, ICompany, ICustomer, ILegal, QueryClientCustomProvider, useCommonData } from "@step/frontend-auxiliaries"
import React, { useEffect } from "react"
import { Provider } from "react-redux"
import { DefaultTheme, ThemeProvider } from "styled-components"
import store from "./store"

export interface StepAppMFEProps {
    theme: string
    auth: string
    company: string
    customer: string
    grants: string
    legal: string
}

interface IStepAppProps {
    company: ICompany
    customer: ICustomer
    grants: string[]
    legal: ILegal
}

interface IStepAppExtendsProps extends IStepAppProps {
    theme: DefaultTheme
    auth: Omit<IAuth0WrapperProps, "children">
}

export const StepApp: React.FC<IStepAppProps> = props => {
    const commonData = useCommonData()

    useEffect(() => {
        commonData.setCustomerGrantsOnCompany(props)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.company, props.customer, props.grants, props.legal, props.grants])

    return <div style={{ display: "flex", flex: 1, justifyContent: "center", alignContent: "center" }}>Let's start coding your perfect application</div>
}

export const StepAppWrapper: React.FC<IStepAppExtendsProps> = ({ theme, auth, ...props }) => {
    return (
        <QueryClientCustomProvider>
            <Auth0Wrapper {...auth}>
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <StepApp {...props} />
                    </ThemeProvider>
                </Provider>
            </Auth0Wrapper>
        </QueryClientCustomProvider>
    )
}

const StepAppMFE: React.FC<StepAppMFEProps> = ({ auth = "{}", company = "{}", customer = "{}", theme = "{}", grants = "[]", legal = "{}" }) => {
    return <StepAppWrapper theme={JSON.parse(theme)} auth={JSON.parse(auth)} company={JSON.parse(company)} customer={JSON.parse(customer)} grants={JSON.parse(grants)} legal={JSON.parse(legal)} />
}

export default StepAppMFE

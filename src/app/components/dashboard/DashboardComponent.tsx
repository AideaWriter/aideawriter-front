const DashboardComponent = ({
                                children,
                            }: {
    children: React.ReactNode
}) =>{
    return <section className={'dashboard-component'}>
        {children}
        {/*<CentralPanel />*/}
        {/*<RightPanel />*/}
    </section>
}

export default DashboardComponent

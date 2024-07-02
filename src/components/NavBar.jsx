const NavBar = () => {
    return (
        <>
            <div className="navbar bg-white py3 md:py-5 px:5 md:px-10">
                <div className="navbar-start">
                    <div className="flex gap-2">
                        <div>
                            <img src="/assets/images/logo.png" className="block md:hidden" />
                            <img src="/assets/images/logo-group.png" className="hidden md:block" />
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className="navbar-end"></div>
            </div>
        </>
    )
}

export default NavBar
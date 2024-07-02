const NavBar = () => {
    return (
        <>
            <div className="navbar bg-white py-0 px:5 md:px-10">
                <div className="navbar-start">
                    <div className="flex gap-2 items-center">
                        <div className="navbar-py">
                            <img src="/assets/images/logo.png" className="block md:hidden" alt="Bincom Dev Logo" />
                            <img src="/assets/images/logo-group.png" className="hidden md:block" alt="Bincom Dev Logo" />
                        </div>
                        <div className="divider divider-horizontal"></div>
                        <div className="navbar-py">
                            <label className="input input-bordered flex items-center gap-2">
                                <img src="/assets/svgs/Shape.svg" alt="search icon" />
                                <input type="text" className="grow" placeholder="Search by patients..." />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="flex gap-2">
                        <button className="btn btn-ghost">
                            <img src="/assets/svgs/notify.svg" alt="notification bell icon" />
                        </button>
                        <button className="btn btn-ghost flex items-center gap-2">
                            <img src="/assets/images/avartar.png" className="rounded-full" alt="user avaratar" />
                            <span>Deko</span>
                            <img src="/assets/svgs/Vector.svg" alt="dropdown icon" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar
function Footer() {
    return <>
            <footer>
                <span>
                    <h2>About</h2>
                <article>
                    
                    <h3>Diaz web app</h3>
                    <p>
                        Plataforma dedicada al desarrollo de software, para gestionar e impulsar todo tipo de emprendimiento, negocios y empresas a travez del desarrollo técnologico.
                    </p>

                    <h3>contácto</h3>
                    <ul>
                        <li>
                            <button>
                                facebook
                            </button>
                        </li>
                        <li>
                            <button>
                                instagram
                            </button>
                        </li>
                        <li>
                            <button>
                                gmail
                            </button>
                        </li>
                        <li>
                            <button>
                                twitter
                            </button>
                        </li>
                    </ul>
                </article>
                
                <article>
                    <h3>erick diaz</h3>
                    <p>
                         Emprendedor, desarrollador de software y administrador de sistemas. Fundador y representante de la plataforma <b>Diaz web app</b>
                    </p>

                    <h3>contácto</h3>

                    <ul>
                        <li>
                            <button>
                                facebook
                            </button>
                        </li>
                        <li>
                            <button>
                                instagram
                            </button>
                        </li>
                        <li>
                            <button>
                                gmail
                            </button>
                        </li>
                    </ul>
                </article>
                </span>
            </footer>
            <style>
                {
                    `
                    footer{
                        background:#2d2d2d;
                        grid-column: 1 / span 16;
                    }
                    footer > span{
                        grid-column: 2 / span 14;
                        display:flex;
                        flex-flow:row wrap;
                        justify-content:space-between;
                    }
                    footer > span h2{
                        width:100%;
                        color:lightgrey;
                        text-align:center;
                    }
                    footer > span article{
                        width:48%;
                        color:lightgrey;
                    }
                    `
                }
            </style>
        </>
}

export {Footer}